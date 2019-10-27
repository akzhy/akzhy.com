import React from "react"
import Layout from "../components/layout"
import config from "../../config.json"
import Title from "../components/title"

const seo = {
    title: "Login",
}
export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
        this.email = React.createRef()

        this.state = {
            hasToken: false,
            searchParams: {}
        }
    }

    componentDidMount(){
        let params = (new URL(document.location)).searchParams;
        if(params.has("token")){
            this.setState({
                hasToken: true,
                searchParams: {
                    token: params.get("token")
                }
            })
        }
    }

    submit(event) {
        event.preventDefault()
        fetch(`${config.cms}/wp-json/jwt-auth/v1/token`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: this.name.current.value,
                password: this.password.current.value,
            }),
        })
            .then(res => {
                return res.json()
            })
            .then(obj => {
                if (obj.token) {
                    localStorage.setItem("auth", JSON.stringify(obj))
                    window.location = "/"
                }
            })
    }

    render() {
        return (
            <Layout seo={seo}>
                <div className="section">
                    <div className="container">
                        <div className="boxed">
                            <Title data="Manage Subscriptions" />
                            {!this.state.hasToken && (
                                <form onSubmit={this.submit}>
                                    <p>To manage your subscriptions, please enter your email address.</p>
                                    <div className="input-field">
                                        <label>
                                            <p>Email</p>
                                            <div className="field">
                                                <input
                                                    type="text"
                                                    className="input"
                                                    ref={this.email}
                                                    name="email"
                                                />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="input-field">
                                        <button type="submit" className="btn">Submit</button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
