--Insert users
INSERT INTO users
VALUES
('jsdev14', 'jsdev14@gmail.com', 'na'),
('supercat7', 'supercat7@gmail.com', 'na'),
('randomcoder9', 'randomcoder9@gmail.com', 'na');

--Insert topics
INSERT INTO topics
VALUES
('Variables'),
('Functions'),
('HTML/CSS'),
('Node/Express');

--Insert posts
INSERT INTO posts
VALUES
(DEFAULT, 'jsdev14', 'Node/Express', 'Setting up Express',
'Does anyone know how to set up an express server in node?'),
(DEFAULT, 'supercat7', 'HTML/CSS', 'CSS is Impossible',
'Why is CSS impossible? You need like five different lines of code 
just to center something. What a joke!'),
(DEFAULT, 'randomcoder9', 'Variables', 'Why Boolean?',
'Seriously, why is it called a boolean?');

--Insert replies
INSERT INTO replies
VALUES
(DEFAULT, 1, 'supercat7', 
'You just need to run npm install express and then require express and 
invoke the function! Or something like that. Google it.', '2019-07-23'),
(DEFAULT, 1, 'randomcoder9',
'Only horrible, terrible people even use npm. Use yarn you cretin.', 
'2019-07-23');