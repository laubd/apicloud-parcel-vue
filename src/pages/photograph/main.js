import '@/scripts/entry'
import img from '../../images/one_teaser.png'
import('@/scripts/vue').then(({Vue}) => {
  window.apiready = function () {
    initVue(Vue)
  }
})

function initVue (Vue) {
  // const { api } = window
  new Vue({
    el: '#frame',
    data: {
      img: '../../' + img
    }
  })
}
