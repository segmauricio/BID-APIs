import React, { useEffect, useState } from 'react';

const ColoredMsg = (props) => {
    return (
    <> 
        <div style={{backgroundColor: props.match.params.bgcolor }}>
            <p> The word is <span style={{color: props.match.params.textcolor }}>{props.match.params.id}</span></p>
        </div>
        
    </>
    )
}
export default ColoredMsg;