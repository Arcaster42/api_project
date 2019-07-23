--Insert role values
INSERT INTO roles
VALUES
(DEFAULT, 'Tank', 'Aggro control'),
(DEFAULT, 'Healer', 'Damage mitigation'),
(DEFAULT, 'Damage', 'Damage output');

--Insert job values
INSERT INTO jobs
VALUES
(DEFAULT, 'Paladin', 1, 'Melee', 'Strong mitigation, self-healing, high utility'),
(DEFAULT, 'Warrior', 1, 'Melee', 'Strong mitigation, high damage'),
(DEFAULT, 'Dark Knight', 'Melee', 1, 'Highest mitigation, excellent weaving'),
(DEFAULT, 'Gunbreaker', 'Melee', 1, 'High utility, good weaving, good burst'),
(DEFAULT, 'White Mage', 'Ranged', 2, 'High single-target, good AoE, high damage'),
(DEFAULT, 'Scholar', 'Ranged', 2, 'Good utility, shielding, good weaving'),
(DEFAULT, 'Astrologian', 'Ranged', 2, 'Great utility, shielding or regen, good burst'),
(DEFAULT, 'Dragoon', 'Melee', 3, 'High damage, high mobility, good sustain'),
(DEFAULT, 'Monk', 'Melee', 3, 'Good damage, flexible combos, moderate sustain'),
(DEFAULT, 'Ninja', 'Melee', 3, 'High damage, lowest global cooldown, high sustain'),
(DEFAULT, 'Samurai', 'Melee', 3, 'Extreme damage, simple combos'),
(DEFAULT, 'Bard', 'Ranged', 3, 'High utility, high damage'),
(DEFAULT, 'Machinist', 'Ranged', 3, 'Revamped'),
(DEFAULT, 'Dancer', 'Ranged', 3, 'High damage, intuitive combos, dynamic combos'),
(DEFAULT, 'Black Mage', 'Ranged', 3, 'Extreme damage, low mobility, moderate sustain'),
(DEFAULT, 'Summoner', 'Ranged', 3, 'High damage, extreme burst, good utiltiy'),
(DEFAULT, 'Red Mage', 'Ranged', 3, 'High damage, intuitive combos, good utility');

--Insert skills
INSERT INTO skills
VALUES
(DEFAULT, 'Fast Blade', 'Melee', 'Physical Attack', 'Combo starter', NULL, NULL),
(DEFAULT, 'Riot Blade', 'Melee', 'Physical Attack', 'Combo continuation', NULL, NULL),
(DEFAULT, 'Royal Authority', 'Melee', 'Physical Attack', 'Combo finisher', NULL, NULL),
(DEFAULT, 'Total Eclipse', 'Melee AoE', 'Physical Attack', 'Combo starter', NULL, NULL),
(DEFAULT, 'Prominence', 'Melee AoE', 'Physical Attack', 'Combo finisher', NULL, NULL);
