import {createNewData} from "../controllers/MainController";
const { body } = require('express-validator');
const express = require('express')

const router = express.Router();

router.post('',
  body('name')
    .escape()
    .notEmpty()
    .withMessage('Name required')
    .isLength({min: 3,max:255})
    .withMessage('Name must be between 3 and 255 characters')
    .matches(/^[A-Za-z .,'!&]+$/)
    .withMessage('Name must be alphabetical characters only'),
  body('email').isEmail().normalizeEmail(),
  createNewData);

export default router;
