const User = require('../models/user');

const postUser = (username, password) => new Promise((fullfill, reject) => {
  const newUser = new User({
    username,
    password,
  });
  newUser.setPassword(password);
  newUser.save((error, users) => {
    if (error) {
      reject(error);
    } else {
      fullfill(users);
    }
  });
});


module.exports = {
  postUser,
};