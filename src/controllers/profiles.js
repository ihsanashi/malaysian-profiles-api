const pool = require('../models/index');
const { validationResult } = require('express-validator');

const getAllProfiles = async (req, res) => {
  try {
    const profileRecords = await pool.query(
      'SELECT * FROM profiles ORDER BY profiles.created_at;'
    );

    const profileIds = [];

    profileRecords.rows.forEach((profile) => {
      profileIds.push(profile.id);
    });

    const addressesRecords = await pool.query(
      'SELECT * FROM addresses WHERE profile_id = ANY ($1);',
      [profileIds]
    );

    const profiles = [];

    profileRecords.rows.forEach((profile) => {
      const addresses = addressesRecords.rows.filter(
        (address) => address.profile_id === profile.id
      );

      profile.addresses = addresses;
      profiles.push(profile);
    });

    res.status(200).send(profiles);
  } catch (err) {
    console.error(err.message);
  }
};

const getProfile = async (req, res) => {
  try {
    const { profile_id } = req.params;
    const profileRecord = await pool.query(
      'SELECT * FROM profiles WHERE id = $1;',
      [profile_id]
    );

    const addressRecords = await pool.query(
      'SELECT * FROM addresses WHERE profile_id = $1;',
      [profile_id]
    );

    const profile = profileRecord.rows[0];

    if (profileRecord.rows.length === 0 && addressRecords.rows.length === 0) {
      res.status(404).json({ message: 'The requested resource was not found' });
    } else {
      profile.addresses = addressRecords.rows;
      res.status(200).json(profile);
    }
  } catch (err) {
    console.error(err.message);
  }
};

const createProfile = async (req, res) => {
  try {
    const { first_name, last_name, email, birthdate, gender, is_deletable } =
      req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const profile = await pool.query(
      'INSERT INTO profiles (first_name, last_name, email, birthdate, gender, is_deletable) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;',
      [first_name, last_name, email, birthdate, gender, is_deletable]
    );

    res.status(201).json(profile.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

const updateProfile = async (req, res) => {
  try {
    const { profile_id } = req.params;
    const { first_name, last_name, email, birthdate, gender, is_deletable } =
      req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const updateProfile = await pool.query(
      'UPDATE profiles SET first_name = $2, last_name = $3, email = $4, birthdate = $5, gender = $6, is_deletable = $7, updated_at = CURRENT_TIMESTAMP WHERE id = $1 RETURNING *;',
      [
        profile_id,
        first_name,
        last_name,
        email,
        birthdate,
        gender,
        is_deletable,
      ]
    );

    res.status(200).json(updateProfile.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

const deleteProfile = async (req, res) => {
  try {
    const { profile_id } = req.params;

    const deleteProfile = await pool.query(
      'DELETE FROM profiles WHERE id = $1 RETURNING *;',
      [profile_id]
    );

    res.status(204).send();
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
