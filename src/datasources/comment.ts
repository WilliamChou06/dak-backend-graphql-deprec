const { DataSource } = require('apollo-datasource');

class CommentAPI extends DataSource {
  constructor({ db }) {
    super();
    this.db = db;
  }

  initialize(config) {
    this.context = config.context;
  }

  async createComment(commentData) {
    try {
      const res = await this.db('comments').insert(commentData);

      if (res?.rowCount) {
        return {
          success: true,
        };
      }

      return { success: false };
    } catch (err) {
      console.error('createPost -> err', err);
    }
  }

  async deleteComment(commentId) {
    try {
      const res = await this.db('comments').where('id', commentId).del();

      if (res) {
        return {
          success: true,
        };
      }

      return { success: false };
    } catch (err) {
      console.error('createPost -> err', err);
    }
  }
}

export default CommentAPI;
