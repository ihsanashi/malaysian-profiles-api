const pool = require('../models/index');

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await pool.query('SELECT * from users;');
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query('SELECT * FROM users WHERE id = $1;', [id]);

    if (user.rows.length === 0) {
      res
        .status(404)
        .json({ message: `The user with id ${id} does not exist` });
    } else {
      res.json(user.rows[0]);
    }
  } catch (err) {
    console.error(err.message);
  }
};

const createUser = async (req, res) => {
  try {
    const { email } = req.body;
    const newUser = await pool.query(
      'INSERT INTO users (email) VALUES($1) RETURNING *;',
      [email]
    );

    res.status(201).json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const { email } = req.body;
    const { id } = req.params;

    const updateUser = await pool.query(
      'UPDATE users SET email = $1 WHERE id = $2 RETURNING *;',
      [email, id]
    );

    res.status(200).json(updateUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query('DELETE FROM users WHERE id = $1;', [
      id,
    ]);

    res.json({ message: `User id ${id} was deleted` });
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
