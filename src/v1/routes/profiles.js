const express = require('express');
const profileController = require('../controllers/profiles');

const router = express.Router();

router.get('/', profileController.getAllProfiles);

router.get('/:profile_id', profileController.getSingleProfile);

router.post('/', profileController.createNewProfile);

router.patch('/:profile_id', profileController.updateOneProfile);

router.delete('/:profile_id', profileController.deleteOneProfile);

module.exports = router;
