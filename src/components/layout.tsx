import React, { ReactNode } from 'react'
import { Helmet } from 'react-helmet'
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
    return (
        <div id="wrapper" className="">
            <div id="main" className="bg-bg-primary theme-dark">
                <Helmet>
                    <link
                        href="https://fonts.googleapis.com/css?family=Poppins:400,900"
                        rel="stylesheet"
                    />
                </Helmet>
                <SEO {...seo} />
                <Header />
                <div>{children}</div>
                <Footer />
            </div>
        </div>
    )
}
