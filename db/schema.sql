DROP DATABASE IF EXISTS snacks_dev;

CREATE DATABASE snacks_dev;

\c snacks_dev;

CREATE TABLE snacks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(32) NOT NULL,
    category TEXT,
    url TEXT,
    sugar FLOAT,
    protein FLOAT,
    fiber FLOAT,
    is_vegan BOOLEAN,
    is_vegetarian BOOLEAN,
    is_glutenFree BOOLEAN,
    is_favorite BOOLEAN
);
