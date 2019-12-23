import React from "react"
import Script from 'react-load-script'

export default class Adsense extends React.Component {

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

    render (){
        return(
            <React.Fragment>
                <Script
                url="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                attributes={{
                    "data-ad-client": "ca-pub-8484156190843706",
                    "async": "true"
                }}
                onError={this.handleScriptError.bind(this)}
                onLoad={this.handleScriptLoad.bind(this)}
                />
            </React.Fragment>
        )
    }
}