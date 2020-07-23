const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    getPosts: [Post]
    getPostById(postId: ID!): Post
  }

  type Mutation {
    createPost(postData: CreatePostInput!): GenericResponse
    createComment(commentData: CreateCommentInput!): GenericResponse
  }

  input CreateCommentInput {
    post_id: ID!
    content: String!
  }

  input CreatePostInput {
    title: String!
    image_url: String
    content: String!
  }

  type Post {
    id: ID!,
    title: String
    image_url: String
    content: String
    comments: [String]
  }

  type PostCreateResponse {
    success: Boolean!
  }

  type GenericResponse {
    success: Boolean!
  }
`;

export default typeDefs;
