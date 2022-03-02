import { createStore } from 'redux';
import { persistStore } from 'redux-persist'; // MEMO: redux-persist라이브러리

import rootReducer from './reducers';

const store = createStore(rootReducer); // MEMO-REDUX: store를 생성하는 것을 의미

export const persistor = persistStore(store);

export default store;
