import React from "react"
import { Link } from "gatsby";
import Img from "gatsby-image";

export const ShelfItem = ({ title, description, date, image, link }) => {
    return (
        <div className="col m6 s12">
            <div className="connector">
                <div className="top"></div>
                <div className="circle left"></div>
                <div className="circle right"></div>
                <div className="date">{date}</div>
            </div>
            <div className="item">
                <Link to={link} title={title} className="overlay-link">{title}</Link>
                <div className="image">
                    <div className="v-center"></div>
                    <Img fluid={image} alt={title} className="middle"/>
                </div>
                <div className="info">
                    <div className="v-center"></div>
                    <div className="middle">
                        <h4 className="main-heading">
                            <span>{title}</span>
                        </h4>
                        <p className="font-m">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
