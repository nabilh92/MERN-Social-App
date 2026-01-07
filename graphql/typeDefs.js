const gql = require('graphql-tag');

const typeDefs = gql`
type Query {
    getPosts: [Post]!    

}
type Post {
    id: ID!
    body: String!
    username: String!
    createdAt: String!
}
`

module.exports = typeDefs;