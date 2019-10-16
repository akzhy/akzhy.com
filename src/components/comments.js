import React from "react"
import Textarea from "react-textarea-autosize"

export class CommentForm extends React.Component{

    constructor(props){
        super(props);

        this.cName = React.createRef();
        this.cEmail = React.createRef();
        this.cComment = React.createRef();

        this.formSubmit = this.formSubmit.bind(this);
    }

    formSubmit(event){
        event.preventDefault();

        const { postId, commentId } = this.props;

        const name = this.cName.current.value,
        email = this.cEmail.current.value,
        comment = this.cComment.value;

        const body = {
            author_email: email,
            author_name: name,
            content: comment,
            post: postId
        }

        if(commentId){
            body.parent = commentId
        }
        
        fetch(`http://akzhy.local/wp-json/wp/v2/comments`,
        {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then((response) => {
            return response.json();
        }).then(obj => {
            console.log(obj)
        }).catch(err => {
            console.log("Error",err);
        })
    }
    render(){
        return (
            <div className="form" onSubmit={this.formSubmit}>
                <noscript>
                    <h4>Please Enable JavaScript for adding comments.</h4>
                </noscript>
                <form>
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
                    <div className="input-field">
                        <button type="submit" className="btn">Comment</button>
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
        }
    }
    componentDidMount() {
        const comments = {}
        fetch(
            `http://akzhy.local/wp-json/wp/v2/comments?post=${this.props.postId}`,
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
                        comments[item.parent]["replies"].push(item)
                        delete comments[item.id]
                    }
                })
                this.setState({
                    comments: comments,
                })
            })
    }
    render() {
        return (
            <div className="comment-list">
                {this.state.comments && (
                    <CommentTree data={this.state.comments} postId={this.props.postId}/>
                )}
            </div>
        )
    }
}

class CommentTree extends React.Component {

    render() {
        const data = this.props.data;
        return (
            <ul>
                {data &&
                    Object.keys(data).map(item => {
                        const options = {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                        }
                        let date = new Date(data[item].date)
                        date = date.toLocaleDateString("en-UK", options);
                        return (
                            <Comment avatar={data[item].author_avatar_urls["48"]} name={data[item].author_name} date={date} comment={data[item].content.rendered} key={data[item].id} postId={this.props.postId} commentId={data[item].id}>
                                <CommentTree data={data[item].replies} />
                            </Comment> 
                        )
                    })}
            </ul>
        )
    }
}

class Comment extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            replyActivated: false
        }

        this.addReply = this.addReply.bind(this);
        this.cancelReply = this.cancelReply.bind(this);
    }

    addReply(event){
        event.preventDefault();
        this.setState({
            replyActivated: true
        })
    }

    cancelReply(event){
        event.preventDefault();
        this.setState({
            replyActivated: false
        })
    }

    render(){
        const {avatar, name, date, comment, children }  = this.props;
        return (
            <li>
                <div className="comment-meta">
                    <img
                        src={
                            avatar
                        }
                        alt="User profile"
                    />
                    <div className="data">
                        <p className="name color-primary">
                            {name}
                        </p>
                        <p className="date">{date}</p>
                    </div>
                </div>
                <div
                    className="comment"
                    dangerouslySetInnerHTML={{
                        __html: comment,
                    }}
                ></div>
                <div className="comment-actions">
                    <button type="button" className="btn" onClick={this.addReply}>
                        Reply
                    </button>
                </div>
                {this.state.replyActivated &&
                    <div className="reply-form">
                        <div className="reply-form-card">
                            <p>Reply to the comment. <span style={{ borderBottom: "1px solid"}} onClick={this.cancelReply}>Cancel ?</span></p>
                            <CommentForm commentId={this.props.commentId} postId={this.props.postId}/>
                        </div>
                    </div>
                }
                {children && (
                    <React.Fragment>{children}</React.Fragment>
                )}
            </li>      
        )
    }
    
}