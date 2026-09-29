import { PostAuthor } from "./Post";

interface GetPostsOptions {
  before?: Date;
  after?: Date;
  limit?: number;
  author?: Partial<PostAuthor>; // e.g. search by author name or other author info
}

export class PostClient {
  async getPosts(options?: GetPostsOptions) {
    throw new Error("Not implemented");
  }
}
