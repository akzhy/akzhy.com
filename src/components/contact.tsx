import React, { useEffect, useState } from "react"
import { Loader, Send } from 'react-feather'
import { Button, TextArea, TextInput } from './ui'

interface DataState {
    name: string;
    email: string;
    message: string;
    captcha: string;
}


type ErrorState = PartialRecord<keyof (DataState & { other: string }), {
    error: boolean;
    message: string;
}>

export default function Contact() {

    const [data, setData] = useState<DataState>({
        name: "",
        email: "",
        message: "",
        captcha: ""
    });

    const [loading, setLoading] = useState(false);

    const [errors, setErrors] = useState<ErrorState>({});

    const updateData = (v: Partial<DataState>) => setData(p => ({ ...p, ...v }));

    const updateErrors = (v: Partial<ErrorState>) => setErrors(p => ({ ...p, ...v }));

    return (
        <div>
            <TextInput name="name" label="Name" inputProps={{
                onChange: e => {
                    updateData({
                        name: e.currentTarget.value
                    })

                    if (errors.name?.error) {
                        updateErrors({
                            name: {
                                error: false,
                                message: ""
                            }
                        })
                    }
                },
                onBlur: e => {
                    if (data.name.length !== 0 && data.name.length < 2) {
                        if (!errors.name?.error) {
                            updateErrors({
                                name: {
                                    error: true,
                                    message: "Please enter a name"
                                }
                            })
                        }
                    }

                }
            }} footer={
                <React.Fragment>
                    {errors.name?.error && (
                        <p className="my-2 text-fg-error">{errors.name.message}</p>
                    )}
                </React.Fragment>
            } />
            <TextInput name="email" label="Email" inputProps={{
                onChange: e => {
                    updateData({
                        email: e.currentTarget.value
                    })
                    if (errors.email?.error) {
                        updateErrors({
                            email: {
                                error: false,
                                message: ""
                            }
                        })
                    }
                },
                onBlur: e => {
                    if (data.email.length > 0) {
                        if (e.currentTarget.value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
                            if (errors.email?.error) {
                                updateErrors({
                                    email: {
                                        error: false,
                                        message: ""
                                    }
                                })
                            }
                        } else {
                            if (!errors.email?.error) {
                                updateErrors({
                                    email: {
                                        error: true,
                                        message: "Please enter a valid email address"
                                    }
                                })
                            }
                        }
                    }
                }
            }} footer={
                <React.Fragment>
                    {errors.email?.error && (
                        <p className="my-2 text-fg-error">{errors.email.message}</p>
                    )}
                </React.Fragment>
            } />
            <TextArea name="message" label="Message" inputProps={{
                onChange: e => {
                    updateData({
                        message: e.currentTarget.value
                    })

                    if (errors.message?.error) {
                        updateErrors({
                            message: {
                                error: false,
                                message: ""
                            }
                        })
                    }
                },
                onBlur: e => {
                    if (data.message.length < 10 && data.message.length !== 0) {
                        if (!errors.message?.error) {
                            updateErrors({
                                message: {
                                    error: true,
                                    message: "Enter a message with atleast 10 characters"
                                }
                            })
                        }
                    }
                }
            }} footer={
                <React.Fragment>
                    {errors.message?.error && (
                        <p className="my-2 text-fg-error">{errors.message.message}</p>
                    )}
                </React.Fragment>
            } />
            <div className="px-6 py-4">
                <Button title={loading ? "Sending Message" : "Send Message"} state={loading ? "disabled" : "default"} onClick={() => {
                    setLoading(true);
                }} btnProps={{
                    "aria-disabled": loading,
                    "disabled": loading
                }}>
                    <div className="flex items-center justify-center">
                        {loading ? <React.Fragment>Sending... <Loader className="animate-spin ml-3" /></React.Fragment> : <React.Fragment>Send <Send className="ml-3" /></React.Fragment>}
                    </div>
                </Button>
            </div>
        </div>
    )
}