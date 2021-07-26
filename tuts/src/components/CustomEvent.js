import React, { useEffect } from 'react'

const CustomEvent = () => {
    useEffect(() => {
        document.addEventListener("custom-event", (data) => {
            alert(`Custom event triggered with data:  ${data.detail}`)
            console.log(data)
        })
    })

    return (
        <div>
            Custom Event Component
        </div>
    )
}

export default CustomEvent
