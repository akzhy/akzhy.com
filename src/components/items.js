import React from "react"
import { Link } from "gatsby";
import Img from "gatsby-image";
import { Calendar } from "./icons"

import Title from "./title";

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
                <div className="image">
                    <div className="v-center"></div>
                    <Img fluid={image} alt={title} className="middle"/>
                </div>
                <Link to={link} title={title} className="overlay-link">{title}</Link>
                <div className="info">
                    <div className="middle">
                        <Title tag="h3" data={title} className="main-heading"/>
                        <p className="text-m">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const BlogItem = ({title, description, date, image, link}) => {
    return (
        <div className="col 12 card">
            <div className="image">
                <Img fluid={image} title={title} alt={title}/>
            </div>
            <Link to={link} title={title} className="overlay-link">{title}</Link>
            <div className="contents">
                <h4>{title}</h4>
                <p className="date">
                    <Calendar className="fill-secondary"/>
                    <span style={{ marginLeft: "8px"}}>{date}</span>
                </p>
                <p className="description">{description}</p>
            </div>
        </div>
    )
}