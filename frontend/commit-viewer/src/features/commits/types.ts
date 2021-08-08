import { IGitCommit } from '../../interfaces/git-commit.interface';

export enum CommitsActionTypes {
  LOAD = '[COMMITS] Load',
  LOAD_SUCCESS = '[COMMITS] Load success',
  LOAD_FAIL = '[COMMITS] Load fail',

  SET_SHOW_TYPE = '[COMMITS] Set show type',
}

export interface ICommitsState {
  commits: IGitCommit[];
  loading: boolean;
  error: any;
  userName: string;
  repoName: string;
  showType: string;
}

export const commitsInitialState: ICommitsState = {
  commits: [],
  loading: false,
  error: null,
  userName: 'Josejj10',
  repoName: 'commit-viewer',
  showType: 'react',
};
