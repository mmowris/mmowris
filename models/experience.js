const db = require('../db/config');
const Experience = {};

Experience.findAll = () => {
  return db.query(
    `SELECT * FROM experiences`
  );
};

Experience.findById = (id) => {
  return db.oneOrNone(
    `
      SELECT * FROM experiences
      WHERE id = $1
    `,
    [id]
  );
};

module.exports = Experience;
