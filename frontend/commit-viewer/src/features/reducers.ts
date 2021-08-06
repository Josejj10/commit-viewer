import { combineReducers } from 'redux';
import { CommitsReducer } from './commits';
import { commitsInitialState, ICommitsState } from './commits/types';

export interface IState {
  commits: ICommitsState;
}

export const initialState: IState = {
  commits: commitsInitialState,
};

export const rootReducer = combineReducers({
  commits: CommitsReducer,
});
