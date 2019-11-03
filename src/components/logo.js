import React from "react";
import logoBlack from "../images/logo-black.png";
import logoWhite from "../images/logo-white.png";


export default () => {
    return (
        <div className="logo-container">
            <img className="dark" src={logoBlack} alt="Logo"/>
            <img className="light" src={logoWhite} alt="Logo"/>
        </div>
    )
}