import { createAsyncAction, createReducer } from 'typesafe-actions';
import { CommitsActionTypes, commitsInitialState, ICommitsState } from '../types';
import { IGitCommit } from '../../../interfaces/git-commit.interface';

export const commitsLoadAction = createAsyncAction(
  CommitsActionTypes.LOAD,
  CommitsActionTypes.LOAD_SUCCESS,
  CommitsActionTypes.LOAD_FAIL
)<{ userName: string; repoName: string }, { userName: string; repoName: string; commits: IGitCommit[] }, any>();

export const commitsLoadReducer = createReducer(commitsInitialState)
  .handleAction(commitsLoadAction.request, (state: ICommitsState) => ({
    ...state,
    loading: true,
  }))
  .handleAction(commitsLoadAction.success, (state: ICommitsState, action: any) => ({
    ...state,
    loading: false,
    error: null,
    ...action.payload,
  }))
  .handleAction(commitsLoadAction.failure, (state: ICommitsState, action: any) => ({
    ...state,
    loading: false,
    error: action.payload,
  }));
