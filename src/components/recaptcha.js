import React from "react"
import { loadReCaptcha, ReCaptcha } from "react-recaptcha-google"
import config from "../../config.json"

export class RecaptchaContainer extends React.Component {
    componentDidMount() {
        loadReCaptcha()
    }

    render() {
        return <React.Fragment>{this.props.children}</React.Fragment>
    }
}

export class Recaptcha extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this)
        this.verifyCallback = this.verifyCallback.bind(this)

        this.state = {
            token: false
        }
    }

    componentDidMount(){
        this.generate();
    }

    generate = () => {
        if (this.recaptcha) {
            this.recaptcha.reset()
            this.recaptcha.execute()
        }
    }
    onLoadRecaptcha() {
        if (this.recaptcha) {
            this.recaptcha.reset()
            this.recaptcha.execute()
        }
    }
    verifyCallback(recaptchaToken) {
        this.setState({
            token: recaptchaToken
        })
    }
    render() {
        return (
            <React.Fragment>
                <ReCaptcha
                    ref={el => {
                        this.recaptcha = el
                    }}
                    size="invisible"
                    render="explicit"
                    sitekey={config.sitekey}
                    onloadCallback={this.onLoadRecaptcha}
                    verifyCallback={this.verifyCallback}
                />
                {React.cloneElement(this.props.children, {recaptchaToken: this.state.token, generateRecaptcha: this.generate})}
            </React.Fragment>
        )
    }
}
