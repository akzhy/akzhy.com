import vegemite from 'vegemite'

interface EventMap {
    'com:recaptcha-ready': boolean
}

interface Store {
    captchaReady: boolean
}

const siteStore = vegemite<EventMap, Store>({
    captchaReady: false,
})

siteStore.on('com:recaptcha-ready', (state) => {
    state.captchaReady = true
})

export default siteStore
