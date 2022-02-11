// import { createStore } from 'redux';

// const ADD = 'ADD';
// const DELETE = 'DELETE';

// const addChat = text => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// const deleteChat = id => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD:
//       return [{ text: action.text, id: Date.now() }, ...state];
//     case DELETE:
//       return state.filter(chat => chat.id !== action.id);
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

// export const actionCreators = {
//   addChat,
//   deleteChat,
// };

// export default store;

// {
//   '대화목록' : [{}, {}, {}, {}, {}],
//   '유저정보' : {}
// }

import { createStore } from 'redux';
import { INITIAL_MESSAGE } from './constants';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        userId: action.userId,
        userName: action.userName,
        profileImg: action.profileImg,
      };
    case 'ADD_CHAT':
      return {
        ...state,
        userId: action.userId,
        userName: action.userName,
        profileImg: action.profileImg,
        text: action.text,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);
