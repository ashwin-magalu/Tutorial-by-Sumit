/* With connection with express.js */
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const http = require('http')

const app = express()

const typeDefs = `
type PostDetails{
    id: ID!,
    title: String!,
    description: String!,
}

type Query{
    totalPosts: Int!,
    postDetails: PostDetails,
}`

const resolvers = {
    Query: {
        totalPosts: () => 100,
        postDetails: () => ({
            id: 1,
            title: 'Some title',
            description: 'Some description'
        })
    }
}

let apolloServer = null

async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })

    await apolloServer.start()
    apolloServer.applyMiddleware({ app })
}
startServer()

const httpServer = http.createServer(app)

app.get("/rest", (req, res) => {
    res.status(200).json({ data: "API is working" })
})

app.listen(3500, () => {
    console.log("Server is running on port 3500") //localhost:3500/rest
    console.log(`GQL Path is ${apolloServer.graphqlPath}`) //localhost:3500/graphql
})