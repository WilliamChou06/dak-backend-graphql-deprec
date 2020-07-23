export default {
  Query: {
    getPosts: async (_, __, { dataSources }) => {
      try {
        const res = await dataSources.postAPI.getPosts();

        return res;
      } catch (err) {
        console.error('err', err);
      }
    },
    getPostById: async (_, { postId }, { dataSources }) => {
      try {
        const res = await dataSources.postAPI.getPostById(postId);
        return res;
      } catch (err) {
        console.error('err', err);
      }
    },
  },
  Mutation: {
    createPost: async (_, { postData }, { dataSources }) => {
      try {
        const res = await dataSources.postAPI.createPost(postData);

        return res;
      } catch (err) {
        console.error('err', err);
      }
    },
    createComment: async (_, { commentData }, { dataSources }) => {
      try {
        const res = await dataSources.commentAPI.createComment(commentData);

        return res;
      } catch (err) {
        console.error('err', err);
      }
    },
  },
};
