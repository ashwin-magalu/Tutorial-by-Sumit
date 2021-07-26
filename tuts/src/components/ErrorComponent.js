import React, { Component } from 'react'

export class ShowStudents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            students: [{ name: "Ashwin" }, { name: "Sumit" }]
        }
    }

    throwSomeError() {
        throw new Error("I created this error")
    }

    render() {
        throw new Error("Not in a mood to give results")
        return (
            <div>
                <button onClick={this.throwSomeError}>Throw Error</button>
            </div>
        )
    }
}

export default ShowStudents
