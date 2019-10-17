import React from "react"
import Textarea from "react-textarea-autosize"
import config from "../../config.json"

export class CommentForm extends React.Component{

    constructor(props){
        super(props);

        this.cName = React.createRef();
        this.cEmail = React.createRef();
        this.cComment = React.createRef();
        this.form = React.createRef();

        this.state = {
            message: false,
            btnEnabled: true,
            error: true
        }

        this.formSubmit = this.formSubmit.bind(this);
    }

    formSubmit(event){
        event.preventDefault();

        this.setState({ btnEnabled: false })

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
        
        fetch(`${config.cms}/wp-json/wp/v2/comments`,
        {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then((response) => {
            return response.json();
        }).then(obj => {
            if(obj.code){
                switch(obj.code){
                    case 'rest_comment_author_data_required':
                        this.setState({ message: "Please enter a valid name and email address"});
                        break;
                    case 'rest_comment_content_invalid':
                        this.setState({ message: "Please enter a comment"});
                        break;
                    default:
                        this.setState({ message: "An error occured while adding the comment"});
                }
            }else {
                this.setState({
                    message: "Comment added.",
                    error: false
                })
                this.form.current.reset();
                this.props.commentUpdateState(false);
            }
            this.setState({ btnEnabled: true });
        }).catch(err => {
            console.log(err);
            this.setState({ btnEnabled: true });
        })
    }
    render(){
        return (
            <div className="form" onSubmit={this.formSubmit}>
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
                    {this.state.message &&
                        <div className="input-field">
                            <p className={this.state.error ? "error" : "success"}>{this.state.message}</p>
                        </div>
                    }
                    <div className="input-field">
                        <button type="submit" className={`btn ${this.state.btnEnabled ? '' : 'disabled'}`} disabled={!this.state.btnEnabled}>Comment</button>
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
        this.fetchData = this.fetchData.bind(this);
    }

    getCommentDepth(comments, id, depth){
        depth = depth || 1;
        if(comments[id].parent === 0) return depth;
        return this.getCommentDepth(comments, comments[id].parent, depth+1);
    }

    getParentAboveLevel(comments, id, depth){
        if(depth === 0) return comments[id];
        return this.getParentAboveLevel(comments, comments[id].parent, depth-1);
    }

    fetchData(){
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
                data.forEach(item => (comments[item.id] = item));
                data.forEach(item => {
                    if (item.parent > 0) {
                        if (!("replies" in comments[item.parent]))
                            comments[item.parent]["replies"] = []; 
                        
                        const commentDepth = this.getCommentDepth(comments, item.id, 1);

                        if(commentDepth > 5){
                            const parent = this.getParentAboveLevel(comments, item.id, commentDepth-5);
                            if(!("replies" in parent)) parent.replies = [];
                            parent.replies.unshift(item);
                        } else {
                            comments[item.parent]["replies"].push(item);
                        }                 
                        delete comments[item.id]
                    }
                })
                this.props.commentUpdateState(true);
                this.setState({
                    comments: comments
                })
            })
    }

    componentDidMount() {

        const _this = this;

        if(!this.props.commentsUpdated){
            this.fetchData();
        }

        if(window.location.hash){
            this.setState({
                activeComment: window.location.hash.substring(1)
            })
        }

        window.addEventListener("hashchange", function(event){
            if(window.location.hash){
                _this.setState({
                    activeComment: window.location.hash.substring(1)
                })
            }
        })
    }

    componentDidUpdate(){
        if(!this.props.commentsUpdated){
            this.fetchData();
        }
    }

    render() {

        return (
            <div className="comment-list">
                {this.state.comments && (
                    <CommentTree data={this.state.comments} postId={this.props.postId} commentUpdateState={this.props.commentUpdateState} activeComment={this.state.activeComment}/>
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
                            <Comment avatar={data[item].author_avatar_urls["48"]} name={data[item].author_name} date={date} comment={data[item].content.rendered} key={data[item].id} id={data[item].id} postId={this.props.postId} commentId={data[item].id} commentUpdateState={this.props.commentUpdateState} replyTo={data[item].parent} activeComment={this.props.activeComment}>
                                <CommentTree data={data[item].replies} postId={this.props.postId} commentUpdateState={this.props.commentUpdateState} activeComment={this.props.activeComment}/>
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
        const { avatar, name, date, id, comment, children, replyTo }  = this.props;
        return (
            <li id={`c${id}`}>
                <div className={`content${(this.props.activeComment && this.props.activeComment === `c${id}`) ? ' active' : ''}`}>
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
                            <span className="date">{date}</span>
                            {(replyTo > 0) &&
                                <a className="reply-to" href={`#c${replyTo}`}>Replying to #{replyTo}</a>
                            }
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
                                <CommentForm commentId={this.props.commentId} postId={this.props.postId} commentUpdateState={this.props.commentUpdateState}/>
                            </div>
                        </div>
                    }
                </div>
                {children && (
                    <React.Fragment>{children}</React.Fragment>
                )}
            </li>      
        )
    }
    
}