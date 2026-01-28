const postResolvers = require('./PostResolvers');
const userResolvers = require('./UserResolvers');
const commentsResolvers = require('./CommentsResolvers')

module.exports = {
    Query: {
        ...postResolvers.Query,
        
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...postResolvers.Mutation,
        ...commentsResolvers.Mutation

    },
    Post: {
        likeCount: (parent) => parent.likes.length,
        commentCount: (parent) => parent.comments.length
    },
    Subscription:{
        ...postResolvers.Subscription
    }
};