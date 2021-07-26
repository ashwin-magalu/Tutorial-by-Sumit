/* actual web worker */
export function processDataWebWorker() {
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
    return data
}