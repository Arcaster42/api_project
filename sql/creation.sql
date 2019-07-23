--Create DB
CREATEDB api_project;

--Create users table
CREATE TABLE users (
    username VARCHAR PRIMARY KEY,
    email VARCHAR,
    pw_hash VARCHAR NOT NULL,
    api_key TEXT,
    can_put BOOLEAN,
    can_patch BOOLEAN,
    can_delete BOOLEAN
);

--Create roles table
CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    info TEXT
);

--Create jobs table
CREATE TABLE jobs (
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    roletype INTEGER REFERENCES roles(id),
    style VARCHAR,
    info TEXT
);

--Create skills table
CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    style VARCHAR,
    skilltype VARCHAR,
    info TEXT,
    icon TEXT,
    job INTEGER REFERENCES jobs(id)
);