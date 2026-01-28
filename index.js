const {ApolloServer} = require('apollo-server');
const {PubSub} = require('graphql-subscriptions');
const mongoose = require('mongoose')

const {MONGODB} = require('./config')

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers/IndexResolvers');

const pubsub = new PubSub();

const PORT = process.env.port || 5000;

const server = new ApolloServer({typeDefs, resolvers, context: ({req}) => ({req,pubsub})})


mongoose.connect(MONGODB)
.then(() => {
    console.log('Connected to MongoDB');
    return server.listen({port: PORT});
})
.then((res) => {
    console.log(`🚀 Server ready at ${res.url}`);
})
.catch((err) => {
    console.log(err);
});
