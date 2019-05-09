export const sendUserRegister = (username, password) => ({
  type: "USER_REG_REQUESTED",
  payload: {
    username,
    password
  }
});

export const sendUserLogin = (username, password) => ({
  type: "USER_LOG_REQUESTED",
  payload: {
    username,
    password
  }
});

export const clearErrorMessage = () => ({
  type: 'USER_ERROR_MESSAGE_CLEAR'
})