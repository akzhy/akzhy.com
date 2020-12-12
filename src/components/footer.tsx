import React from 'react'
import { Container } from './ui'

export default function Footer() {
    const items = [
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

    return (
        <footer className="py-8 bg-bg-secondary">
            <Container>
                <a
                    className="logo-container w-32 block mx-auto"
                    href="/"
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
                </a>
                <ul className="text-center mt-8">
                    {items.map((item, i) => (
                        <Item {...item} key={`footer-${item.href}-${i}`} />
                    ))}
                </ul>
                <ul className="text-center my-4">
                    <Item title="Privacy Policy" href="/privacy-policy" />
                    <Item title="Email" href="mailto:hi@akzhy.com" />
                </ul>
            </Container>
        </footer>
    )
}

const Item = ({ title, href }: { title: string; href: string }) => {
    return (
        <li className="inline-block mx-4">
            <a href={href} className="text-fg-primary link">
                {title}
            </a>
        </li>
    )
}
