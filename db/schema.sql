DROP DATABASE IF EXISTS snacks_dev;

CREATE DATABASE snacks_dev;

\c snacks_dev;

CREATE TABLE snacks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    url TEXT,
    category TEXT,
    is_favorite BOOLEAN
);

