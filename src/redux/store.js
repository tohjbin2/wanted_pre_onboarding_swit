//       return state.filter(chat => chat.id !== action.id);

import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;
