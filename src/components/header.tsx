import React from 'react'
import { Link } from 'gatsby'

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

    const navItems = items.map((i) => (
        <NavItem
            href={i.href}
            title={i.title}
            key={`navitem-${i.title}-${i.href}`}
            isImg={i.href === '/'}
        />
    ))

    return (
        <nav className="py-8">
            <ul className="flex items-center justify-center">{navItems}</ul>
        </nav>
    )
}

const NavItem = ({
    href,
    title,
    isImg = false,
}: {
    href: string
    title: string
    isImg?: boolean
}) => {
    return (
        <li
            className={`text-fg-primary mx-5 font-black tracking-widest text-base nav-item text-center ${
                !isImg ? 'pt-2' : 'has-image'
            }`}
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