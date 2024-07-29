import React from 'react';

const Greet = props => {
    return (
        <div>
            <h1>Hello {props.name} aka {props.nickname}</h1>
            {props.children}
        </div>
    )
}
export default Greet;

//export const Greet = () => <h1>Hello Kaio</h1>;