const pool = require('../models/index');

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await pool.query('SELECT * from users');
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query('SELECT * FROM users WHERE id = $1', [id]);

    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

const createUser = async (req, res) => {
  try {
    const { email } = req.body;
    const newUser = await pool.query(
      'INSERT INTO users (email) VALUES($1) RETURNING *',
      [email]
    );

    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const { email } = req.body;
    const { id } = req.params;

    const updateUser = await pool.query(
      'UPDATE users SET email = $1 WHERE id = $2',
      [email, id]
    );

    res.json({ msg: 'User was updated' });
  } catch (err) {
    console.error(err.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query('DELETE FROM users WHERE id = $1', [
      id,
    ]);

    res.json({ msg: `User id ${id} was deleted` });
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
