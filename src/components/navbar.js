import React from "react";
import { Link } from "gatsby";
import Logo from "./logo";

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
            logo: true,
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
                {data.logo &&
                    <Logo/>
                }
                {!data.logo &&
                <React.Fragment>{data.name}</React.Fragment>
                }
            </Link>
        </li>
    )
}