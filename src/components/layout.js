import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet";

import Seo from "./seo"
import Header from "./header"
import Footer from "../components/footer"

import "../styles/theme.scss";


class Layout extends React.Component {
    constructor(props){
        super(props);

        this.themes = ["light","dark"];

        this.state = {
            theme: 0
        }
    }

    componentDidMount(){
        if(localStorage.getItem("theme")){
            const theme = Number(localStorage.getItem("theme"));

            this.setState({
                theme: theme
            })
        }
    }

    cycleTheme = () => {
        let theme;
        if(this.state.theme === this.themes.length-1){
            theme = 0;
        } else {
            theme = (this.state.theme+1)
        }

        this.setState({
            theme: theme
        })

        localStorage.setItem("theme", theme);
    }

    render(){
        return (
            <div id="wrapper" className={`theme-${this.themes[this.state.theme]}`}>
                <div id="main">
                    <Seo {...this.props.seo}/>
                    <Helmet>
                        <link href="https://fonts.googleapis.com/css?family=Poppins:400,900" rel="stylesheet"/>
                    </Helmet>
                    <Header cycleTheme={this.cycleTheme} currentTheme={{ index: this.state.theme, theme: this.themes[this.state.theme]}}/>
                    <main>{this.props.children}</main>
                    <Footer />
                </div>
            </div>
        )
    }
}


Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
