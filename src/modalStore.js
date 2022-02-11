const SHOW_MODAL = 'SHOW_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

export const isShowingModal = element => {
  return {
    type: SHOW_MODAL,
    payload: element,
  };
};
export const isClosingModal = element => {
  return {
    type: CLOSE_MODAL,
    payload: element,
  };
};
const INIT_STATE = false;
export default function modalReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return { payload: true };
    case CLOSE_MODAL:
      return { payload: false };
    default:
      return state;
  }
}
