const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge')
const { loadFilesSync } = require('@graphql-tools/load-files')
const http = require('http')
const path = require('path')

const app = express()

const typeDefs = mergeTypeDefs(loadFilesSync(path.join(__dirname, './schema')))
const resolvers = mergeResolvers(loadFilesSync(path.join(__dirname, './resolvers')))

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