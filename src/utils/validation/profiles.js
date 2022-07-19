const { body } = require('express-validator');

const profileValidation = [
  body('first_name')
    .trim()
    .isLength({ min: 1 })
    .withMessage('First name is empty')
    .isLength({ min: 3 })
    .withMessage('First name must contain a minimum of 2 letters')
    .notEmpty()
    .withMessage('First name is required and must only contain letters'),
  body('last_name').trim(),
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .normalizeEmail(),
  body('birthdate').isDate({ format: 'YYYY-MM-DD' }),
  body('gender')
    .notEmpty()
    .withMessage('Gender is required')
    .isLength({ min: 4, max: 10 })
    .toLowerCase()
    .isIn(['male', 'female'])
    .withMessage("Either 'male' or 'female' only"),
  body('is_deletable').isBoolean({ loose: true }),
];

module.exports = profileValidation;
