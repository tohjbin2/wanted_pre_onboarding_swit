const login = (state = {}, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        userId: action.userId,
        userName: action.userName,
        profileImageSrc: action.profileImageSrc,
      };
    default:
      return state;
  }
};

export default login;
