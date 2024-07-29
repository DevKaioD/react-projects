import React, { Component } from "react";

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }
    changeMessage() {
        this.setState(prevState => ({
            message: prevState.message === 'Welcome visitor' ? 'Thanks for click!' : 'Welcome visitor'
        }))
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Action</button>
            </div>
        )
    }
}

export default Message;