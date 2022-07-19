const express = require('express');
const router = express.Router();

const profileValidation = require('../utils/validation/profiles');

const {
  getAllProfiles,
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile,
} = require('../controllers/profiles');

const {
  getAllAddresses,
  getAddress,
  createAddress,
  updateAddress,
  deleteAddress,
} = require('../controllers/addresses');

router.get('/', getAllProfiles);
router.get('/:profile_id', getProfile);
router.post('/', profileValidation, createProfile);
router.put('/:profile_id', profileValidation, updateProfile);
router.delete('/:profile_id', deleteProfile);

router.get('/:profile_id/addresses', getAllAddresses);
router.get('/:profile_id/addresses/:address_id', getAddress);
router.post('/:profile_id/addresses', createAddress);
router.put('/:profile_id/addresses/:address_id', updateAddress);
router.delete('/:profile_id/addresses/:address_id', deleteAddress);

module.exports = router;
