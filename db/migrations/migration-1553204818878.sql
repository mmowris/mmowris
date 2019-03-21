-- db/migrations/migration-1553204179372.sql

DROP TABLE IF EXISTS experiences;

CREATE TABLE IF NOT EXISTS experiences (
  id BIGSERIAL PRIMARY KEY,
  place_id INTEGER REFERENCES places(id),
  description TEXT
)
