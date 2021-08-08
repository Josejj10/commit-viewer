import { createAction, createReducer } from 'typesafe-actions';
import { CommitsActionTypes, commitsInitialState, ICommitsState } from '../types';

export const commitsSetShowTypeAction = createAction(CommitsActionTypes.SET_SHOW_TYPE)<string, any>();

export const commitsSetShowTypeReducer = createReducer(commitsInitialState).handleAction(
  commitsSetShowTypeAction,
  (state: ICommitsState, action: any) => ({
    ...state,
    showType: action.payload,
  })
);
