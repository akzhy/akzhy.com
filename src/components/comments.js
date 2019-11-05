import React from "react"
import Textarea from "react-textarea-autosize"
import config from "../../config.json"

export class CommentForm extends React.Component {
    constructor(props) {
        super(props)

        this.cName = React.createRef()
        this.cEmail = React.createRef()
        this.cComment = React.createRef()
        this.form = React.createRef()
        this.subscribe = React.createRef()
        this.saveData = React.createRef()

        this.state = {
            message: false,
            btnEnabled: true,
            error: true,
            user: {
                code: false,
            },
            hasStoredData: false,
        }

        this.formSubmit = this.formSubmit.bind(this)
    }

    componentDidMount() {
        if (localStorage.getItem("auth")) {
            const user = JSON.parse(localStorage.getItem("auth"))
            this.setState({
                code: user.token,
            })

            this.cName.current.value = user.user_display_name
            this.cEmail.current.value = user.user_email

            this.setState({
                hasStoredData: true,
            })
        } else if (localStorage.getItem("user")) {
            this.setState({
                hasStoredData: true,
            })
            const user = JSON.parse(localStorage.getItem("user"))

            this.cName.current.value = user.name
            this.cEmail.current.value = user.email
            this.subscribe.current.checked = user.subscribe
        }
    }

    formSubmit(event) {
        event.preventDefault()

        this.setState({ btnEnabled: false })

        const { postId, commentId } = this.props

        const name = this.cName.current.value,
            email = this.cEmail.current.value,
            comment = this.cComment.value,
            subscribe = this.subscribe.current.checked

        const body = {
            author_email: email,
            author_name: name,
            content: comment,
            post: postId,
            subscribe_to_replies: subscribe,
        }

        if (this.saveData.current.checked) {
            localStorage.setItem(
                "user",
                JSON.stringify({
                    name,
                    email,
                    subscribe,
                })
            )
        }

        if (commentId) {
            body.parent = commentId
        }

        const headers = {
            "Content-Type": "application/json",
        }

        if (this.state.code) {
            headers.Authorization = `Bearer ${this.state.code}`
            body.author = 1
        }

        fetch(`${config.cms}/wp-json/wp/v2/comments`, {
            method: "post",
            headers: headers,
            body: JSON.stringify(body),
        })
            .then(response => {
                return response.json()
            })
            .then(obj => {
                console.log(obj)

                if (obj.code) {
                    switch (obj.code) {
                        case "rest_comment_author_data_required":
                            this.setState({
                                message:
                                    "Please enter a valid name and email address",
                            })
                            break
                        case "rest_comment_content_invalid":
                            this.setState({ message: "Please enter a comment" })
                            break
                        default:
                            this.setState({
                                message:
                                    "An error occured while adding the comment",
                            })
                    }
                } else {
                    this.setState({
                        message: "Comment added.",
                        error: false,
                    })
                    this.cComment.value = ""
                    this.props.commentUpdateState(false)
                }
                this.setState({ btnEnabled: true })
            })
            .catch(err => {
                console.log(err)
                this.setState({ btnEnabled: true })
            })
    }

