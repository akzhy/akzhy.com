import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import { Menu } from 'react-feather'
import Sidebar from './sidebar'
import { useState } from 'react'
import ThemeSwitcher from './themeswitcher'

export default function Header() {
    const items = [
        {
            title: 'About',
            href: '/about',
        },
        {
            title: 'Shelf',
            href: '/shelf',
        },
        {
            title: 'Home',
            href: '/',
        },
        {
            title: 'Blog',
            href: '/blog',
        },
        {
            title: 'Contact',
            href: '/contact',
        },
    ]

    const sidenavItems = [
        {
            title: 'Home',
            href: '/',
        },
        {
            title: 'About',
            href: '/about',
        },
        {
            title: 'Shelf',
            href: '/shelf',
        },
        {
            title: 'Blog',
            href: '/blog',
        },
        {
            title: 'Contact',
            href: '/contact',
        },
    ]

    const location = useLocation()

    const navItems = items.map((i) => (
        <NavItem
            href={i.href}
            title={i.title}
            key={`navitem-${i.title}-${i.href}`}
            isImg={i.href === '/'}
            active={location.pathname.split('/')[1] === i.href.split('/')[1]}
        />
    ))

    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [fixedHeaderShown, setFixedHeaderShown] = useState(true)
    const fixedHeaderRef = useRef(true)

    const prevScroll = useRef(0)

    useEffect(() => {
        if (window.screen.width < 1024) {
            window.addEventListener('scroll', onScroll)
            prevScroll.current = window.pageYOffset
        }
    }, [])

    const onScroll = () => {
        if (
            window.pageYOffset > 300 &&
            window.pageYOffset < prevScroll.current
        ) {
            if (!fixedHeaderRef.current) {
                fixedHeaderRef.current = true
                setFixedHeaderShown(true)
            }
        } else {
            if (fixedHeaderRef.current && window.pageYOffset > 300) {
                fixedHeaderRef.current = false
                setFixedHeaderShown(false)
            } else if (!fixedHeaderRef.current && window.pageYOffset < 300) {
                fixedHeaderRef.current = true
                setFixedHeaderShown(true)
            }
        }
        prevScroll.current = window.pageYOffset
    }

    return (
        <React.Fragment>
            <nav
                className="py-4 md:py-6 lg:py-8 fixed lg:relative bg-bg-primary w-full top-0 left-0 z-50 transition-transform duration-300"
                style={{
                    ...(!fixedHeaderShown && {
                        transform: `translate(0, -120px)`,
                    }),
                }}
            >
                <ul className="hidden lg:flex items-center justify-center">
                    {navItems}
                </ul>
                <div
                    className="hidden lg:block absolute right-16 top-1/2"
                    style={{ transform: 'translate(0%, -50%)' }}
                >
                    <ThemeSwitcher />
                </div>
                <div className="lg:hidden flex items-center justify-center relative">
                    <button
                        className="absolute left-8 top-0 w-10 h-10 text-fg-primary flex items-center justify-center pt-3"
                        onClick={() => setSidebarOpen(true)}
                        title="Open Sidebar"
                        aria-haspopup={true}
                        aria-expanded={sidebarOpen}
                        aria-controls="sidebar"
                        id="sidebar-menu-button"
                    >
                        <Menu size={34} />
                    </button>
                    <div>
                        <Link
                            className="logo-container w-32 block"
                            to="/"
                            title="Home"
                        >
                            <img
                                src="/images/logo-black.png"
                                className="logo-dark"
                                alt="Logo"
                            />
                            <img
                                src="/images/logo-white.png"
                                className="logo-light"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                </div>
            </nav>
            <Sidebar onChange={setSidebarOpen} open={sidebarOpen}>
                <ul className="">
                    {sidenavItems.map((item) => (
                        <NavItem
                            href={item.href}
                            title={item.title}
                            active={
                                location.pathname.split('/')[1] ===
                                item.href.split('/')[1]
                            }
                            key={`sidenav-${item.href}`}
                        />
                    ))}
                    <li className="flex items-center justify-center pt-2">
                        <ThemeSwitcher />
                    </li>
                </ul>
            </Sidebar>
        </React.Fragment>
    )
}

const NavItem = ({
    href,
    title,
    isImg = false,
    active = false,
}: {
    href: string
    title: string
    isImg?: boolean
    active?: boolean
}) => {
    return (
        <li
            className={`text-fg-primary mx-5 font-black tracking-widest text-base nav-item text-center${
                active ? ' active' : ''
            } ${!isImg ? 'pt-2' : 'has-image'}`}
        >
            <Link to={href} title={title.toUpperCase()}>
                {!isImg ? (
                    <React.Fragment>{title.toUpperCase()}</React.Fragment>
                ) : (
                    <div className="logo-container w-32">
                        <img
                            src="/images/logo-black.png"
                            className="logo-dark"
                            alt="Logo"
                        />
                        <img
                            src="/images/logo-white.png"
                            className="logo-light"
                            alt="Logo"
                        />
                    </div>
                )}
            </Link>
        </li>
    )
}
