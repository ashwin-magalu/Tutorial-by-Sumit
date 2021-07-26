import React, { Component } from 'react'

export class ErrorHandlingBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: false, errorMessage: ""
        }
    }

    static getDerivedStateFromError(error) {
        console.log("getDerivedStateFromError ran")
        return { error: true, errorMessage: error.toString() }
    }

    componentDidCatch(error, errorInfo) {
        console.log({ error, errorInfo })
    }

    render() {
        console.log(this.state)
        const { error, errorMessage } = this.state
        const { children } = this.props

        return error ? (
            <>
                <h1>{error}</h1>
                <br />
                <div>{errorMessage}</div>
            </>
        ) : (
            children
        )
    }
}

export default ErrorHandlingBoundary
