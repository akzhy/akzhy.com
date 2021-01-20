import React, { useEffect, useRef, useState } from 'react'
import { Loader, Send } from 'react-feather'
import rest from 'utils/rest'
import siteStore from 'utils/sitestore'
import Captcha from './captcha'
import SocialMedia from './social'
import { Button, ErrorLabel, TextArea, TextInput } from './ui'

interface DataState {
    name: string
    email: string
    message: string
    captcha: string
}

type ErrorState = PartialRecord<
    keyof DataState,
    {
        error: boolean
        message: string
    }
> & {
    captcha?: {
        error: boolean
        message: string
        loaded?: boolean
        loading?: boolean
    }
    other?: {
        error: boolean
        message: string
    }
}

export default function Contact() {
    const [data, setData] = useState<DataState>({
        name: '',
        email: '',
        message: '',
        captcha: '',
    })

    const [loading, setLoading] = useState(false)
    const [messageSent, setMessageSent] = useState(false)
    const [errors, setErrors] = useState<ErrorState>({})

    const mounted = useRef(true);

    const updateData = (v: Partial<DataState>) =>
        setData((p) => ({ ...p, ...v }))

    const updateErrors = (v: Partial<ErrorState>) =>
        setErrors((p) => ({ ...p, ...v }))

    const clearErrors = () => {
        let errs = errors
        for (let err in errs) {
            if (errs.hasOwnProperty(err)) {
                errs[err as keyof ErrorState] = {
                    error: false,
                    message: '',
                }
            }
        }
        updateErrors(errs)
    }

    useEffect(() => {
        mounted.current = true;
        let listener:any;
        if (siteStore.state.captchaReady) {
            generateCaptcha()
        } else {
            listener = siteStore.listen('com:recaptcha-ready', () => {
                if (window.grecaptcha) {
                    window.grecaptcha.ready(function () {
                        if(mounted.current)
                            generateCaptcha()
                    })
                }
            })
        }

        return () => {
            mounted.current = false;
            if(listener)
                listener();
        }
    }, [])

    useEffect(() => {
        let timeOut: NodeJS.Timeout
        if (messageSent) {
            timeOut = setTimeout(() => {
                setMessageSent(false)
            }, 8000)
        }

        return () => {
            clearTimeout(timeOut)
        }
    }, [messageSent])

    const onSubmit = () => {
        const errs: ErrorState = {}
        if (data.name.length < 1) {
            errs.name = {
                error: true,
                message: 'Enter your name',
            }
        }

        if (!data.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
            errs.email = {
                error: true,
                message: 'Enter a valid email address',
            }
        }

        if (data.message.length < 10) {
            errs.message = {
                error: true,
                message: 'Enter a message with atleast 10 characters',
            }
        }

        updateErrors(errs)

        if (Object.keys(errs).length > 0) {
            return
        }

        setLoading(true)

        rest('restcontact/v1/add', data)
            .then((res) => {
                if (res.result) {
                    updateData({
                        captcha: '',
                        message: '',
                    })

                    setMessageSent(true)
                    clearErrors()

                    let textArea = document.querySelector(
                        '.contact-form textarea'
                    )
                    ;(textArea as any).value = ''
                } else {
                    if (res.error === 'captcha') {
                        updateErrors({
                            captcha: {
                                error: true,
                                message: 'Error validating captcha',
                            },
                        })
                    } else {
                        updateErrors({
                            other: {
                                error: true,
                                message:
                                    'An error occured while sending your message. Please try again',
                            },
                        })
                    }
                }
            })
            .catch(() => {
                updateErrors({
                    other: {
                        error: true,
                        message:
                            'An error occured while sending your message. Please try again',
                    },
                })
            })
            .finally(() => {
                setLoading(false)
                generateCaptcha()
            })
    }

    const generateCaptcha = () => {
        updateErrors({
            captcha: {
                error: true,
                message: '',
                loaded: false,
                loading: true,
            },
        })
        window.grecaptcha
            .execute(process.env.RECAPTCHA_KEY)
            .then((token: string) => {
                updateData({
                    captcha: token,
                })
                updateErrors({
                    captcha: {
                        error: false,
                        message: '',
                        loaded: true,
                        loading: false,
                    },
                })
            })
            .catch(() => {
                updateErrors({
                    captcha: {
                        error: true,
                        message: 'An error occured while generating recaptcha',
                        loaded: true,
                        loading: false,
                    },
                })
            })
    }

    return (
        <div className="contact-form">
            <Captcha />
            <TextInput
                name="name"
                label="Name"
                inputProps={{
                    onChange: (e) => {
                        updateData({
                            name: e.currentTarget.value,
                        })

                        if (errors.name?.error) {
                            updateErrors({
                                name: {
                                    error: false,
                                    message: '',
                                },
                            })
                        }
                    },
                }}
                footer={<ErrorLabel error={errors.name} />}
            />
            <TextInput
                name="email"
                label="Email"
                inputProps={{
                    onChange: (e) => {
                        updateData({
                            email: e.currentTarget.value,
                        })
                        if (errors.email?.error) {
                            updateErrors({
                                email: {
                                    error: false,
                                    message: '',
                                },
                            })
                        }
                    },
                    onBlur: (e) => {
                        if (data.email.length > 0) {
                            if (
                                e.currentTarget.value.match(
                                    /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
                                )
                            ) {
                                if (errors.email?.error) {
                                    updateErrors({
                                        email: {
                                            error: false,
                                            message: '',
                                        },
                                    })
                                }
                            } else {
                                if (!errors.email?.error) {
                                    updateErrors({
                                        email: {
                                            error: true,
                                            message:
                                                'Please enter a valid email address',
                                        },
                                    })
                                }
                            }
                        }
                    },
                }}
                footer={<ErrorLabel error={errors.email} />}
            />
            <TextArea
                name="message"
                label="Message"
                inputProps={{
                    onChange: (e) => {
                        updateData({
                            message: e.currentTarget.value,
                        })

                        if (errors.message?.error) {
                            updateErrors({
                                message: {
                                    error: false,
                                    message: '',
                                },
                            })
                        }
                    },
                    onBlur: (e) => {
                        if (
                            data.message.length < 10 &&
                            data.message.length !== 0
                        ) {
                            if (!errors.message?.error) {
                                updateErrors({
                                    message: {
                                        error: true,
                                        message:
                                            'Enter a message with atleast 10 characters',
                                    },
                                })
                            }
                        }
                    },
                }}
                footer={<ErrorLabel error={errors.message} />}
            />
            <div className="px-6 py-4">
                <p className="mb-6 text-fg-primary">
                    This site is protected by reCAPTCHA and the Google{' '}
                    <a
                        href="https://policies.google.com/privacy"
                        className="link"
                    >
                        Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a
                        href="https://policies.google.com/terms"
                        className="link"
                    >
                        Terms of Service
                    </a>{' '}
                    apply.
                </p>
                {errors.other?.error && (
                    <div className="mb-4">
                        <ErrorLabel error={errors.other} />
                    </div>
                )}
                {errors.captcha?.error && errors.captcha.message !== '' && (
                    <div className="mb-4">
                        <ErrorLabel error={errors.captcha}>
                            {errors.captcha.loaded && (
                                <button
                                    className={`text-fg-light ml-4 mt-3`}
                                    disabled={errors.captcha.loading}
                                    onClick={() => {
                                        generateCaptcha()
                                    }}
                                >
                                    {errors.captcha.loading
                                        ? 'Retrying...'
                                        : 'Retry'}
                                </button>
                            )}
                        </ErrorLabel>
                    </div>
                )}
                {messageSent && (
                    <div className="p-4 my-4 border-fg-success border-2 rounded text-fg-primary">
                        Message has been sent
                    </div>
                )}
                <Button
                    title={loading ? 'Sending Message' : 'Send Message'}
                    state={loading ? 'disabled' : 'default'}
                    onClick={onSubmit}
                    btnProps={{
                        'aria-disabled': loading,
                        disabled: loading,
                    }}
                >
                    <div className="flex items-center justify-center">
                        {loading ? (
                            <React.Fragment>
                                Sending...{' '}
                                <Loader className="animate-spin ml-3" />
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                Send <Send className="ml-3" />
                            </React.Fragment>
                        )}
                    </div>
                </Button>
            </div>
            <div className="social my-14">
                <SocialMedia />
            </div>
        </div>
    )
}
