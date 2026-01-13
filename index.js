const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose')

const {MONGODB} = require('./config')

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers/IndexResolvers');

const server = new ApolloServer({typeDefs, resolvers, context: ({req}) => ({req})})


mongoose.connect(MONGODB)
.then(() => {
    console.log('Connected to MongoDB');
    return server.listen({port: 5000});
})
.then((res) => {
    console.log(`🚀 Server ready at ${res.url}`);
})
.catch((err) => {
    console.log(err);
});
