import 'hotcss'
import 'babel-polyfill'
import '../icons/iconfont'
import '../css/api.css'
import '../scss/main.scss'
import './api'
const attachFastClick = require('fastclick')
setTimeout(() => {
  attachFastClick(document.body)
}, 1000);
