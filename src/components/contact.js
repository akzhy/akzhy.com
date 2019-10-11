import React from "react";
import Title from "../components/title"
import Textarea from "react-textarea-autosize"
import { Paperplane } from "../components/icons"
import Social from "../components/social"

export default class Contact extends React.Component{
    render(){
        return (
            <div className="section" id="contact">
                <div className="container">
                    <Title data="Contact"/>
                    <div className="contents">
                        <div className="input-field">
                            <label>
                                <p>Name</p>
                                <div className="field">
                                    <input type="text" placeholder="Name" className="input"/>
                                </div>
                            </label>
                        </div>
                        <div className="input-field">
                            <label>
                                <p>Email</p>
                                <div className="field">
                                    <input type="email" placeholder="Email" className="input"/>
                                </div>
                            </label>
                        </div>
                        <div className="input-field">
                            <label>
                                <p>Message</p>
                                <div className="field">
                                    <Textarea className="input" minRows={3} placeholder="Message"/>
                                </div>
                            </label>
                        </div>
                        <div className="input-field">
                            <button type="submit" className="btn color-primary">Send <Paperplane className="fill-text-primary"/></button>
                        </div>
                    </div>
                    <Social style={{ marginTop: "128px" }}/>
                </div>
            </div>
        )
    }
}