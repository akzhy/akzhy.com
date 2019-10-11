import React from "react"
import { Twitter, Codepen, StackOverflow, GitHub } from "./icons"

export default (props) => {
    return (
        <div className="social-profiles" {...props}>
            <ul className="items">
                <li className="item">
                    <a className="overlay-link" href="https://twitter.com/_akzhy" title="Twitter">Twitter</a>
                    <Twitter />
                </li>
                <li className="item">
                    <a className="overlay-link" href="https://codepen.io/akzhy/" title="Codepen">Codepen</a>
                    <Codepen />
                </li>
                <li className="item">
                    <a className="overlay-link" href="https://stackoverflow.com/users/3971928/akshay" title="StackOverflow">StackOverflow</a>
                    <StackOverflow />
                </li>
                <li className="item">
                    <a className="overlay-link" href="https://github.com/akzhy" title="GitHub">GitHub</a>
                    <GitHub />
                </li>
            </ul>
        </div>
    )
}
