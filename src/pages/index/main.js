import '@/scripts/entry'
import('@/scripts/vue').then(({Vue}) => {
  window.apiready = function () {
    initVue(Vue)
  }
})

function initVue (Vue) {
  new Vue({
    el: '#app',
    mounted () {
      const { offsetHeight } = this.$refs.app
      window.api.openFrameGroup({
        name: 'group',
        scrollEnabled: false,
        rect: {
          x: 0,
          y: offsetHeight,
          w: window.api.winWidth,
          h: window.api.winHeight - offsetHeight
        },
        index: 0,
        frames: this.frames
      })
    },
    data: {
      menu: [{
        name: '首页'
      }, {
        name: '图片'
      }, {
        name: '图标'
      }, {
        name: '关于'
      }],
      frames: [{
        name: 'home',
        url: '../home/index.html',
        bgColor: 'rgba(0,0,0,.2)',
        bounces: true
      }, {
        name: 'photograph',
        url: '../photograph/index.html',
        bgColor: 'rgba(0,0,0,.2)',
        bounces: true
      }, {
        name: 'icons',
        url: '../icons/index.html',
        bgColor: 'rgba(0,0,0,.2)',
        bounces: true
      }, {
        name: 'about',
        url: '../about/index.html',
        bgColor: 'rgba(0,0,0,.2)',
        bounces: true
      }]
    },
    methods: {
      changeFrame (index) {
        window.api.setFrameGroupIndex({
          name: 'group',
          index: index
        })
      }
    }
  })
}
