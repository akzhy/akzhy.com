import React from "react";
import { Location } from '@reach/router'

import NavBar from "./navbar";

import "../styles/header.scss";

export default ({ cycleTheme, currentTheme }) => {
    return(
        <div className="header">
            <Location>
                {location => <NavBar location={location} cycleTheme={cycleTheme} currentTheme={currentTheme}/>}
            </Location>
        </div>
    )
}