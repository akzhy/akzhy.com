import React, { ReactNode, useEffect, useRef } from 'react'
import { useState } from 'react'

interface Settings {
    sensitivity: number
    overlayColor: string
    sidebarWidth: string
    swipeDistance: number
}

interface State {
    touchDown: boolean
    sidebarOpen: boolean
    progress: number
    touchX: number
    touchTime: number
    lastTouch: number
    transitionTime: number
    screenWidth: number
    opening: boolean
}

export default function Sidebar({
    settings = {},
    onChange,
    open,
    children,
}: {
    settings?: Partial<Settings>
    onChange: (v: boolean) => void
    open: boolean
    children: ReactNode
}) {
    const [state, setState] = useState<State>({
        touchDown: false,
        sidebarOpen: false,
        progress: 0,
        touchX: 0,
        touchTime: 0,
        lastTouch: 0,
        transitionTime: 0,
        screenWidth: 400,
        opening: false,
    })

    const stateRef = useRef<State>(state);

    const updateState = (v: Partial<State>) => setState((p) => ({ ...p, ...v }))

    const useSettings: Settings = {
        sensitivity: 50,
        overlayColor: '#000',
        sidebarWidth: '70%',
        swipeDistance: 40,
        ...settings,
    }

    const sidebarParent = useRef<HTMLDivElement>(null)
    const sidebarOverlay = useRef<HTMLDivElement>(null)

    useEffect(() => {
        window.addEventListener('touchstart', onTouchStart)
        window.addEventListener('touchend', onTouchEnd)
        window.addEventListener('touchmove', onTouchMove)
        window.addEventListener('resize', onResizeWindow)

        updateState({
            screenWidth: window.screen.availWidth,
        })
        ;() => {
            window.removeEventListener('touchstart', onTouchStart)
            window.removeEventListener('touchend', onTouchEnd)
            window.removeEventListener('touchmove', onTouchMove)
            window.removeEventListener('resize', onResizeWindow)
        }
    }, [])

    useEffect(() => {
        if ((state.progress === 100) !== open) {
            if (open) {
                if (!state.sidebarOpen) {
                    openSidebar()
                }
            } else {
                if (state.sidebarOpen) {
                    closeSidebar()
                }
            }
        }
    }, [open])

    useEffect(() => {
        stateRef.current = state;
    }, [state]);

    const onTouchStart = (e: TouchEvent) => {
        let s: Partial<State> &
            Pick<State, 'touchX' | 'lastTouch' | 'touchTime'> = {
            touchX: e.touches[0].pageX,
            lastTouch: e.touches[0].pageX,
            touchTime: new Date().getTime(),
        }
        let stateData = stateRef.current;
        
        if (!stateData.sidebarOpen && s.touchX < useSettings.sensitivity) {
            s.opening = true
            s.touchDown = true
        } else if (stateData.sidebarOpen) {
            s.opening = false
            s.touchDown = true
        }

        updateState(s)
    }

    const onTouchMove = (e: TouchEvent) => {
        let stateData = stateRef.current;

        if (stateData.touchDown) {
            if (stateData.opening) {
                if (sidebarParent.current) {
                    sidebarParent.current.style.transitionDuration = '0s'
                }

                if (sidebarOverlay.current) {
                    sidebarOverlay.current.style.transitionDuration = '0s'
                }

                let progress =
                    (e.touches[0].pageX / (stateData.screenWidth * 0.7)) * 100
                progress = Math.min(100, progress)

                changeSidebarState(
                    progress === 100 ? 'open' : progress === 0 ? 'close' : '',
                    {
                        progress: progress,
                        lastTouch: e.touches[0].pageX,
                    }
                )
            } else {
                let diff = stateData.touchX - e.touches[0].pageX
                if (diff > 0) {
                    if (sidebarParent.current) {
                        sidebarParent.current.style.transitionDuration = '0s'
                    }

                    if (sidebarOverlay.current) {
                        sidebarOverlay.current.style.transitionDuration = '0s'
                    }

                    let progress = 100 - Math.min(100, diff / 2)

                    changeSidebarState(
                        progress === 100
                            ? 'open'
                            : progress === 0
                            ? 'close'
                            : '',
                        {
                            progress: progress,
                            lastTouch: e.touches[0].pageX,
                        }
                    )
                }
            }
        }
    }

    const onTouchEnd = (e: TouchEvent) => {
        let stateData = stateRef.current;

        if (stateData.touchDown) {
            if (stateData.progress > 80) {
                openSidebar()
            } else {
                closeSidebar()
            }
            updateState({
                touchDown: false,
            })
        }

        if (stateData.lastTouch > stateData.touchX) {
            let time = new Date().getTime() - stateData.touchTime
            let distance = stateData.lastTouch - stateData.touchX
            let vel = distance / time
            if (vel > 0.6) {
                openSidebar()
            }
        }
    }

    const changeSidebarState = (
        arg: 'open' | 'close' | '',
        st?: Partial<State>
    ) => {
        if (arg === 'open') {
            updateState({
                progress: 100,
                sidebarOpen: true,
                ...st,
            })
            if (onChange) {
                onChange(true)
            }
        } else if (arg === 'close') {
            updateState({
                progress: 0,
                sidebarOpen: false,
                ...st,
            })
            if (onChange) {
                onChange(false)
            }
        } else {
            updateState(st || {})
        }
    }

    const openSidebar = () => {
        let remaining = 100 - state.progress

        if (sidebarParent.current) {
            sidebarParent.current.style.transitionDuration = `${
                remaining / 500
            }s`
        }

        if (sidebarOverlay.current) {
            sidebarOverlay.current.style.transitionDuration = `${
                remaining / 500
            }s`
        }
        changeSidebarState('open')
    }

    const closeSidebar = () => {
        let remaining = state.progress

        if (sidebarParent.current) {
            sidebarParent.current.style.transitionDuration = `${
                remaining / 250
            }s`
        }
        if (sidebarOverlay.current) {
            sidebarOverlay.current.style.transitionDuration = `${
                remaining / 250
            }s`
        }
        changeSidebarState('close')
    }

    const onResizeWindow = () => {
        updateState({
            screenWidth: window.screen.availWidth,
        })
    }

    return (
        <div className="r-swipe-sidebar-container" id='sidebar' role='menu' aria-labelledby='sidebar-menu-button'>
            <div
                className="r-swipe-sidebar"
                ref={sidebarParent}
                style={{
                    /* stylelint-disable  */
                    position: 'fixed',
                    left: `${state.progress - 100}%`,
                    width: settings.sidebarWidth,
                    height: '100%',
                    top: 0,
                    zIndex: 9999,
                    transitionProperty: 'left',
                    transitionDuration: state.transitionTime + 's',
                    transitionTimingFunction: 'linear',
                    transform: 'translate3d(0, 0, 0)',
                }}
            >
                {children}
            </div>
            <div
                className="r-swipe-sidebar-overlay"
                ref={sidebarOverlay}
                style={{
                    position: 'fixed',
                    top: 0,
                    bottom: 0,
                    left: state.progress === 0 ? '-100%' : '0%',
                    width: '100%',
                    height: '100%',
                    background: '#000',
                    zIndex: 9998,
                    transitionProperty: 'opacity',
                    transitionDuration: '0s',
                    opacity: `${state.progress / 200}`,
                }}
                onClick={closeSidebar}
            ></div>
        </div>
    )
}
