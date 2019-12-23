import React from "react"
import Script from 'react-load-script'
import config from "../../config.json"


export default class ReCaptcha extends React.Component {

    constructor(props){
        super(props);
        this.state={
            scriptError: false,
            scriptLoaded: false,
        }
    }

    handleScriptError() {
        this.setState({ scriptError: true })
    }
       
    handleScriptLoad() {
        this.setState({ scriptLoaded: true })
    }

    componentDidUpdate(){
        if(this.state.scriptLoaded){
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', config.analytics);
        }
    }

    render (){
        return(
            <React.Fragment>
                <Script
                url={`https://www.googletagmanager.com/gtag/js?id=${config.analytics}`}
                onError={this.handleScriptError.bind(this)}
                onLoad={this.handleScriptLoad.bind(this)}
                />
            </React.Fragment>
        )
    }
}
