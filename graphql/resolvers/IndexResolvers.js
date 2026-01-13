const postResolvers = require('./PostResolvers');
const userResolvers = require('./UserResolvers');

module.exports = {
    Query: {
        ...postResolvers.Query,
        
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...postResolvers.Mutation
    }
}