    render() {
        return (
            <div className="form boxed" onSubmit={this.formSubmit}>
                <noscript>
                    <h4>Please Enable JavaScript for adding comments.</h4>
                </noscript>
                <form ref={this.form}>
                    <div className="input-field">
                        <label>
                            <p>Name</p>
                            <div className="field">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="input"
                                    ref={this.cName}
                                />
                            </div>
                        </label>
                    </div>
                    <div className="input-field">
                        <label>
                            <p>Email</p>
                            <div className="field">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="input"
                                    ref={this.cEmail}
                                />
                            </div>
                        </label>
                    </div>
                    <div className="input-field">
                        <label>
                            <p>Comment</p>
                            <div className="field">
                                <Textarea
                                    className="input"
                                    minRows={3}
                                    placeholder="Comment"
                                    inputRef={tag => (this.cComment = tag)}
                                />
                            </div>
                        </label>
                    </div>
                    <div className="input-field checkbox">
                        <label>
                            <input
                                type="checkbox"
                                ref={this.subscribe}
                                name="subscribe"
                                value="true"
                                defaultChecked
                            />
                            <span className="icon"></span>
                            <p>Send email notifications for replies.</p>
                        </label>
                    </div>
                    {!this.state.hasStoredData && (
                        <div className="input-field checkbox">
                            <label>
                                <input
                                    type="checkbox"
                                    ref={this.saveData}
                                    name="savedata"
                                    value="true"
                                    defaultChecked
                                />
                                <span className="icon"></span>
                                <p>
                                    Save my name, email and notification
                                    preferences on this browser.
                                </p>
                            </label>
                        </div>
                    )}
                    {this.state.message && (
                        <div className="input-field">
                            <p
                                className={
                                    this.state.error ? "error" : "success"
                                }
                            >
                                {this.state.message}
                            </p>
                        </div>
                    )}
                    <div className="input-field">
                        <button
                            type="submit"
                            className={`btn ${
                                this.state.btnEnabled ? "" : "disabled"
                            }`}
                            disabled={!this.state.btnEnabled}
                        >
                            Comment
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export class Comments extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: false,
            activeComment: false,
        }

        this.commentList = React.createRef()

        this.fetchData = this.fetchData.bind(this)
    }

    getCommentDepth(comments, id, depth) {
        depth = depth || 1
        if (comments[id].parent === 0) return depth
        return this.getCommentDepth(comments, comments[id].parent, depth + 1)
    }

    getParentAboveLevel(comments, id, depth) {
        if (depth === 0) return comments[id]
        return this.getParentAboveLevel(
            comments,
            comments[id].parent,
            depth - 1
        )
    }

    fetchData() {
        const comments = {}
        fetch(
            `${config.cms}/wp-json/wp/v2/comments?post=${this.props.postId}&per_page=100`,
            {
                method: "get",
            }
        )
            .then(res => {
                return res.json()
            })
            .then(data => {
                data.forEach(item => (comments[item.id] = item))
                data.forEach(item => {
                    if (item.parent > 0) {
                        if (!("replies" in comments[item.parent]))
                            comments[item.parent]["replies"] = []

                        const commentDepth = this.getCommentDepth(
                            comments,
                            item.id,
                            1
                        )

                        if (commentDepth > 5) {
                            const parent = this.getParentAboveLevel(
                                comments,
                                item.id,
                                commentDepth - 5
                            )
                            if (!("replies" in parent)) parent.replies = []
                            parent.replies.unshift(item)
                        } else {
                            comments[item.parent]["replies"].push(item)
                        }
                        delete comments[item.id]
                    }
                })
                this.props.commentUpdateState(true)
                this.setState({
                    comments: comments,
                })
            })
    }

    onHashChange = (e) => {
        if (window.location.hash) {
            const linkedComment = window.location.hash.substring(1);
            if (linkedComment[0] === "c") {
                this.setState({
                    activeComment: linkedComment,
                })
            }
        }
    }

    componentDidMount() {
        const _this = this

        if (!this.props.commentsUpdated) {
            this.fetchData()
        }

        if (window.location.hash) {
            const linkedComment = window.location.hash.substring(1)

            if (linkedComment[0] === "c") {
                this.setState({
                    activeComment: linkedComment,
                })

                this._scrolledToComment = false
            }
        }

        window.addEventListener("hashchange", this.onHashChange)
    }

    componentDidUpdate() {
        if (!this.props.commentsUpdated) {
            this.fetchData()
        }
    }

    componentWillUnmount(){
        window.removeEventListener("hashchange", this.onHashChange);
    }

