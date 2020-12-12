import React,{ ReactNode } from "react"
import {Helmet} from "react-helmet"
import Footer from "./footer"
import Header from "./header"

interface Props {
    children: ReactNode;
}

export default function Layout({ children }:Props) {
    return (
        <div
            id="wrapper"
            className=""
        >
            <div id="main" className="bg-bg-primary theme-dark">
                <Helmet>
                    <link
                        href="https://fonts.googleapis.com/css?family=Poppins:400,900"
                        rel="stylesheet"
                    />
                </Helmet>
                <Header />
                <div>{children}</div>
                <Footer />
            </div>
        </div>
    )
}