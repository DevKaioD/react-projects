import React from 'react';

const Greet = props => {
    const {name, nickname} = props
    return (
        <div>
            <h1>Hello {name} aka {nickname}</h1>
        </div>
    )
}
export default Greet;

//export const Greet = () => <h1>Hello Kaio</h1>;