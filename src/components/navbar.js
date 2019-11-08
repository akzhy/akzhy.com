import React from "react"
import { Link } from "gatsby"
import Sidebar from "react-sidebar"

import Logo from "./logo"
import SocialLinks from "./social"
import { Sun, Moon } from "./icons"

const SidebarContents = ({ location }) => {
    const navLinks = [
        {
            name: "Home",
            url: "/",
            active: location === "/",
        },
        {
            name: "About",
            url: "/about",
        },
        {
            name: "Shelf",
            url: "/shelf",
        },
        {
            name: "Blog",
            url: "/blog",
        },
        {
            name: "Contact",
            url: "/contact",
        },
    ]

    if (location.pathname !== "/") {
        navLinks.map(item => {
            if (item.url.split("/")[1] === location.pathname.split("/")[1]) {
                item.active = true
            }
        })
    }

    const list = []

    navLinks.forEach((item, i) => {
        list.push(
            <NavLink data={item} key={"sidenav" + item.name + "" + item.url} />
        )
    })
    return (
        <div className="sidebar-contents">
            <div className="logo">
                <Link to="/">
                    <Logo />
                </Link>
            </div>
            <ul className="links text-secondary">{list}</ul>
            <div className="social-links">
                <SocialLinks />
            </div>
        </div>
    )
}

export default class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navbarPlaceholderHeight: 100,
            sidebarOpen: false,
        }

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
        this.menuOpen = this.menuOpen.bind(this)

        this.navbar = React.createRef()
    }

    windowOnScroll = e => {
        const top = window.pageYOffset || document.documentElement.scrollTop
        if (top > 10) {
            this.navbar.current.classList.add("scrolled")
        } else {
            this.navbar.current.classList.remove("scrolled")
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.windowOnScroll)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.windowOnScroll)
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open })
    }

    menuOpen(event) {
        event.preventDefault()
        this.onSetSidebarOpen(true)
    }

    render() {
        const location = this.props.location.location
        const navLinks = [
            {
                name: "About",
                url: "/about",
            },
            {
                name: "Shelf",
                url: "/shelf",
            },
            {
                name: "Home",
                url: "/",
                logo: true,
                active: location.pathname === "/",
            },
            {
                name: "Blog",
                url: "/blog",
            },
            {
                name: "Contact",
                url: "/contact",
            },
        ]

        if (location.pathname !== "/") {
            navLinks.map(item => {
                if (
                    item.url.split("/")[1] === location.pathname.split("/")[1]
                ) {
                    item.active = true
                }
            })
        }

        const list = []

        navLinks.forEach((item, i) => {
            list.push(<NavLink data={item} key={item.name + "" + item.url} />)
        })

        list.push(
            <NavActionIcons key="navactionicons" cycleTheme={this.props.cycleTheme} currentTheme={this.props.currentTheme}/>
        )

        return (
            <React.Fragment>
                <div className="sidebar-container">
                    <Sidebar
                        sidebar={<SidebarContents location={location} />}
                        open={this.state.sidebarOpen}
                        onSetOpen={this.onSetSidebarOpen}
                        sidebarClassName="sidebar-content"
                        styles={{
                            sidebar: {
                                zIndex: 101,
                                position: "fixed",
                            },
                            overlay: {
                                zIndex: 100,
                            },
                            dragHandle: {
                                position: "fixed",
                                zIndex: "99999",
                            },
                        }}
                    >
                        <span></span>
                    </Sidebar>
                </div>
                <nav ref={this.navbar}>
                    <div className="container">
                        <ul className="main-nav">{list}</ul>
                        <ul className="mobile-nav">
                            <li
                                className="menu-button"
                                onClick={() => this.onSetSidebarOpen(true)}
                            >
                                <button
                                    className="hamburger"
                                    name="toggle-menu"
                                    title="Toggle Menu"
                                >
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </button>
                            </li>
                            <li>
                                <Link to="/">
                                    <Logo />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

const NavLink = ({ data }) => {
    return (
        <li className={"color-primary " + (data.logo ? "has-image" : "")}>
            <Link
                to={data.url}
                title={data.name}
                className={data.active ? "active" : ""}
            >
                {data.logo && <Logo />}
                {!data.logo && <React.Fragment>{data.name}</React.Fragment>}
            </Link>
        </li>
    )
}

const NavActionIcons = ({cycleTheme, currentTheme}) => (
    <li className="color-primary action-icons">
        <div className="icons" onClick={cycleTheme}>
            <div className="ico" title="Change Theme">
                <Moon className={currentTheme.theme === "light" ? "active" : ""}/>
                <Sun className={currentTheme.theme === "dark" ? "active" : ""} />
            </div>
        </div>
    </li>
)
