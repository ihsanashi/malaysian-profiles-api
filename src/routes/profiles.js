const express = require('express');
const router = express.Router();

const {
  getAllProfiles,
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile,
} = require('../controllers/profiles');

router.get('/', getAllProfiles);
router.get('/:id', getProfile);
router.post('/', createProfile);
router.put('/:id', updateProfile);
router.delete('/:id', deleteProfile);

module.exports = router;
