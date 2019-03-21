const express = require('express');
const skillRouter = express.Router();
const skillController = require('../controllers/skill')

skillRouter.get('/', skillController.findAll);

skillRouter.get('/:id', skillController.findById);

module.exports = skillRouter;
