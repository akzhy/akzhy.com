import React from "react"
import Layout from "../components/layout"
import config from "../../config.json"

const seo = {
    title: "Login",
}
export default class Login extends React.Component{
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
        this.name = React.createRef();
        this.password = React.createRef();
    }

    submit(event) {
        event.preventDefault();
        fetch(`${config.cms}/wp-json/jwt-auth/v1/token`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: this.name.current.value,
                password: this.password.current.value,
            }),
            //mode: 'no-cors'
        })
        .then(res => {
            return res.json()
        })
        .then(obj => {
            if(obj.token){
                localStorage.setItem("auth",JSON.stringify(obj));
                window.location = "/";
            }
        })
    }

    render() {
        return (
            <Layout seo={seo}>
                <div className="page content">
                    <form onSubmit={this.submit}>
                        <div className="input-field">
                            <label>
                                <p>Name</p>
                                <div className="field">
                                    <input type="text" className="input" ref={this.name}/>
                                </div>
                            </label>
                        </div>
                        <div className="input-field">
                            <label>
                                <p>Password</p>
                                <div className="field">
                                    <input type="password" className="input" ref={this.password}/>
                                </div>
                            </label>
                        </div>
                        <div className="input-field">
                            <input
                                type="submit"
                                value="Submit"
                                className="btn"
                            />
                        </div>
                    </form>
                </div>
            </Layout>
        )
    }
}
