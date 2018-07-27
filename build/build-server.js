const signale = require('signale')
const changeHtmlSrc = require('./util')

changeHtmlSrc().then(() => {
  signale.success('生产环境构建完成')
})
