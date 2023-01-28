import React from 'react';
import Home from './Home'

const Numbers = (props) => {
    return (
        <>
        {
            isNaN(props.match.params.id) && props.match.params.id !== "home" ? <h1>The message is: {props.match.params.id} </h1> :
            isNaN(props.match.params.id) && props.match.params.id === "home" ? <Home/> :
            <h1>The number is: {props.match.params.id} </h1>
        }
        </>
    )
}
export default Numbers;