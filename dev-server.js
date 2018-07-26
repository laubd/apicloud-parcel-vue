const fs = require('fs');
const promisify = require('util').promisify;
const path = require('path');
const glob = require('glob');
const express = require('express');
const parcel = require('parcel-bundler');
const signale = require('signale');
const app = express();

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

const bundler = new parcel('src/index.html', {
  publicUrl: './',
  hmr: false,
  cache: true,
  sourceMaps: false
});

app.use(bundler.middleware());

bundler.on('bundled', async () => {
  const files = glob.sync(path.resolve(__dirname, 'dist/**/*.html'))
  await changeHtmlSrc(files)
  signale.success('success');
});

const changeHtmlSrc = async (files) => {
  const filesData = {}

  for (let file of files) {
    const buffer = await readFile(file)
    filesData[file] = buffer.toString()
  }

  for (let file in filesData) {
    const insertPath = findFileDeepStr(file)
    filesData[file] = filesData[file].replace(/ src="(..\/){0,}(?!http)/g, ` src="${insertPath}`)
    filesData[file] = filesData[file].replace(/ href="(..\/){0,}(?!http)/g, ` href="${insertPath}`)
    await writeFile(file, filesData[file])
  }

}

function findFileDeepStr (path) {
  const startIndex = path.indexOf('dist/')
  const dirs = path.slice(startIndex).split('/')
  const deep = dirs.length - 2
  let result = ''
  for (let i = 0; i < deep; i++) {
    result += '../'
  }
  return result
}

app.listen(1234);