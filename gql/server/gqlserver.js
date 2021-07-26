/* Without connection with express.js */
const { ApolloServer } = require("apollo-server")
const dotenv = require("dotenv").config()

const port = process.env.PORT || 5000

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

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
})

apolloServer.listen(port, () => {
    console.log(`GQL server started on port ${port}`) //localhost:5500/
})