import React, { Component} from "react";

class Welcome extends Component {
    render() {
        const {name, nickname} = this.props
        return <h1>Welcome {name} aka {nickname}</h1>;
    }
}

export default Welcome;