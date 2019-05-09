export const sendUserRegister = (username, password) => ({
  type: "USER_REG_REQUESTED",
  payload: {
    username,
    password
  }
});