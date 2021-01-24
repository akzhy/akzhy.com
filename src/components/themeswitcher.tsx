import React, { useEffect, useState } from 'react'
import { Moon, Sun } from 'react-feather'
import siteStore from 'utils/sitestore'

export default function ThemeSwitcher() {
    const [currentTheme, setCurrentTheme] = useState(
        siteStore.state.currentTheme
    )

    useEffect(() => {
        const removeListener = siteStore.listen('com:toggle-theme', (state) => {
            localStorage.setItem('theme', `${state.currentTheme}`)
            setCurrentTheme(state.currentTheme)
        })

        return () => {
            removeListener()
        }
    }, [])

    return (
        <div>
            <button
                title="Switch theme"
                className="cursor-pointer w-10 h-10 text-fg-primary relative flex items-center justify-center"
                onClick={() => {
                    siteStore.dispatch('com:toggle-theme', false)
                }}
            >
                <div
                    className={`absolute transform scale-0 duration-300 transition-transform ${
                        currentTheme === 1 && 'scale-100'
                    }`}
                >
                    <Moon />
                </div>
                <div
                    className={`absolute transform scale-0 duration-300 transition-transform ${
                        currentTheme === 0 && 'scale-100'
                    }`}
                >
                    <Sun />
                </div>
            </button>
        </div>
    )
}
