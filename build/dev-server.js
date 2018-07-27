const express = require('express')
const parcel = require('parcel-bundler')
const signale = require('signale')
const app = express()
const changeHtmlSrc = require('./util')

const bundler = new parcel('src/index.html', {
  publicUrl: './',
  hmr: false,
  cache: true,
  sourceMaps: false
})

app.use(bundler.middleware())

bundler.on('bundled', async () => {
  await changeHtmlSrc()
  signale.success('success')
})

app.listen(1234)