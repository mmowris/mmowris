-- db/migrations/migration-1553204179372.sql

DROP TABLE IF EXISTS places;

CREATE TABLE IF NOT EXISTS places (
  id BIGSERIAL PRIMARY KEY,
  started_at DATE,
  ended_at DATE,
  currently_at BOOLEAN DEFAULT FALSE,
  name TEXT,
  location TEXT,
  title TEXT
)
