import React from 'react'

function functionClick() {
    function clickHandler(){
        console.log("button has been clicked")
    }
    return (
    <div>
        <button onClick={clickHandler}>Click here!</button>
    </div>
  )
}

export default functionClick;