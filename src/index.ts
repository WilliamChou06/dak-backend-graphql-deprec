import { ApolloServer } from 'apollo-server';

import typeDefs from './schema';
import resolvers from './resolvers';

import db from './db';
import PostAPI from './datasources/post';
import CommentAPI from './datasources/comment';

const dataSources = () => ({
  postAPI: new PostAPI({ db }),
  commentAPI: new CommentAPI({ db }),
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`Server ready at ${url}`);
});
