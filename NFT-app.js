const http = require('http');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const cors = require('cors');
require('dotenv').config();

const typeDefs = require('./graphql/typedefs/index');
const resolvers = require('./graphql/resolvers/index');

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: (integrationContext) => ({
    req: integrationContext.req,
  }),
  playground: process.env.NODE_ENV || true,
  mocks: true,
  mockEntireSchema: false,
});

app.use(cors());

server.applyMiddleware({ app });

//For handling subscriptions
const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(5000, () => {
  console.log(`Server running at http://localhost:5000/graphql`);
});
