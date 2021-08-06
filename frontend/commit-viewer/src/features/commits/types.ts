import { IGitCommit } from '../../interfaces/git-commit.interface';

export enum CommitsActionTypes {
  LOAD = '[COMMITS] Load',
  LOAD_SUCCESS = '[COMMITS] Load success',
  LOAD_FAIL = '[COMMITS] Load fail',
}

export interface ICommitsState {
  commits: IGitCommit[];
  loading: boolean;
  error: any;
  userName: string;
  repoName: string;
}

export const commitsInitialState: ICommitsState = {
  commits: [],
  loading: false,
  error: null,
  userName: 'facebook',
  repoName: 'react',
};
