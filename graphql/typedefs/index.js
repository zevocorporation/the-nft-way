const { gql } = require('apollo-server-express');
const Auction = require('./auction');

const typeDefs = gql`
  ${Auction.types}

  type Query {
    ${Auction.queries}
 
  }
  type Mutation {
    ${Auction.mutations}

  }
  type Subscription{
    ${Auction.subscriptions}

  }
`;

module.exports = typeDefs;
