import { INIT_REPLY_STATE } from '../../constants';

const REPLY = 'REPLY';
const REPLY_OFF = 'REPLY_OFF';

const reply = (state = INIT_REPLY_STATE, action) => {
  switch (action.type) {
    case REPLY:
      return {
        ...state,
        onReply: true,
        content: action.content,
        userName: action.userName,
      };
    case REPLY_OFF:
      return {
        ...state,
        onReply: false,
      };
    default:
      return state;
  }
};
export default reply;
