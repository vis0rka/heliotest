const userReducer = (
  state = {
    isLogdin: false,
    isError: false,
    username: '',
    errMessage: '',
    regSucces: false,
  },
  action
) => {
  switch (action.type) {
    case 'REGISTER_FAILED': {
      console.log(action);
      return {
        ...state, 
        isError: true,
        errMessage: action.payload,
        regSucces: false,
      }
    }
    case 'LOGIN_FAILED': {
      console.log(action);
      return {
        ...state, 
        isError: true,
        errMessage: action.payload,
      }
    }
    case 'USER_REG_SUCCEEDED': {
      return {
        ...state,
        isError: false, 
        regSucces: true, 
        username: action.payload.username,
      }
    }
    case 'USER_LOGIN_SUCCEEDED': {
      return {
        ...state,
        isError: false, 
        isLogdin: true, 
        username: action.payload.username,
      }
    }
    default:
      return state
  }
}

export default userReducer;