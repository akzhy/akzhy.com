import React from "react"
import Script from 'react-load-script'

export class AutoAd extends React.Component {

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


export class DisplayAd extends React.Component {

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
            let adsbygoogle;
            (adsbygoogle = window.adsbygoogle || []).push({});
        }
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
                <ins className="adsbygoogle"
                data-ad-client="ca-pub-8484156190843706"
                data-ad-slot="6749903075"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            </React.Fragment>
        )
    }
}

