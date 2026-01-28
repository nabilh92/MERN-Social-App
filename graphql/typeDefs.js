const gql = require('graphql-tag');

const typeDefs = gql`
type Query {
    getPosts: [Post]!
    getPost(postId:ID!):Post    

}
input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
}
type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
}
type Post {
    id: ID!
    body: String!
    username: String!
    createdAt: String!
    comments:[Comment]!
    likes:[Like]!
    likeCount: Int!
    commentCount:Int!
}
type Mutation {
    register(registerInput: RegisterInput): User!
    login(username:String!, password:String!): User!
    createPost(body:String!):Post!
    deletePost(postId:ID!):String!
    createComment(postId:ID!, body:String!): Post!
    deleteComment(postId:ID!,commentId:ID!):Post!
    likePost(postId:ID!):Post!
}
type Comment {
    body: String!
    id:ID!
    username: String!
    createdAt:String
}
type Like {
    id: ID!
    createdAt: String!
    username: String!
}
type Subscription {
    newPost: Post!
}
`

module.exports = typeDefs;