const Skill = require('../models/skill');

const skillCtrl = {};

skillCtrl.findAll = (req, res) => {
  Skill.findAll().then(sills => {
    res.json({
      message: 'Success',
      data: skills
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({err});
  });
};

skillCtrl.findById = (req, res) => {
  Skill.findById().then(sills => {
    res.json({
      message: 'Success',
      data: skills
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({err});
  });
};

module.exports = skillCtrl;
