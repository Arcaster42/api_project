--Create DB
CREATE DATABASE api_project;

--Create users table
CREATE TABLE users (
    username VARCHAR PRIMARY KEY,
    email VARCHAR NOT NULL,
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
    author VARCHAR REFERENCES users(username),
    topic VARCHAR REFERENCES topics(topic),
    title VARCHAR NOT NULL,
    content TEXT NOT NULL,
    date_stamp VARCHAR,
    time_stamp VARCHAR
);

--Create replies table
CREATE TABLE replies (
    id SERIAL PRIMARY KEY,
    parent INTEGER REFERENCES posts(id),
    author VARCHAR REFERENCES users(username),
    content TEXT NOT NULL,
    date_stamp VARCHAR,
    time_stamp VARCHAR
);