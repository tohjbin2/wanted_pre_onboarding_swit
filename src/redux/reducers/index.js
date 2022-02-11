import { combineReducers } from 'redux';
import login from './login';
import messenger from './messenger';
import modals from './modals';

const rootReducer = combineReducers({ login, messenger, modals });

export default rootReducer;
