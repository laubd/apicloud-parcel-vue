import '@/scripts/entry'
import('@/scripts/vue').then(({Vue}) => {
    window.apiready = function () {
        initVue(Vue)
    }
})

function initVue (Vue) {
    const { api } = window
    new Vue({
        el: '#frame',
        methods: {
          toUser () {
            api.openWin({
                name: 'user',
                url: '../user/index.html',
                pageParam: window.api.pageParam,
                allowEdit: false,
                bounces: false
            })
          }
        }
    })
}
