import { combineReducers } from 'redux';
import login from './login';
import messenger from './messenger';
import modals from './modals';
import reply from './reply';

const rootReducer = combineReducers({ login, messenger, modals, reply });

export default rootReducer;
