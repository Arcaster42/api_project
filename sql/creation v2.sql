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

--Create topics table
CREATE TABLE topics (
    topic VARCHAR PRIMARY KEY
);

--Create posts table
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    author VARCHAR FOREIGN KEY REFERENCES users(username),
    topic VARCHAR FOREIGN KEY REFERENCES topics(topic),
    title VARCHAR,
    content TEXT,
    stamp DATE
);

--Create replies table
CREATE TABLE replies (
    id SERIAL PRIMARY KEY,
    parent INTEGER FOREIGN KEY REFERENCES posts(id),
    author VARCHAR FOREIGN KEY REFERENCES users(username),
    content TEXT,
    stamp DATE
);