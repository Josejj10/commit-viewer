import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { CommitsEpics } from './commits';

export const RootEpic = combineEpics(CommitsEpics);

export const epicMiddleware = createEpicMiddleware();
