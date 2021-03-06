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
      return {
        ...state, 
        isError: true,
        errMessage: action.payload,
        regSucces: false,
      }
    }
    case 'LOGIN_FAILED': {
      return {
        ...state, 
        isError: true,
        isLogdin: false,
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
    case 'USER_ERROR_MESSAGE_CLEAR': {
      return {
        ...state,
        isError: false, 
        iserrMessage: '', 
      }
    }
    case 'USER_LOGOUT': {
      return {
        ...state,
        isLogdin: false,
        isError: false,
        username: '',
        iserrMessage: '', 
        
      }
    }
    default:
      return state
  }
}

export default userReducer;
