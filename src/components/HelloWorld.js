import React, { Component } from 'react'

export class HelloWorld extends Component {

    state = {

    }


    render() {
        const newstyle = {
            fontFamily:"Poppins",
            fontSize: "90px"
        }


        return (
            <div>
                <h1 style={newstyle}>Henlo | User</h1>
            </div>
        )
    }
}

export default HelloWorld
