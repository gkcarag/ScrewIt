-- testing db and table creation
-- DROP DATABASE IF EXISTS screwit-db
-- CREATE DATABASE screwit-db

-- drops old test tables
DROP TABLE IF EXISTS USER_INFO;

-- create new test tables
CREATE TABLE USER_INFO(
    id SERIAL PRIMARY KEY,
    username VARCHAR(12) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    pword VARCHAR(255) NOT NULL
);