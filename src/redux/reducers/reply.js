const REPLY = 'REPLY';
const REPLY_OFF = 'REPLY_OFF';

const INIT_STATE = {
  onReply: false,
};

const reply = (state = INIT_STATE, action) => {
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
