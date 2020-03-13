import React from 'react'

const Input = (props) => {
    const aStyle = {
        
            display: "inline-block",
            width: "500px",
            textAlign: "center"         
    }
        return (
         <p ><label style={aStyle} htmlFor={props.id}>{props.label}</label>   <input type={props.type} id={props.id} /> <button onClick={props.onClick} id={props.id+".io"} >edit</button> </p>
        )
    
}

export default Input
