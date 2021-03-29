const auction = require('./auction');

const resolvers = {
  Query: {
    // ...auction.queryResolver,
  },

  Mutation: {
    ...auction.mutationResolver,
  },

  Subscription: {
    ...auction.subscriptionResolver,
  },
};

module.exports = resolvers;
