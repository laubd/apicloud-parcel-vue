import '@/scripts/entry'

window.apiready = function () {
    const headerHeight = document.getElementById('header').offsetHeight
    document.querySelector('.c-header__back').addEventListener('click', () => {
        window.api.closeWin()
    })
    window.api.openFrame({
        name: 'user-frame',
        url: './frame.html',
        bounces: false,
        vScrollBarEnabled: false,
        hScrollBarEnabled: false,
        pageParam: window.api.pageParam,
        rect: {
            x: 0,
            y: headerHeight,
            w: window.api.winWidth,
            h: window.api.winHeight - headerHeight
        }
    })
}