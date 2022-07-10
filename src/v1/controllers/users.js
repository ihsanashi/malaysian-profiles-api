const userService = require('../services/users');

const getAllUsers = (req, res) => {
  const allUsers = userService.getAllUsers();
  res.send('Get all users');
};

module.exports = {
  getAllUsers,
};
