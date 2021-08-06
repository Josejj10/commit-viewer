import { AuthorModel, IAuthor } from './author.interface';

export interface ICommit {
  author: IAuthor;
  message: string;
  treeUrl: string;
  url: string;
  commentCount: number;
}

export class CommitModel implements ICommit {
  author: IAuthor;
  message: string;
  treeUrl: string;
  url: string;
  commentCount: number;

  constructor({ author, message, tree, treeUrl, url, comment_count }: any) {
    this.author = new AuthorModel(author);
    this.message = message;
    this.treeUrl = tree ? tree.url : treeUrl;
    this.url = url;
    this.commentCount = comment_count;
  }
}
