import React from "react"
import Layout from "../components/layout"
import config from "../../config.json"
import Title from "../components/title"


const seo = {
    title: "Manage Subscriptions",
}
export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
        this.email = React.createRef()

        this.state = {
            hasToken: false,
            searchParams: {},
            subscriptions: false
        }
    }

    componentDidMount(){
        let params = (new URL(document.location)).searchParams;
        if(params.has("token")){
            this.setState({
                hasToken: true,
                searchParams: {
                    token: params.get("token")
                }
            })
            const headers = {
                'Content-Type': 'application/json'
            }
            fetch(`${config.cms}/wp-json/restcommentsubscribing/v1/manage`,
            {
                method: "post",
                body: JSON.stringify({
                    token:params.get("token")
                }),
                headers: headers,
            }).then((response) => {
                return response.json();
            }).then(obj => {
                if(obj.result === "success"){
                    const data = JSON.parse(obj.data);
                    this.setState({
                        subscriptions: data
                    })
                }
            })
        }
        
    }

    submit(event) {
        event.preventDefault()
        fetch(`${config.cms}/wp-json/jwt-auth/v1/token`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: this.name.current.value,
                password: this.password.current.value,
            }),
        })
            .then(res => {
                return res.json()
            })
            .then(obj => {
                if (obj.token) {
                    localStorage.setItem("auth", JSON.stringify(obj))
                    window.location = "/"
                }
            })
    }

    render() {
        return (
            <Layout seo={seo}>
                <div className="section">
                    <div className="container">
                        <div className="boxed">
                            <Title data="Manage Subscriptions" />
                            <div className="page-content">
                                {this.state.subscriptions && 
                                    <Subscriptions data={this.state.subscriptions}/>
                                }
                                {!this.state.hasToken && (
                                    <form onSubmit={this.submit}>
                                        <p>To manage your subscriptions, please enter your email address.</p>
                                        <div className="input-field">
                                            <label>
                                                <p>Email</p>
                                                <div className="field">
                                                    <input
                                                        type="text"
                                                        className="input"
                                                        ref={this.email}
                                                        name="email"
                                                    />
                                                </div>
                                            </label>
                                        </div>
                                        <div className="input-field">
                                            <button type="submit" className="btn">Submit</button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

const Subscriptions = ({data}) => {
    
    const list = [];

    data.forEach((item,index) => {
        list.push(
            <Row key={"tr"+index} data={item}/>
        )
    })
    
    return (
        <table>
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Post</th>
                <th>Comment</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                {list}
            </tbody>
        </table>
    )
}

class Row extends React.Component{

    componentDidMount(){

    }

    unsub(){

    }

    render(){
        const data = this.props.data;

        return (
            <tr className="subscription-item">
                <td>
                    <div className="input-field checkbox">
                        <label>
                            <input type="checkbox" name="select-subscriptions"/>
                            <span className="icon"></span>
                        </label>
                    </div>
                </td>
                <td>{data.name}</td>
                <td><a href={data.post.slug} title={data.post.title}>{data.post.title}</a></td>
                <td><a href={`${data.post.slug}#c${data.comment.id}`}>{data.comment.content}</a></td>
                <td><a href="#unsub">Unsubscribe</a></td>
            </tr>
        )
    }
}