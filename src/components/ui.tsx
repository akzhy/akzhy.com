import React, { ReactNode } from "react";


export function Container({ children }: { children: ReactNode }) {
    return (
        <div className="w-11/12 max-w-screen-lg mx-auto">{children}</div>
    )
}

export function SectionTitle({ children}: {children: ReactNode}) {
    return (
        <div className="my-6 text-center">
            <Title>{children}</Title>
        </div>
    )
}

export function Title({ children, className }: {children: ReactNode; className?: string;}) {
    return (
        <h2 className={`title relative inline-block font-black ${className ? className : 'text-6xl text-fg-primary'}`}><span>{children}</span></h2>
    )
}

export function Section({ title, children}: {title:string; children: ReactNode}) {
    return (
        <Container>
            <div className="py-8">
                <div className="py-8">
                    <SectionTitle>{title}</SectionTitle>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </Container>
    )
}