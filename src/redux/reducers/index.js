import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import login from './login';
import messenger from './messenger';
import modals from './modals';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['login', 'messenger', 'modals'],
};

const rootReducer = combineReducers({ login, messenger, modals });

export default persistReducer(persistConfig, rootReducer);
