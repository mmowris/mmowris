const Experience =  require('../models/Experience');
const experienceController = {};


experienceController.findAll = (req, res) => {
  Experience.findAll()
  .then(experiences => {
    res.json({
      message: 'Success',
      data: experiences
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({err});
  });
};

experienceController.findById = (req, res) => {
  Experience.findById(req.params.id)
  .then(experience => {
    res.json({
      message: "Success",
      data: experience
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({err});
  });
};

module.exports = experienceController;
