# MVP API Implementation Using Knex & Postgres

This project was done as part of the curriculum for Code Chrysalis cohort 9 located in Tokyo, Japan. This is a REST API implementation in conjunction with a messaging board system that utilizes basic registration and login functionality.

## Features
* Knex and Postgres integration (includes migration and seeding files)
* Account registration with password hashing and login verification
* Automatic API-key assignment
* Basic admin privilege functionality via API key
* Message board with posts, replies tracking relevant information
* API with get, post, put, and delete functionality (details below)

## API


All endpoints require an array of a single object containing the listed properties. Any GET method actions will not require an API key in the query, but other methods will require a listed API key to function. Any edits or deletes will require an API key that matches the author of the content to be edited or deleted.

Details are available on the root page.