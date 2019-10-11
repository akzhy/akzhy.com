import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet";

import Seo from "./seo"
import Header from "./header"
import Footer from "../components/footer"

import "../styles/theme.less";

const Layout = ({ children, seo }) => {
    return (
        <React.Fragment>
            <Seo {...seo}/>
            <Helmet>
                <link href="https://fonts.googleapis.com/css?family=Poppins:400,900" rel="stylesheet"/>
            </Helmet>
            <Header />
            <main>{children}</main>
            <Footer />
        </React.Fragment>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
