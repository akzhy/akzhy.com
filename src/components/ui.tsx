import React, { ReactNode, useEffect, useRef } from "react";


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

interface TextInputProps {
    type?: string;
    name: string;
    label: string;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    footer?: ReactNode;
}

export function TextInput({ type="text", name, label, inputProps={}, footer }: TextInputProps) {
    return (
        <div className="relative text-input">
            <label className="w-full block p-4 pb-7 px-6">
                <p className="text-fg-primary mb-3 ml-1 relative z-10">{label}</p>
                <input type={type} name={name} className="bg-bg-primary w-full p-4 py-3 border-primary rounded outline-none border-2 text-fg-primary focus:outline-none relative z-10" {...inputProps}/>
                <span className="w-full h-full absolute top-0 left-0 bg-bg-secondary rounded z-0 opacity-0 border-secondary border-opacity-40 border-2"></span>
                {footer && 
                    <div className="relative z-10">{footer}</div>
                }
            </label>
        </div>
    )
}


interface TextAreaProps {
    name: string;
    label: string;
    inputProps?: React.InputHTMLAttributes<HTMLTextAreaElement>;
    footer?: ReactNode;
}

export function TextArea({ name, label, inputProps={}, footer }: TextAreaProps) {

    const textArea = useRef<HTMLTextAreaElement>(null);

    const resizeTextArea = (e:KeyboardEvent) => {
        if(textArea.current){
            console.log(textArea.current.getBoundingClientRect().height < textArea.current.scrollHeight)
            if(textArea.current.getBoundingClientRect().height < textArea.current.scrollHeight) {
                textArea.current.style.height = textArea.current.scrollHeight+"px"
            }
        }
    } 

    useEffect(() => {
        if(textArea.current) {
            textArea.current.addEventListener("keyup", resizeTextArea);
        }

        return () => {
            textArea.current?.removeEventListener("keyup", resizeTextArea);
        }
    }, [])

    return (
        <div className="relative text-input">
            <label className="w-full block p-4 pb-7 px-6">
                <p className="text-fg-primary mb-3 ml-1 relative z-10">{label}</p>
                <textarea ref={textArea} name={name} className="bg-bg-primary w-full p-4 py-3 border-primary rounded outline-none border-2 text-fg-primary focus:outline-none relative z-10 resize-none max-h-56" {...inputProps}></textarea>
                <span className="w-full h-full absolute top-0 left-0 bg-bg-secondary rounded z-0 opacity-0 border-secondary border-opacity-40 border-2"></span>
                {footer && 
                    <div className="relative z-10">{footer}</div>
                }
            </label>
        </div>
    )
}

interface ButtonProps {
    title: string;
    children: ReactNode;
    type?: "primary";
    state?: "default" | "disabled";
    onClick?: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    btnProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export function Button({ children, type="primary", state="default", onClick, btnProps, title }: ButtonProps) {
    const types = {
        get primary(){
            if(state === "disabled") {
                return "bg-bg-accent border-bg-accent text-fg-light cursor-wait"
            }
            return "border-primary text-fg-primary hover:bg-primary focus:bg-primary focus:outline-none focus:border-secondary"
        }
    }
    return (
        <button title={title} className={`py-3 px-6 rounded inline-block border-2 ${types[type]}`} onClick={onClick} {...btnProps}>{children}</button>
    )
}