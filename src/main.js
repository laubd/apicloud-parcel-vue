import './scripts/entry'

window.apiready = function () {
  const { api } = window
  api.parseTapmode()

  api.setStatusBarStyle({
    style: 'dark'
  })

  api.setKeepScreenOn({
    keepOn: true
  })

  api.addEventListener({
    name: 'offline'
  }, function (ret, err) {
    api.alert({
      msg: '网络异常'
    }, function (ret, err) {

    })
  })

  // 云修复
  api.addEventListener({
    name: 'smartupdatefinish'
  }, function (ret, err) {
    api.rebootApp()
  })

  window.api.openWin({
    name: 'index',
    url: './pages/index/index.html',
    pageParam: window.api.pageParam,
    allowEdit: false,
    bounces: false
  })

  api.removeLaunchView({
    animation: {
      type: 'fade',
      duration: 400
    }
  })
}
