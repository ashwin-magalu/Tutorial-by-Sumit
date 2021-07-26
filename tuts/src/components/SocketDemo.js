import React, { useEffect, useState } from 'react'
import socketIOClient from 'socket.io-client'

const API_ENDPOINT = "http://127.0.0.1:3001"

const SocketDemo = () => {
    const [response, setResponse] = useState("")
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        setSocket(socketIOClient(API_ENDPOINT))
        return () => socket.disconnect()

    }, [])

    useEffect(() => {
        connectSocketConnection(socket)
    }, [socket])

    const connectSocketConnection = (socket) => {
        if (socket !== null) {
            socket.on("GetTime", (data) => {
                setResponse(data)
                console.log(response)
            })
        }
    }

    const socketConnect = () => {
        setSocket(socketIOClient(API_ENDPOINT))
    }

    const socketDisconnect = () => {
        socket.disconnect()
    }

    return (
        <div>
            <button onClick={socketConnect}>Connect</button>
            <button onClick={socketDisconnect}>Disconnect</button>
            <br />
            <hr />
            <h2>It's <time dateTime={response}>{response}</time></h2>
        </div>
    )
}

export default SocketDemo
