import React from "react"

export default class Message extends React.Component {

    constructor(props){
        super(props);
        this.p = React.createRef();
    }

    componentDidUpdate(){
        const _this = this;
        this.p.current.style.opacity = 1;
        this.p.current.style.display = "block";
        this.p.current.style.transition = "opacity .35s";
        setTimeout(() => {
            _this.p.current.style.opacity = 0;
        }, 4000);

        setTimeout(() => {
            _this.p.current.style.display = "none";
        }, 4400);
    }

    render() {
        return (
            <p className={this.props.error ? "error" : "success"} ref={this.p}>
                {this.props.message}
            </p>
        )
    }
}
