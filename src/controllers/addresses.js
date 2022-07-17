const pool = require('../models/index');

const getAllAddresses = async (req, res) => {
  try {
    const { profile_id } = req.params;
    const addressesRecords = await pool.query(
      'SELECT * FROM addresses WHERE profile_id = $1;',
      [profile_id]
    );

    if (addressesRecords.rows.length === 0) {
      res.status(404).json({
        message: `No addresses found for profile with id ${profile_id}`,
      });
    } else {
      res.status(200).json(addressesRecords.rows);
    }
  } catch (err) {
    console.error(err.message);
  }
};

const getAddress = async (req, res) => {
  try {
    const { profile_id, address_id } = req.params;
    const address = await pool.query(
      'SELECT * FROM addresses where profile_id = $1 AND id = $2;',
      [profile_id, address_id]
    );

    if (address.rows.length === 0) {
      res.status(404).json({
        message: `No address found for id ${address_id} associated to profile with id ${profile_id}`,
      });
    } else {
      res.status(200).json(address.rows[0]);
    }
  } catch (err) {
    console.error(err.message);
  }
};

const createAddress = async (req, res) => {
  try {
    const { profile_id } = req.params;
    const { address1, address2, city, state, zip, country } = req.body;

    const address = await pool.query(
      'INSERT INTO addresses (profile_id, address1, address2, city, state, zip, country) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;',
      [profile_id, address1, address2, city, state, zip, country]
    );

    res.status(201).json(address.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

const updateAddress = async (req, res) => {
  try {
    const { address_id } = req.params;
    const { address1, address2, city, state, zip, country } = req.body;

    const updateAddress = await pool.query(
      'UPDATE addresses SET address1 = $2, address2 = $3, city = $4, state = $5, zip = $6, country = $7, updated_at = CURRENT_TIMESTAMP WHERE id = $1 RETURNING *;',
      [address_id, address1, address2, city, state, zip, country]
    );

    res.status(200).json(updateAddress.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

const deleteAddress = async (req, res) => {
  try {
    const { address_id } = req.params;

    const deleteAddress = await pool.query(
      'DELETE FROM addresses WHERE id = $1 RETURNING *;',
      [address_id]
    );

    res.status(204).send();
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getAllAddresses,
  getAddress,
  createAddress,
  updateAddress,
  deleteAddress,
};
