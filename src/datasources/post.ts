const { DataSource } = require('apollo-datasource');

class PostAPI extends DataSource {
  constructor({ db }) {
    super();
    this.db = db;
  }

  initialize(config) {
    this.context = config.context;
  }

  async createPost(postData) {
    try {
      const res = await this.db('posts').insert(postData);

      if (res.rowCount) {
        return {
          success: true,
        };
      }

      return {
        success: false,
      };
    } catch (err) {
      console.error('createPost -> err', err);
    }
  }

  async getPosts() {
    try {
      const res = await this.db.select().table('posts');

      if (res?.length) {
        return res;
      }
    } catch (err) {
      console.error('createPost -> err', err);
    }
  }

  async getPostById(postId) {
    try {
      const postRes = await this.db('posts')
        .where({
          id: postId,
        })
        .select();

      const commentRes = await this.db('comments')
        .where({
          post_id: postId,
        })
        .select('comments.content as comment');

      const comments = commentRes.map((commentObj) => commentObj.comment);

      if (postRes?.length) {
        return { ...postRes[0], comments };
      }
    } catch (err) {
      console.error('createPost -> err', err);
    }
  }
}

export default PostAPI;
