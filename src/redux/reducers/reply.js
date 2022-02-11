const REPLY = 'REPLY';

const INIT_STATE = {
  onReply: false,
};

const reply = (state = INIT_STATE, action) => {
  switch (action.type) {
    case REPLY:
      return {
        ...state,
        onReply: true,
        selectData: state.find(el => el.id === action.id),
        content: state.content,
      };
    default:
      return state;
  }
};
export default reply;
