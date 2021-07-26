import React from 'react'
import ReactCountdownClock from 'react-countdown-clock'
import workerfile from 'workerize-loader!./workerfile' // eslint-disable-line import/no-webpack-loader-syntax

const WebWorker = () => {
    const processData = () => {
        const data = [];

        const personDetails = {
            updated: null,
            id: 1
        }

        for (let i = 0; i < 50000000; i++) {
            personDetails.id = i++
            personDetails.dateJoined = Date.now()

            data.push(personDetails)
        }
        alert("Function task complete")
        return data
    }

    const processDataByWebWorker = (params) => {
        let instance = workerfile();

        instance.processDataWebWorker().then((data) => {
             console.log("job done")
        })
    }


    return (
        <>
            <ReactCountdownClock seconds={120} color="#000" alpha={0.9} size={150} />
            <button onClick={processData}>Process Data Directly</button>
            <button onClick={processDataByWebWorker}>Process Data By WebWorker</button>
        </>
    )
}

export default WebWorker
