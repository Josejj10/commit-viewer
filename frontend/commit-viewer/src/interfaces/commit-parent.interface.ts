export interface IGitCommitParent {
  url: string;
  htmlUrl: string;
}

export class GitCommitParentModel implements IGitCommitParent {
  url: string;
  htmlUrl: string;
  constructor({ url, html_url }: any) {
    this.url = url;
    this.htmlUrl = html_url;
  }
}
