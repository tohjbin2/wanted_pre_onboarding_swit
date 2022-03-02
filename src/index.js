import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/GlobalStyle';
import Router from './Router';
import store from './redux/store';
import { Provider } from 'react-redux';
import { persistor } from './redux/store';
// MEMO1: 'redux-persist'라이브러리를 설치한 후 -> 'persistStore'를 사용할 수 있다.
// MEMO2: const persistor = persistStore(store); ->다른 페이지에서 요걸 선언했기 때문에 index.js로 가져올 때는 persistor인 것이다.
import { PersistGate } from 'redux-persist/integration/react';
// MEMO: 'redux-persist'라이브러리를 설치한 후 -> 'PersistGate'를 사용할 수 있다.

ReactDOM.render(
  <Provider store={store}>
    {/* MEMO: provider는 redux와 관련된 기능이다. 이렇게 최상위를 Provider로 wrapping해줘야(=감싸줘야) 안쪽에 속해 있는 컴포넌트들이 hooks를 통해 store에 접근할 수 있다. */}
    <PersistGate persistor={persistor}>
      {/* MEMO1: persistor는 redux-persist라이브러리와 관련된 기능이다. 'redux-persist'를 설치한 후 사용한다. const persistor = persistStore(store); ->를 선언했기 때문에 persistor로 쓸 수 있다. */}
      {/* MEMO2: persistor는 페이지를 새로고침 해도 store의 state가 초기화 되는 것을 방지해준다. 그러니까 persistor는 storage에 reducer state를 저장해, storage(저장공간)에 있는 데이터를 redux로 불러와 새로고침해도 데이터가 날아가지 않게 해준다. 한마디로 persistor는 store의 상태(값)를 유지시켜 준다! */}
      <GlobalStyle />
      <Router />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
