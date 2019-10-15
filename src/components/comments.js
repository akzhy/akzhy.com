import React from "react"
import Textarea from "react-textarea-autosize"

export const CommentForm = ({ postId }) => {
    return (
        <div className="form" style={{ width: "90%", margin: "0 auto" }}>
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
                            />
                        </div>
                    </label>
                </div>
            </form>
        </div>
    )
}


export class Comments extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: false
        }
    }
    componentDidMount() {
        const comments = {};
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
                    comments: comments
                })
            })
    }
    render() {
        return(
            <div className="comments">
                {this.state.comments &&
                    <CommentTree data={this.state.comments}/>
                }
            </div>
        );
    }
}


const CommentTree = ({ data }) => (
    <ul style={{ paddingLeft: "22px"}}>
        {data &&
            Object.keys(data).map(item => (
                <li key={data[item].id}>
                    <p dangerouslySetInnerHTML= {{ __html : data[item].content.rendered}}/>
                    {data[item].replies && <CommentTree data={data[item].replies} />}
                </li>
            ))
        }
    </ul>
)
