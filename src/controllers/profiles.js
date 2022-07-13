const pool = require('../models/index');

const getAllProfiles = async (req, res) => {
  try {
    const allProfiles = await pool.query('SELECT * FROM profiles');
    res.json(allProfiles.rows);
  } catch (err) {
    console.error(err.message);
  }
};

const getProfile = async (req, res) => {
  try {
  } catch (err) {
    console.error(err.message);
  }
};

const createProfile = async (req, res) => {
  try {
  } catch (err) {
    console.error(err.message);
  }
};

const updateProfile = async (req, res) => {
  try {
  } catch (err) {
    console.error(err.message);
  }
};

const deleteProfile = async (req, res) => {
  try {
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getAllProfiles,
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile,
};
