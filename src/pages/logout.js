import React from "react"

export default class Logout extends React.Component{

    componentDidMount(){
        window.localStorage.clear();
        window.location = "/";
    }
    render(){
        return (
            <div>Logging out...</div>
        )
    }
}