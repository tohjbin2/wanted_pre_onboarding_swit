import { createStore } from 'redux';
import { INITIAL_MESSAGE } from './constants';

const ADD = 'ADD';
const DELETE = 'DELETE';

const addChat = text => {
  return {
    type: ADD,
    text,
  };
};

const deleteChat = id => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
};

const reducer = (state = INITIAL_MESSAGE, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: Date.now(),
          userName: '프론트엔드',
          userId: 'frontend123',
          profileImageSrc: '/images/profile-icon-2.jpg',
          sendDate: '2022-02-04 22:00:00',
          message: action.text,
        },
      ];
    case DELETE:
      return state.filter(chat => chat.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addChat,
  deleteChat,
};

export default store;
