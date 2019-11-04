import React from "react"
import { Link } from "gatsby"
import Logo from "./logo"
import Sidebar from "react-sidebar"
import SocialLinks from "./social"

const SidebarContents = () => {
    const navLinks = [
        {
            name: "Home",
            url: "/",
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

    const list = []

    navLinks.forEach((item, i) => {
        if (item.sidebar) return
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

        const list = []

        navLinks.forEach((item, i) => {
            list.push(<NavLink data={item} key={item.name + "" + item.url} />)
        })

        return (
            <React.Fragment>
                <div className="sidebar-container">
                    <Sidebar
                        sidebar={<SidebarContents />}
                        open={this.state.sidebarOpen}
                        onSetOpen={this.onSetSidebarOpen}
                        sidebarClassName="sidebar-content"
                        styles={{
                            sidebar: {
                                zIndex: 101,
                                position: "fixed"
                            },
                            overlay: {
                                zIndex: 100
                            },
                            dragHandle: {
                                position: "fixed",
                                zIndex: "99999"
                            }
                        }}
                    >
                        <span></span>
                    </Sidebar>
                </div>
                <nav ref={this.navbar}>
                    <div className="container">
                        <ul className="main-nav">{list}</ul>
                        <ul className="mobile-nav">
                            <li className="menu-button" onClick={() => this.onSetSidebarOpen(true)}>
                                <button className="hamburger" name="toggle-menu" title="Toggle Menu">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </button>
                            </li>
                            <li>
                                <Logo />
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        )
        /* return (
            <React.Fragment>
                <Sidebar
                    sidebar={<SidebarContents />}
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    sidebarClassName="sidebar-content"
                >
                    <span></span>
                </Sidebar>
                <nav className="text-secondary" ref={c => (this.nav = c)}>
                    <a href="#mobilenav" id="menu-open" onClick={this.menuOpen}>
                        <span className="icon">
                            <Hamburger />
                        </span>
                    </a>
                    <Link to="/">
                        <Logo />
                    </Link>
                    <NavLinks />
                </nav>
            </React.Fragment>
        );*/
    }
}

const NavLink = ({ data }) => {
    return (
        <li className={"color-primary " + (data.image ? "has-image" : "")}>
            <Link to={data.url} title={data.name}>
                {data.logo && <Logo />}
                {!data.logo && <React.Fragment>{data.name}</React.Fragment>}
            </Link>
        </li>
    )
}
