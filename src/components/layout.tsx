import React, { ReactNode, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import siteStore from 'utils/sitestore'
import CookieBox from './cookiebox'
import Footer from './footer'
import Header from './header'
import { SEO } from './seo'

interface Props {
    children: ReactNode
    seo: {
        title: string
        description: string
        image?: string
    }
}

export default function Layout({ children, seo }: Props) {
    const themes = siteStore.state.themes
    const [theme, setTheme] = useState(siteStore.state.currentTheme)

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')

        if (savedTheme) {
            siteStore.dispatch('com:toggle-theme', Number(savedTheme))
        }

        const removeListener = siteStore.listen('com:toggle-theme', (s) =>
            setTheme(s.currentTheme)
        )

        return () => {
            removeListener()
        }
    }, [])

    return (
        <div id="wrapper" className={themes[theme]}>
            <div id="main" className="bg-bg-primary">
                <Helmet>
                    <link
                        href="https://fonts.googleapis.com/css?family=Poppins:400,900"
                        rel="stylesheet"
                    />
                    <link rel="icon" type="image/png" href="/images/fav.png" />
                </Helmet>
                <SEO {...seo} />
                <Header />
                <div className="pt-24 lg:pt-0">{children}</div>
                <Footer />
                <CookieBox />
            </div>
        </div>
    )
}
