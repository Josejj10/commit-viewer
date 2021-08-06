import { GitCommitParentModel, IGitCommitParent } from './commit-parent.interface';
import { CommitModel, ICommit } from './commit.interface';
import { IUser, UserModel } from './user.interface';

export interface IGitCommit {
  author: IUser;
  committer: IUser;
  htmlUrl: string;
  commentsUrl: string;
  parents: IGitCommitParent[];
  commit: ICommit;
}

export class GitCommitModel {
  author: IUser;
  committer: IUser;
  htmlUrl: string;
  commentsUrl: string;
  parents: IGitCommitParent[];
  commit: ICommit;

  constructor({ author, committer, html_url, comments_url, parents, commit }: any) {
    this.author = new UserModel(author);
    this.committer = new UserModel(committer);
    this.htmlUrl = html_url;
    this.commentsUrl = comments_url;
    this.parents = parents.map((parent: any) => new GitCommitParentModel(parent));
    this.commit = new CommitModel(commit);
  }
}
