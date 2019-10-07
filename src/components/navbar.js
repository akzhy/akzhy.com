import React from "react";
import { Link } from "gatsby";
import logo from "../images/logo-black.png";

export default () => {
    const navLinks = [
        {
            name: "About",
            url: "/about"
        },{
            name: "Shelf",
            url: "/shelf"
        },{
            name: "Home",
            url: "/",
            image: logo,
        },{
            name: "Blog",
            url: "/blog"
        },{
            name: "Contact",
            url: "/contact"
        }
    ];

    const list = [];

    navLinks.forEach((item,i) => {
        list.push(
            <NavLink data={item} key={item.name+""+item.url}/>
        )
    })

    return(
        <nav>
            <div className="container">
                <ul>
                    {list}
                </ul>
            </div>
        </nav>
    )
}

const NavLink = ({data}) => {
    return (
        <li className={"color-primary "+(data.image ? "has-image": "")}>
            <Link to={data.url} title={data.name}>
                {data.image &&
                <img src={data.image} alt={data.name}/>
                }
                {!data.image &&
                <React.Fragment>{data.name}</React.Fragment>
                }
            </Link>
        </li>
    )
}