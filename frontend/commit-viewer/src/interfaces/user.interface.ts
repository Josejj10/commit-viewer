export interface IUser {
  name: string;
  gitId: string;
  avatarUrl: string;
  apiUrl: string;
  htmlUrl: string;
  reposUrl: string;
  type: string;
}

export class UserModel {
  name: string;
  gitId: string;
  avatarUrl: string;
  apiUrl: string;
  htmlUrl: string;
  reposUrl: string;
  type: string;

  constructor({ login, id, avatar_url, api_url, html_url, repos_url, type }: any) {
    this.name = login;
    this.gitId = id;
    this.avatarUrl = avatar_url;
    this.apiUrl = api_url;
    this.htmlUrl = html_url;
    this.reposUrl = repos_url;
    this.type = type;
  }
}
