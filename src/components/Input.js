import React from 'react'

const Input = (props) => {
        return (
         <p><label htmlFor={props.id}>{props.label}</label>   <input type={props.type} id={props.id} /></p>
        )
    
}

export default Input
