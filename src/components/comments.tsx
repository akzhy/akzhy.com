import React, { useEffect, useState } from 'react'
import { formatDistance } from 'date-fns'
import rest from 'utils/rest'
import { RefreshCw } from 'react-feather'
import CommentForm from './comment-form'
import { Title } from './ui'

export default function Comments({ postId }: { postId: number }) {
    const [comments, setComments] = useState<{
        meta: MetaState
        data: (CommentItem & { isReply?: boolean })[]
    }>({
        meta: {
            error: false,
            mainLoading: true,
            subLoading: false,
        },
        data: [],
    })

    const updateState = (data: CommentItem[], meta?: Partial<MetaState>) =>
        setComments((p) => ({
            meta: {
                ...p.meta,
                ...meta,
            },
            data: [...p.data, ...data],
        }))

    const commentFormUpdateState = (
        data: CommentItem[],
        meta?: Partial<MetaState>
    ) => {
        setComments((p) => ({
            meta: {
                ...p.meta,
                ...meta,
            },
            data: data,
        }))
    }

    const loadComments = () => {
        rest('restcomments/v1/list', {
            id: postId,
        })
            .then((res) => {
                if (res.result === 'success') {
                    updateState(res.data, {
                        error: false,
                        mainLoading: false,
                    })
                } else {
                    updateState([], {
                        error: true,
                        mainLoading: true,
                    })
                }
            })
            .catch((err) => {
                updateState([], {
                    error: true,
                    mainLoading: true,
                })
            })
    }

    useEffect(() => {
        loadComments()
    }, [])

    return (
        <div className="my-10">
            <div className="text-center">
                <Title className="text-4xl text-fg-primary">Comments</Title>
            </div>
            <div className="my-16">
                <div className="pb-6">
                    {(() => {
                        if (comments.meta.error) {
                            return (
                                <div className="p-4 bg-bg-secondary rounded text-fg-primary text-center">
                                    <p className="inline-block">
                                        There was an error loading comments
                                    </p>
                                    <button
                                        onClick={() => {
                                            updateState([], {
                                                error: false,
                                                mainLoading: true,
                                            })
                                            loadComments()
                                        }}
                                        className="border-bg-accent border-2 inline-flex items-center justify-center p-3 rounded m-4"
                                    >
                                        Retry <RefreshCw className="ml-2" />
                                    </button>
                                </div>
                            )
                        } else if (comments.meta.mainLoading) {
                            return (
                                <React.Fragment>
                                    <CommentSkeleton />
                                    <CommentSkeleton />
                                </React.Fragment>
                            )
                        }

                        if (comments.data.length === 0) {
                            return (
                                <div className="p-4 bg-bg-secondary rounded text-fg-primary text-center">
                                    <p className="inline-block">
                                        Be the first to comment
                                    </p>
                                </div>
                            )
                        }

                        return (
                            <React.Fragment>
                                {(() => {
                                    return comments.data
                                        .sort((a, b) =>
                                            a.id.localeCompare(b.id)
                                        )
                                        .map((item) => {
                                            return (
                                                <Comment
                                                    {...item}
                                                    key={`c-id-${item.id}`}
                                                    parent={false}
                                                    postId={postId}
                                                    updateComments={
                                                        commentFormUpdateState
                                                    }
                                                />
                                            )
                                        })
                                })()}
                            </React.Fragment>
                        )
                    })()}
                </div>
                <div className="my-6">
                    <CommentForm
                        postId={postId}
                        updateComments={commentFormUpdateState}
                    />
                </div>
            </div>
        </div>
    )
}

function Comment(
    data: CommentItem & {
        parent: CommentItem | false
        isReply?: boolean
        postId: number
        updateComments: (c: CommentItem[], m: Partial<MetaState>) => void
    }
) {
    let date = new Date(data.date + ' GMT')
    let formattedDate = formatDistance(date, new Date(), {
        addSuffix: true,
    })

    const [replyActive, setReplyActive] = useState(false)

    return (
        <div
            className={`w-full bg-bg-secondary rounded p-3 my-6 border-bg-accent comment ${
                data.isReply ? 'pb-2 mb-0 border-2' : ''
            }`}
            id={`c${data.id}`}
        >
            <div className={`p-3`}>
                <div className="flex items-center">
                    <div className="rounded bg-bg-accent w-12 h-12">
                        <img src={data.avatar} alt="Gravatar image" />
                    </div>
                    <div className="ml-4 flex flex-col justify-center py-2">
                        <p className="text-fg-primary text-lg">{data.author}</p>
                        <p className="text-fg-light text-sm">{formattedDate}</p>
                    </div>
                </div>
                {data.parent && data.parent_id !== data.parent.id && (
                    <div className="my-4">
                        <a
                            href={`#c${data.parent_id}`}
                            className="link text-sm"
                        >
                            Replying to {data.parent.author}'s comment
                        </a>
                    </div>
                )}
                <div className="my-4 text-fg-primary">
                    <div
                        dangerouslySetInnerHTML={{ __html: data.content }}
                    ></div>
                </div>
                <div className="my-4">
                    {replyActive ? (
                        <CommentForm
                            postId={data.postId}
                            updateComments={data.updateComments}
                            parent={data.id}
                            closeReply={() => {
                                setReplyActive(false)
                            }}
                        />
                    ) : (
                        <button
                            className="py-2 px-6 rounded inline-block border-2 border-primary text-fg-primary hover:bg-primary focus:bg-primary focus:outline-none focus:border-secondary"
                            onClick={() => {
                                setReplyActive(true)
                            }}
                        >
                            Reply
                        </button>
                    )}
                </div>
            </div>
            {data.children
                .sort((a, b) => a.id.localeCompare(b.id))
                .map((child) => {
                    return (
                        <Comment
                            {...child}
                            parent={data}
                            isReply={true}
                            key={`c-id-${child.id}`}
                            postId={data.postId}
                            updateComments={data.updateComments}
                        />
                    )
                })}
        </div>
    )
}

function CommentSkeleton() {
    return (
        <div className="w-full bg-bg-secondary opacity-75 rounded p-6 my-6">
            <div className="flex items-center">
                <div className="w-12 h-12 rounded bg-bg-accent skeleton"></div>
                <div className="ml-4 flex flex-col justify-center py-2">
                    <div className="w-24 h-3 bg-bg-accent skeleton"></div>
                    <div className="w-32 h-2 bg-bg-accent opacity-80 my-3 skeleton"></div>
                </div>
            </div>
            <div className="my-4">
                <div className="w-full h-3 bg-bg-accent skeleton"></div>
                <div className="w-1/3 my-3 h-3 bg-bg-accent skeleton"></div>
            </div>
        </div>
    )
}
