import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { epicMiddleware, RootEpic } from './epics';
import { initialState, rootReducer } from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const devToolsEnhancer = composeWithDevTools({
  name: 'commit-viewer',
});

export const store = createStore(
  persistedReducer,
  initialState as any,
  devToolsEnhancer(applyMiddleware(epicMiddleware))
);
export const persistor = persistStore(store);

epicMiddleware.run(RootEpic);
