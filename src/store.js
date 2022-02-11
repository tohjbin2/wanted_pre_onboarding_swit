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

import { createStore } from 'redux';
import { INITIAL_MESSAGE } from './constants';

const initialState = {
  chatList: [...INITIAL_MESSAGE],
  userInfo: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        userInfo: {
          userId: action.userId,
          userName: action.userName,
          profileImageSrc: action.profileImageSrc,
        },
      };
    case 'ADD_CHAT':
      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            userId: action.userId,
            userName: action.userName,
            profileImageSrc: action.profileImageSrc,
            message: action.message,
            sendDate: action.sendDate,
          },
        ],
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);
