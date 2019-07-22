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
    roletype VARCHAR REFERENCES roles(id),
    info TEXT
);

--Create skills table
CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    info TEXT,
    icon TEXT,
    job VARCHAR REFERENCES jobs(id)
);