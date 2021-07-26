const { gql } = require("apollo-server-express")
const posts = require("../data")

console.log(posts)

const postCount = () => posts.length
const allPosts = () => posts
const newPost = (parent, args) => {
    const post = {
        id: posts.length + 1,
        title: args.title,
        description: args.description,
    };
    posts.push(post);
    return post;
}

module.exports = {
    Query: {
        postCount,
        allPosts,
    },
    Mutation: {
        newPost,
    }
}


/*
Mutation:

mutation {
  newPost(title: "My Mutation Post", description: "My Mutation Post Description") {
    id
    title
    description
  }
}
*/