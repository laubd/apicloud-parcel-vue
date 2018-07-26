import '@/scripts/entry'
import('@/scripts/vue').then(({Vue}) => {
  window.apiready = function () {
    initVue(Vue)
  }
})

function initVue (Vue) {
  new Vue({
    el: '#frame',
    created () {
      console.log('vue created')
    }
  })
}
