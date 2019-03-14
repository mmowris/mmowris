// routes/skills-routes.js

const express = require('express');
const skillRouter = express.Router();
const skillCtrl = require('../controllers/skill')

skillRouter.get('/', skillCtrl.findAll);

skillRouter.get('/:id', skillCtrl.findById);

module.exports = skillRouter;
