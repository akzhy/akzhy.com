import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet";

import Seo from "./seo"
import Header from "./header"
import Footer from "../components/footer"

import "../styles/theme.scss";

const Layout = ({ children, seo }) => {
    return (
        <div id="wrapper" className="theme-dark">
            <div id="main">
                <Seo {...seo}/>
                <Helmet>
                    <link href="https://fonts.googleapis.com/css?family=Poppins:400,900" rel="stylesheet"/>
                </Helmet>
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
