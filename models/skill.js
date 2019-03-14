const db = require('../db/config');

const Skill = {};

Skill.findAll = () => {
  return db.query(
    `SELECT * FROM skills`
  );
};

Skill.findById = (id) => {
  return db.oneOrNone(
    `
      SELECT * FROM skills
      WHERE id = $1
    `,
    [id]
  );
};

module.exports = Skill;
