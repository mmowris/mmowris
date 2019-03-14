-- db/migrations/migration-1552512021992.sql

DROP TABLE IF EXISTS skills;

CREATE TABLE IF NOT EXISTS skills (
  id BIGSERIAL PRIMARY KEY,
  skill TEXT,
  level int
);
