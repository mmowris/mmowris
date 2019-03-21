const express = require('express');
const experienceRouter = express.Router();
const experienceController = require('../controllers/experience')

experienceRouter.get('/', experienceController.findAll);

experienceRouter.get('/:id', experienceController.findById);

module.exports = experienceRouter;
