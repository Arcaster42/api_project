--Create DB
CREATEDB api_project;

--Create role table
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