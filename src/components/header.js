import React from "react";
import { Location } from '@reach/router'

import NavBar from "./navbar";

import "../styles/header.scss";

export default () => {
    return(
        <div className="header">
            <Location>
                {location => <NavBar location={location}/>}
            </Location>
        </div>
    )
}