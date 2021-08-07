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

  constructor({ login, id, avatar_url, url, html_url, repos_url, type }: any) {
    this.name = login;
    this.gitId = id;
    this.avatarUrl = avatar_url;
    this.apiUrl = url;
    this.htmlUrl = html_url;
    this.reposUrl = repos_url;
    this.type = type;
  }
}

export const defaultUser = new UserModel({
  name: 'No user returned from API',
  gitId: '1',
  avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
  apiUrl: '',
  htmlUrl: '',
  reposUrl: '',
  type: '',
});
