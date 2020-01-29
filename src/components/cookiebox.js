import React from "react"
import { Link } from "gatsby"

export default class CookieBox extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            cookieAccepted: false
        }
    }

    handleClick = () => {
        this.setState({
            cookieAccepted: true
        })
        window.localStorage.setItem("cookie-accepted","1");
    }

    componentDidMount(){
        if(window.localStorage.getItem("cookie-accepted") === "1"){
            this.setState({
                cookieAccepted: true
            })
        }
    }

    render(){
        return (
            <React.Fragment>
                {!this.state.cookieAccepted && 
                    <div className="cookie-box">
                        <p>This website uses cookie to ensure you get the best experience on our website.</p>
                        <div className="action-box">
                            <Link to="/privacy-policy">Privacy policy</Link>
                            <button className="btn" onClick={this.handleClick}>Accept</button>
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}