import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import login from './login';
import messenger from './messenger';
import modals from './modals';
import reply from './reply';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['login', 'messenger', 'modals', 'reply'],
};

const rootReducer = combineReducers({ login, messenger, modals, reply });

export default persistReducer(persistConfig, rootReducer);
