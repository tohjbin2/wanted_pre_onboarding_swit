import { INITIAL_MESSAGE } from '../../constants';

const messenger = (state = INITIAL_MESSAGE, action) => {
  switch (action.type) {
    case 'ADD_CHAT':
      return [
        ...state,
        {
          userId: action.userId,
          userName: action.userName,
          profileImageSrc: action.profileImageSrc,
          sendDate: action.sendDate,
          message: action.message,
        },
      ];
    case 'DELETE_CHAT':
      return state.filter(chat => chat.message !== action.message);
    default:
      return state;
  }
};

export default messenger;
