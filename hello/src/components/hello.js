import React from "react";

const Hello = () => {

    /*return (
        <div className="hello-in-jsx">
            <h1>Hello Everyone</h1>
        </div>
    )*/
    return React.createElement('div', {id: 'hello', className:'hello-in-js'}, React.createElement('h1', null, 'Hello Kaio'));
};

export default Hello;