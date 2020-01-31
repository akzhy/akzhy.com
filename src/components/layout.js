import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import Seo from "./seo"
import Header from "./header"
import Footer from "./footer"
import CookieBox from "./cookiebox"
import Analytics from "./analytics"

import "../styles/theme.scss"

class Layout extends React.Component {
    constructor(props) {
        super(props)

        this.themes = ["light", "dark"]

        this.state = {
            theme: 0,
        }
    }

    componentDidMount() {
        if (localStorage.getItem("theme")) {
            const theme = Number(localStorage.getItem("theme"))

            this.setState({
                theme: theme,
            })
        } else {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                localStorage.setItem("theme", 1);

                this.setState({
                    theme: 1
                })
            }
        }
    }

    cycleTheme = () => {
        let theme
        if (this.state.theme === this.themes.length - 1) {
            theme = 0
        } else {
            theme = this.state.theme + 1
        }

        this.setState({
            theme: theme,
        })

        localStorage.setItem("theme", theme)
    }

    render() {
        const nextTheme =
            this.state.theme === this.themes.length - 1
                ? 0
                : this.state.theme + 1
        const currentTheme = {
            index: this.state.theme,
            theme: this.themes[this.state.theme],
            nextTheme: this.themes[nextTheme],
        }
        return (
            <div
                id="wrapper"
                className={`theme-${this.themes[this.state.theme]}`}
            >
                <Analytics />
                <div id="main">
                    <Seo {...this.props.seo} />
                    <Helmet>
                        <link
                            href="https://fonts.googleapis.com/css?family=Poppins:400,900"
                            rel="stylesheet"
                        />
                    </Helmet>
                    <Header
                        cycleTheme={this.cycleTheme}
                        currentTheme={currentTheme}
                    />
                    <main>{this.props.children}</main>
                    <Footer />
                </div>
                <CookieBox />
            </div>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
