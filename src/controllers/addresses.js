const pool = require('../models/index');

const getAllAddresses = async (req, res) => {
  try {
    const { profile_id } = req.params;
    const addressesRecords = await pool.query(
      'SELECT * FROM addresses WHERE profile_id = $1;',
      [profile_id]
    );

    if (addressesRecords.rows.length === 0) {
      res
        .status(404)
        .json({ message: `No addresses found for profile with id ${profile_id}` });
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
      res.status(404).json({ message: `No address found for id ${address_id} associated to profile with id ${profile_id}` });
    } else {
      res.status(200).json(address.rows[0]);
    }
  } catch (err) {
    console.error(err.message);
  }
};

const createAddress = async (req, res) => {
  try {
  } catch (err) {
    console.error(err.message);
  }
};

const updateAddress = async (req, res) => {
  try {
  } catch (err) {
    console.error(err.message);
  }
};

const deleteAddress = async (req, res) => {
  try {
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
