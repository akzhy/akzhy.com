import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { Button } from './ui'

export default function CookieBox(){

    const [cookieAccepted, setCookieAccepted] = useState(true);

    useEffect(() => {
        if(!localStorage.getItem('cookies')) {
            setCookieAccepted(false);
        }
    }, [])

    const acceptCookies = () => {
        localStorage.setItem('cookies','1');
        setCookieAccepted(true);
    }

    if(cookieAccepted) return null;

    return (
        <div className='cookiebox fixed bottom-0 left-0 w-full flex items-center justify-center bg-bg-accent text-fg-primary z-50 p-4'>
            <p className='mr-3'>This website uses cookies to enhance the user experience. <Link className='link' to='/privacy-policy'>Privacy Policy</Link></p>
            <Button title='Ok' onClick={() => {
                acceptCookies();
            }}>Ok</Button>
        </div>
    )
}