    render() {
        return (
            <div className="comment-list boxed" ref={this.commentList}>
                {this.state.comments && (
                    <React.Fragment>
                        {Object.keys(this.state.comments).length === 0 && (
                            <ul>
                                <li>
                                    <div className="content title">
                                        <h6>No comments yet.</h6>
                                    </div>
                                </li>
                            </ul>
                        )}
                        <CommentTree
                            data={this.state.comments}
                            postId={this.props.postId}
                            commentUpdateState={this.props.commentUpdateState}
                            activeComment={this.state.activeComment}
                        />
                    </React.Fragment>
                )}
            </div>
        )
    }
}

class CommentTree extends React.Component {
    render() {
        const data = this.props.data
        return (
            <ul>
                {data &&
                    Object.keys(data).map(item => {
                        return (
                            <Comment
                                data={data[item]}
                                key={data[item].id}
                                postId={this.props.postId}
                                commentUpdateState={
                                    this.props.commentUpdateState
                                }
                                activeComment={this.props.activeComment}
                            >
                                <CommentTree
                                    data={data[item].replies}
                                    postId={this.props.postId}
                                    commentUpdateState={
                                        this.props.commentUpdateState
                                    }
                                    activeComment={this.props.activeComment}
                                />
                            </Comment>
                        )
                    })}
            </ul>
        )
    }
}

class Comment extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            replyActivated: false,
        }

        this.addReply = this.addReply.bind(this)
        this.cancelReply = this.cancelReply.bind(this)
        this.commentItem = React.createRef();
    }

    addReply(event) {
        event.preventDefault()
        this.setState({
            replyActivated: true,
        })
    }

    componentDidMount(){
        if(this.props.activeComment === `c${this.props.data.id}`){
            const doc = document.documentElement;
            const top = this.commentItem.current.getBoundingClientRect().top;
            const windowTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
            if(windowTop >= top+40 || windowTop <= top-40){
                window.scrollTo(0, top);
            }
        }
    }

    cancelReply(event) {
        event.preventDefault()
        this.setState({
            replyActivated: false,
        })
    }

    render() {
        const children = this.props.children
        const {
            author_avatar_urls,
            author_name,
            id,
            content,
            author,
        } = this.props.data
        const replyTo = this.props.data.parent
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
        }
        let date = new Date(this.props.data.date)
        date = date.toLocaleDateString(undefined, options)

        return (
            <li id={`c${id}`} ref={this.commentItem}>
                <div
                    className={`content${
                        this.props.activeComment &&
                        this.props.activeComment === `c${id}`
                            ? " active"
                            : ""
                    }`}
                >
                    <div className="comment-meta">
                        <img
                            src={author_avatar_urls["48"]}
                            alt="User profile"
                        />
                        <div className="data">
                            <p className="name color-primary">
                                {author_name}
                                {author !== 0 && (
                                    <span className="badge">mod &#x2605;</span>
                                )}
                            </p>
                            <span className="date">{date}</span>
                            {replyTo > 0 && (
                                <a className="reply-to" href={`#c${replyTo}`}>
                                    Replying to #{replyTo}
                                </a>
                            )}
                        </div>
                    </div>
                    <div
                        className="comment"
                        dangerouslySetInnerHTML={{
                            __html: content.rendered,
                        }}
                    ></div>
                    <div className="comment-actions">
                        <button
                            type="button"
                            className="btn"
                            onClick={this.addReply}
                        >
                            Reply
                        </button>
                    </div>
                    {this.state.replyActivated && (
                        <div className="reply-form">
                            <div className="reply-form-card">
                                <p>
                                    Reply to the comment.{" "}
                                    <span
                                        style={{ borderBottom: "1px solid" }}
                                        onClick={this.cancelReply}
                                    >
                                        Cancel ?
                                    </span>
                                </p>
                                <CommentForm
                                    commentId={id}
                                    postId={this.props.postId}
                                    commentUpdateState={
                                        this.props.commentUpdateState
                                    }
                                />
                            </div>
                        </div>
                    )}
                </div>
                {children && <React.Fragment>{children}</React.Fragment>}
            </li>
        )
    }
}
