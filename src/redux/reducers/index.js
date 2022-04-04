import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // MEMO: localStorage에 저장할 것임을 의미. 만약 sessionStorage에 저장하고 싶다면 import storageSession from 'redux-persist/lib/storage/session'; ->요걸 입력해야 한다(경로의 마지막 부분을 session으로 바꾸면 됨).

import login from './login';
import messenger from './messenger';
import modals from './modals';
import reply from './reply';

const persistConfig = {
  key: 'root', // MEMO: storage에 저장할 것을 의미
  storage: storage,
  whitelist: ['login', 'messenger', 'modals', 'reply'], // MEMO: whitelist ->여기에 언급된 것들을 저장할 거라는 의미
};

const rootReducer = combineReducers({ login, messenger, modals, reply });
// MEMO1-REDUX: '루트 리듀서(rootRuducer)'란? 한 프로젝트에서 리듀스가 여러 개일 때 ->요 리듀스들을 하나의 리듀스로 합쳐서 사용할 수 있다. 이런 합쳐진 리듀서들을 '루트 리듀서(rootRuducer)'라고 한다.
// MEMO2-REDUX: 리듀서를 합치는 작업은 ->리덕스에 내장된 'combineReducers()'라는 함수를 사용한다.
// MEMO3-REDUX: 이렇게 만들어진 rootReducer를 다른 파일(여기 프로젝트의 경우 store.js)에서 import시킬 때 ->최종 경로는 여기 폴더가 속한 '파일'이 된다. 이말인 즉, 여기 프로젝트의 경우 store.js에서 import시킬 때 ->import rootReducer from './reducers'; 가 된다는 의미이다.
// MEMO4-REDUX: 위 MEMO3-REDUX에서 경로가 파일이 되는 이유는 rootReducer에 속한 각각의 reducer들이 'reducers'파일 안에 있기 때문이다.
// MEMO5-REDUX: 현재 파일인 index.js를 만든 이유는 루트 리듀서를 사용하기(만들기) 위해서이다. 현재 파일인 index.js와 src 하위에 있는 index.js파일은 서로 별개이다(관련 없다는 말임).

export default persistReducer(persistConfig, rootReducer);
