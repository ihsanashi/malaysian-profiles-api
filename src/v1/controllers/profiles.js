const profileService = require('../services/profiles');

const getAllProfiles = (req, res) => {
  const allProfiles = profileService.getAllProfiles();
  res.send('Get all profiles');
};

const getSingleProfile = (req, res) => {
  const profile = profileService.getSingleProfile();
  res.send('Get single profile');
};

const createNewProfile = (req, res) => {
  const createProfile = profileService.createNewProfile();
  res.send('Create new profile');
};

const updateOneProfile = (req, res) => {
  const updateProfile = profileService.updateOneProfile();
  res.send('Update single profile');
};

const deleteOneProfile = (req, res) => {
  profileService.deleteOneProfile();
  res.send('Delete single profile');
};

module.exports = {
  getAllProfiles,
  getSingleProfile,
  createNewProfile,
  updateOneProfile,
  deleteOneProfile,
};
