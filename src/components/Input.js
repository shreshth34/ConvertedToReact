import React from 'react'

const Input = (props) => {
    const aStyle = {
        
            display: "inline-block",
            width: "100px",
            textAlign: "center"         
    }
        return (
         <p ><label style={aStyle} htmlFor={props.id}>{props.label}</label>   <input type={props.type} id={props.id} /></p>
        )
    
}

export default Input
