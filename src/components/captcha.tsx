import React from 'react'
import { Helmet } from 'react-helmet'
import siteStore from 'utils/sitestore'

export default function Captcha() {
    return (
        <Helmet
            onChangeClientState={(_, addedTags) => {
                addedTags.scriptTags?.forEach((script) => {
                    if (
                        script.dataset &&
                        script.dataset.scriptName === 'recaptcha'
                    ) {
                        script.addEventListener('load', () => {
                            siteStore.dispatch('com:recaptcha-ready', true)
                        })
                    }
                })
            }}
        >
            <script
                src={`https://www.google.com/recaptcha/api.js?render=${process.env.RECAPTCHA_KEY}`}
                data-script-name="recaptcha"
            ></script>
        </Helmet>
    )
}
