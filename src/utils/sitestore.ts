import vegemite from 'vegemite'

interface EventMap {
    'com:recaptcha-ready': boolean
    'com:toggle-theme': number | false
}

interface Store {
    captchaReady: boolean
    currentTheme: number
    themes: Themes[]
}

const siteStore = vegemite<EventMap, Store>({
    captchaReady: false,
    currentTheme: 0,
    themes: ['theme-dark', 'theme-light'],
})

siteStore.on('com:recaptcha-ready', (state) => {
    state.captchaReady = true
})

siteStore.on('com:toggle-theme', (state, action) => {
    if (action === false) {
        if (state.currentTheme + 1 >= state.themes.length) {
            state.currentTheme = 0
        } else {
            state.currentTheme += 1
        }
    } else {
        state.currentTheme = action
    }
})

export default siteStore
