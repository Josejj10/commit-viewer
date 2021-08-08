import { combineEpics } from 'redux-observable';
import reduceReducers from 'reduce-reducers';
import * as epics from './epics';
import { commitsInitialState } from './types';
import { commitsLoadReducer } from './actions/load.actions';
import { commitsSetShowTypeReducer } from './actions/setType.actions';

export const CommitsEpics = combineEpics(...Object.values(epics));

export const CommitsReducer = reduceReducers(commitsInitialState, commitsLoadReducer, commitsSetShowTypeReducer);
