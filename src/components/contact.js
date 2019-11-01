import React from "react"
import Title from "../components/title"
import Textarea from "react-textarea-autosize"
import { Paperplane } from "../components/icons"
import Social from "../components/social"
import config from "../../config" 

export default class Contact extends React.Component {

    constructor(props) {
        super(props)

        this.cName = React.createRef()
        this.cEmail = React.createRef()
        this.cMessage = React.createRef()

        this.state = {
            error: false,
            btnDisbaled: false,
            message: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();

        this.setState({
            message: false,
            error: false
        })

        const name = this.cName.current, email = this.cEmail.current, message = this.cMessage;

        if(name.value !== "" && email.value !== "" && message.value !== ""){
            if(message.value.length < 15){
                this.setState({
                    error: true,
                    message: "Message should contain atleast 15 characters"
                })
                return;
            }

            this.setState({
                btnDisbaled: true
            })

            fetch(`${config.cms}/wp-json/restcontact/v1/add`,{
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name.value,
                    email: email.value,
                    message: message.value
                })
            }).then((res) => res.json()).then((body) => {
                this.setState({
                    btnDisbaled: false
                })
                if(body.result === "success"){
                    this.setState({
                        error: false,
                        message: "Email sent succesfully"
                    })

                    this.cMessage.value = "";
                }else {
                    this.setState({
                        error: true,
                        message: body.message
                    })
                }
            })
        } else {
            this.setState({
                error: true,
                message: "Please fill all the fields"
            })
        }
    }

    render() {
        return (
            <div className="section" id="contact">
                <div className="container">
                    <Title data="Contact" />
                    <form onSubmit={this.handleSubmit}>
                        <div className="contents boxed">
                            <div className="input-field">
                                <label>
                                    <p>Name</p>
                                    <div className="field">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="input"
                                            ref={this.cName}
                                        />
                                    </div>
                                </label>
                            </div>
                            <div className="input-field">
                                <label>
                                    <p>Email</p>
                                    <div className="field">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="input"
                                            ref={this.cEmail}
                                        />
                                    </div>
                                </label>
                            </div>
                            <div className="input-field">
                                <label>
                                    <p>Message</p>
                                    <div className="field">
                                        <Textarea
                                            className="input"
                                            minRows={3}
                                            placeholder="Message"
                                            inputRef={tag => (this.cMessage = tag)}
                                        />
                                    </div>
                                </label>
                            </div>
                            {this.state.error &&
                                <p className="error">{this.state.message}</p>
                            }
                            <div className="input-field">
                                <button
                                    type="submit"
                                    className="btn color-primary"
                                    disabled={this.state.btnDisbaled}
                                >
                                    Send{" "}
                                    <Paperplane className="fill-text-primary" />
                                </button>
                            </div>
                            {(!this.state.error && this.state.message) &&
                                <p className="success">{this.state.message}</p>
                            }
                        </div>
                    </form>
                    <Social style={{ marginTop: "128px" }} />
                </div>
            </div>
        )
    }
}
