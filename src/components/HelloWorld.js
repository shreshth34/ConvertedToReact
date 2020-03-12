import React, { Component } from 'react'

export class HelloWorld extends Component {
    render() {
        const newstyle = {
            fontFamily:"Poppins",
            fontSize: "90px"
        }


        return (
            <div>
                <h1 style={newstyle}>Good Morning</h1>
            </div>
        )
    }
}

export default HelloWorld
