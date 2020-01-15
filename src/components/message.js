import React from "react"

export default class Message extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            opacity: 1,
            display: "block",
        }

        this.errorCount = this.props.errorCount

        this.timeouts = []
    }

    componentDidUpdate(){
        if(this.errorCount !== this.props.errorCount){
            this.timeouts.forEach(t => clearTimeout(t));

            this.setState({
                opacity: 1,
                display: "block"
            })
            this.timeouts.push(
                setTimeout(() => {this.setState({ opacity: 0})},18000)
            );
            this.timeouts.push(
                setTimeout(() => {this.setState({ display: "none"})},18400)
            );

            this.errorCount = this.props.errorCount
        }
    }

    componentWillUnmount(){
        this.timeouts.forEach(t => {
            if(t) clearTimeout(t);
        })
    }

    render() {
        return (
            <p className={this.props.error ? "error" : "success"} style={{
                transition: "opacity .35s",
                opacity: this.state.opacity,
                display: this.state.display
            }}>
                {this.props.message}
            </p>
        )
    }
}
