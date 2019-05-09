require('dotenv').config();
const userService = require('../services/user.services');

const registerUser = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    if (!username && !password) {
      res.status(400).json({
        status: 'error',
        message: 'Missing parameters: username, password!',
      });
    } else if (!password) {
      res.status(400).json({
        status: 'error',
        message: 'Missing parameter: password!',
      });
    } else if (!username) {
      res.status(400).json({
        status: 'error',
        message: 'Missing parameter: username!',
      });
    }
  } else {
    userService.postUser(username, password)
      .then((users) => res.status(200).json({
        userId: users._id,
        username: users.username 
      }))
      .catch((error) => {
        if (error.code === 11000) {
          res.status(409).json({
            status: 'error',
            error: 'Taken username, choose another one',
          });
        } else {
          res.status(500).json(error);
        }
      });
  }
};

module.exports = {
  registerUser,
};

