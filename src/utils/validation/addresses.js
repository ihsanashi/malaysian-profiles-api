const { body } = require('express-validator');

const addressValidation = [
  body('address1')
    .trim()
    .isLength({ min: 5 })
    .withMessage('address1 field must contain at least 5 characters')
    .isLength({ max: 255 })
    .withMessage('address1 field cannot be more than 255 characters long')
    .notEmpty()
    .withMessage('address1 field is required'),
  body('address2')
    .trim()
    .optional({ nullable: true, checkFalsy: true })
    .isLength({ max: 255 })
    .withMessage('address2 field cannot be more than 255 characters long'),
  body('city')
    .trim()
    .isLength({ min: 3 })
    .withMessage('city field must contain at least 3 characters')
    .isLength({ max: 100 })
    .withMessage('city field cannot be more than 100 characters long')
    .notEmpty()
    .withMessage('city field is required'),
  body('state')
    .trim()
    .isLength({ min: 3 })
    .withMessage('state field must contain at least 3 characters')
    .isLength({ max: 100 })
    .withMessage('state field cannot be more than 100 characters long')
    .notEmpty()
    .withMessage('state field is required'),
  body('zip')
    .trim()
    .isLength({ min: 2 })
    .withMessage('zip field must contain at least 2 characters')
    .isLength({ max: 20 })
    .withMessage('zip field cannot be more than 20 characters long')
    .notEmpty()
    .withMessage('zip field is required'),
  body('country')
    .trim()
    .isLength({ min: 3 })
    .withMessage('country field must contain at least 3 characters')
    .isLength({ max: 100 })
    .withMessage('country field cannot be more than 100 characters long')
    .notEmpty()
    .withMessage('country field is required'),
];

module.exports = addressValidation;
