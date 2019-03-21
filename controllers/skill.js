const Skill =  require('../models/Skill');
const skillController = {};

skillController.findAll = (req, res) => {
  Skill.findAll()
  .then(skills => {
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

skillController.findById = (req, res) => {
  Skill.findById(req.params.id)
  .then(skill => {
    res.json({
      message: "Success",
      data: skill
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({err});
  });
};

module.exports = skillController;
