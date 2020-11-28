import React, { ReactNode } from "react";

export function SectionTitle({ children }: { children: ReactNode }) {
    return (
        <h2>{children}</h2>
    )
}

export function Container({ children }: { children: ReactNode }) {
    return (
        <div className="w-11/12 max-w-screen-lg mx-auto">{children}</div>
    )
}

export function Title({ children}: {children: ReactNode}) {
    return (
        <div className="my-6 text-center">
            <h2 className="text-6xl text-fg-primary title relative inline-block font-black"><span>{children}</span></h2>
        </div>
    )
}

export function Section({ title, children}: {title:string; children: ReactNode}) {
    return (
        <Container>
            <div className="py-8">
                <div className="py-8">
                    <Title>{title}</Title>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </Container>
    )
}