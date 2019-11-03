import React from "react";
import { Link } from "gatsby";
import Logo from "../components/logo";

import "../styles/footer.scss"

export default () => {
    const links = [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "About",
            url: "/about"
        },{
            name: "Shelf",
            url: "/shelf"
        },{
            name: "Blog",
            url: "/blog"
        },{
            name: "Contact",
            url: "/contact"
        }
    ];

    const list = [];

    links.forEach((item,i) => {
        list.push(
            <LinkItem data={item} key={item.name+""+item.url}/>
        )
    })

    return(
        <footer className="bg-secondary">
            <div className="container color-primary text-center">
                <Logo />
                <ul>
                    {list}
                </ul>
                <ul>
                    <li>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                        <a href="mailto:hi@akzhy.com">Email</a>
                    </li>
                </ul>
                <p>Copyright &copy; {(new Date()).getFullYear()} akzhy.com</p>
            </div>
        </footer>
    )
}

const LinkItem = ({data}) => {
    return (
        <li className="color-primary">
            <Link to={data.url} title={data.name}>
                {data.name}
            </Link>
        </li>
    )
}
