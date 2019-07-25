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
'Does anyone know how to set up an express server in node?', 
'2019-07-22', '8:25 AM'),
(DEFAULT, 'supercat7', 'HTML/CSS', 'CSS is Impossible',
'Why is CSS impossible? You need like five different lines of code 
just to center something. What a joke!', 
'2019-07-22', '9:45 PM'),
(DEFAULT, 'randomcoder9', 'Variables', 'Why Boolean?',
'Seriously, why is it called a boolean?', 
'2019-07-23', '7:32 AM');

--Insert replies
INSERT INTO replies
VALUES
(DEFAULT, 1, 'supercat7', 
'You just need to run npm install express and then require express and 
invoke the function! Or something like that. Google it.', 
'2019-07-23', '9:43 AM'),
(DEFAULT, 1, 'randomcoder9',
'Only horrible, terrible people even use npm. Use yarn you cretin.', 
'2019-07-23', '11:52 AM'),
(DEFAULT, 2, 'jsdev14',
'CSS was made by the CIA in an experiment to see how much punishment 
a single human would bring upon themself. Back-end for life!', 
'2019-07-24', '1:32 PM');