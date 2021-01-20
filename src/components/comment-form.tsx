import React, { useEffect, useState } from 'react'
import { Loader, Send } from 'react-feather'
import rest from 'utils/rest'
import siteStore from 'utils/sitestore'
import { Button, CheckBox, ErrorLabel, TextArea, TextInput } from './ui'

interface CommentFormState {
    name: string
    email: string
    comment: string
    parent: string
    subscribe: boolean
    captchaToken: false | string
    save: boolean
}

type CommentMetaError = Record<
    'name' | 'email' | 'comment' | 'other',
    CommentFormError
> & {
    captcha: CommentFormError & {
        loaded?: boolean
        loading?: boolean
    }
}

type CommentMetaState = {
    errors: CommentMetaError
    loading: boolean
    success: boolean
}

interface CommentFormError {
    error: boolean
    message: string
}

export default function CommentForm({
    parent = '0',
    postId,
    updateComments,
    closeReply,
}: {
    parent?: string
    postId: number
    updateComments: (c: CommentItem[], m: Partial<MetaState>) => void
    closeReply?: () => void
}) {

    const [data, setData] = useState<CommentFormState>({
        name: '',
        email: '',
        comment: '',
        parent: parent,
        captchaToken: false,
        subscribe: true,
        save: true,
    })

    const [meta, setMeta] = useState<CommentMetaState>({
        errors: {
            name: {
                error: false,
                message: '',
            },
            email: {
                error: false,
                message: '',
            },
            comment: {
                error: false,
                message: '',
            },
            captcha: {
                error: false,
                message: '',
                loaded: false,
                loading: true,
            },
            other: {
                error: false,
                message: '',
            },
        },
        loading: false,
        success: false,
    })

    const updateData = (v: Partial<CommentFormState>) =>
        setData((p) => ({ ...p, ...v }))

    const updateMetaError = (v: Partial<CommentMetaError>) =>
        setMeta((p) => ({
            errors: {
                ...p.errors,
                ...v,
            },
            success: p.success,
            loading: p.loading,
        }))

    const updateMeta = (v: Partial<CommentMetaState>) =>
        setMeta((p) => ({
            ...p,
            ...v,
        }))

    useEffect(() => {
        let listener: any;

        const savedDataString = localStorage.getItem('comment_user_data')
        if(savedDataString) {
            const savedData = JSON.parse(savedDataString) as {name: string; email: string};
            updateData(savedData);
        }
        if (siteStore.state.captchaReady) {
            generateCaptcha()
        } else {
            listener = siteStore.listen('com:recaptcha-ready', () => {
                if (window.grecaptcha) {
                    window.grecaptcha.ready(function () {
                        generateCaptcha()
                    })
                }
            })
        }

        return () => {
            if (listener)
                listener();
        }
    }, [])

    useEffect(() => {
        let timeOut: NodeJS.Timeout
        if (meta.success) {
            timeOut = setTimeout(() => {
                updateMeta({
                    success: false,
                })
            }, 8000)
        }

        return () => {
            clearTimeout(timeOut)
        }
    }, [meta.success])

    const generateCaptcha = () => {
        updateMetaError({
            captcha: {
                error: true,
                message: '',
                loaded: false,
                loading: true,
            },
        })
        window.grecaptcha
            .execute(process.env.GATSBY_RECAPTCHA_KEY)
            .then((token: string) => {
                updateData({
                    captchaToken: token,
                })
                updateMetaError({
                    captcha: {
                        error: false,
                        message: '',
                        loaded: true,
                        loading: false,
                    },
                })
            })
            .catch(() => {
                updateMetaError({
                    captcha: {
                        error: true,
                        message: 'An error occured while generating recaptcha',
                        loaded: true,
                        loading: false,
                    },
                })
            })
    }

    const onSubmit = () => {
        let errors: Partial<CommentMetaError> = {}
        errors.other = {
            error: false,
            message: '',
        }

        if (data.name.length === 0) {
            errors.name = {
                error: true,
                message: 'Enter your name',
            }
        }
        if (!data.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
            errors.email = {
                error: true,
                message: 'Enter a valid email address',
            }
        }
        if (data.comment.trim().length < 5) {
            errors.comment = {
                error: true,
                message: 'Enter a comment with atleast 5 characters',
            }
        }
        if (!data.captchaToken) {
            if (!errors.captcha?.loaded || errors.captcha.loading) {
                errors.captcha = {
                    error: true,
                    message: 'Please wait until captcha is generated',
                }
            } else {
                errors.captcha = {
                    error: true,
                    message: 'Captcha failed',
                }
            }
        }

        if (data.save) {
            localStorage.setItem(
                'comment_user_data',
                JSON.stringify({
                    name: data.name,
                    email: data.email,
                })
            )
        }

        updateMetaError(errors)

        if (Object.keys(errors).length > 1) {
            return
        }

        updateMeta({
            loading: true,
        })

        rest('restcomments/v1/add', {
            ...data,
            post: postId,
        })
            .then((res) => {
                if (res.result) {
                    let textArea = document.querySelector('.form textarea')
                    if (textArea) {
                        ; (textArea as any).value = ''
                    }
                    updateComments([], {
                        mainLoading: true,
                    })
                    rest('restcomments/v1/list', {
                        id: Number(postId),
                    })
                        .then((res) => {
                            if (res.result === 'success') {
                                updateComments(res.data, {
                                    error: false,
                                    mainLoading: false,
                                })
                            } else {
                                updateComments([], {
                                    error: true,
                                    mainLoading: true,
                                })
                            }
                        })
                        .catch(() => {
                            updateComments([], {
                                error: true,
                                mainLoading: true,
                            })
                        })
                    updateData({
                        captchaToken: false,
                    })
                    updateMeta({
                        loading: false,
                        success: true,
                    })
                } else {
                    updateData({
                        captchaToken: false,
                    })
                    updateMeta({
                        loading: false,
                    })
                    if (res.error === 'captcha') {
                        updateMetaError({
                            captcha: {
                                error: true,
                                message:
                                    'Captcha validation failed, please try again',
                            },
                        })
                    } else {
                        updateMetaError({
                            other: {
                                error: true,
                                message:
                                    'An error occured while posting the comment',
                            },
                        })
                    }
                }
            })
            .catch((err) => {
                updateData({
                    captchaToken: false,
                })
                updateMetaError({
                    other: {
                        error: true,
                        message: 'An error occured while posting your comment',
                    },
                })
                updateMeta({
                    loading: false,
                    success: false,
                })
            })
            .finally(() => {
                generateCaptcha()
            })
    }

    const isReply = parent !== '0'

    return (
        <div className="my-4 form">
            <div className="px-6 my-6">
                <h3 className="text-fg-primary text-2xl font-bold">
                    {isReply ? 'Reply to Comment' : 'Post a comment'}
                </h3>
                {isReply && (
                    <button
                        className="cursor-pointer text-fg-primary p-2 mt-3 border border-fg-primary rounded border-opacity-25"
                        onClick={() => {
                            if (closeReply) closeReply()
                        }}
                    >
                        Cancel Reply
                    </button>
                )}
            </div>
            <TextInput
                label="Name"
                name="name"
                inputProps={{
                    defaultValue: data.name,
                    onChange: (e) => {
                        updateData({
                            name: e.currentTarget.value,
                        })
                        if (meta.errors.name.error) {
                            updateMetaError({
                                name: {
                                    error: false,
                                    message: '',
                                },
                            })
                        }
                    },
                }}
                footer={<ErrorLabel error={meta.errors.name} />}
            />
            <TextInput
                label="Email"
                name="email"
                inputProps={{
                    defaultValue: data.email,
                    onChange: (e) => {
                        updateData({
                            email: e.currentTarget.value,
                        })
                        if (
                            meta.errors.email.error &&
                            e.currentTarget.value.match(
                                /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
                            )
                        ) {
                            updateMetaError({
                                email: {
                                    error: false,
                                    message: '',
                                },
                            })
                        }
                    },
                }}
                footer={<ErrorLabel error={meta.errors.email} />}
            />
            <TextArea
                label="Comment"
                name="comment"
                inputProps={{
                    onChange: (e) => {
                        updateData({
                            comment: e.currentTarget.value,
                        })
                        if (
                            meta.errors.comment.error &&
                            e.currentTarget.value.trim().length > 5
                        ) {
                            updateMetaError({
                                comment: {
                                    error: false,
                                    message: '',
                                },
                            })
                        }
                    },
                }}
                footer={<ErrorLabel error={meta.errors.comment} />}
            />
            <div className="px-6 py-3">
                <div className="py-4">
                    <CheckBox
                        label="Get email notifications for replies"
                        inputProps={{
                            checked: data.subscribe,
                            onChange: (e) => {
                                updateData({
                                    subscribe: e.currentTarget.checked,
                                })
                            },
                        }}
                    />
                </div>
                <div className="py-4">
                    <CheckBox
                        label="Save my name and email on this browser"
                        inputProps={{
                            checked: data.save,
                            onChange: (e) => {
                                updateData({
                                    save: e.currentTarget.checked,
                                })
                            },
                        }}
                    />
                </div>
            </div>
            {meta.errors.other.error && (
                <div className="px-6 py-3">
                    <ErrorLabel error={meta.errors.other} />
                </div>
            )}
            {meta.errors.captcha.error && meta.errors.captcha.message !== '' && (
                <div className="px-6">
                    <ErrorLabel error={meta.errors.captcha}>
                        {meta.errors.captcha.loaded && (
                            <button
                                className={`text-fg-light ml-4 mt-3`}
                                disabled={meta.errors.captcha.loading}
                                onClick={() => {
                                    generateCaptcha()
                                }}
                            >
                                {meta.errors.captcha.loading
                                    ? 'Retrying...'
                                    : 'Retry'}
                            </button>
                        )}
                    </ErrorLabel>
                </div>
            )}
            <div className="px-6 py-2">
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
                {meta.success && (
                    <div className="p-4 my-4 border-fg-success border-2 rounded text-fg-primary">
                        Comment posted successfully
                    </div>
                )}
                <Button
                    title="Comment"
                    state={meta.loading ? 'disabled' : 'default'}
                    btnProps={{
                        disabled: meta.loading,
                    }}
                    onClick={onSubmit}
                >
                    <div className="flex items-center justify-center">
                        {meta.loading ? (
                            <React.Fragment>
                                Commenting...{' '}
                                <Loader className="animate-spin ml-3" />
                            </React.Fragment>
                        ) : (
                                <React.Fragment>
                                    Comment <Send className="ml-3" />
                                </React.Fragment>
                            )}
                    </div>
                </Button>
            </div>
        </div>
    )
}
