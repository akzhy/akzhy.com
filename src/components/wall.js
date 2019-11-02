import React from "react"
import "../styles/wall.scss"

export default class Wall extends React.Component {
    /*constructor(props) {
        super(props)
    }*/

    render() {
        return (
            <div className="wall">
                <div className="intro">
                    <div>
                        <h1>akzhy</h1>
                        <div>
                            <span>Web Developer</span>
                            <span>Javascript Enthusiast</span>
                        </div>
                    </div>
                </div>
                <div className="background">
                    <div
                        className="layer"
                        style={{ background: "url(/images/l1.png)" }}
                    ></div>
                    <div
                        className="layer"
                        style={{ background: "url(/images/l2.png)" }}
                    ></div>
                    <div
                        className="layer"
                        style={{ background: "url(/images/l3.png)" }}
                    ></div>
                    <div
                        className="layer"
                        style={{ background: "url(/images/l4.png)" }}
                    ></div>
                    <div
                        className="layer"
                        style={{ background: "url(/images/l5.png)" }}
                    ></div>
                    <div
                        className="layer"
                        style={{ background: "url(/images/l6.png)" }}
                    ></div>
                </div>
            </div>
        )
    }
}
