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
--Paladin
(DEFAULT, 'Fast Blade', 'Melee', 'Physical Attack', 'Combo starter', NULL, NULL),
(DEFAULT, 'Riot Blade', 'Melee', 'Physical Attack', 'Combo continuation', NULL, NULL),
(DEFAULT, 'Royal Authority', 'Melee', 'Physical Attack', 'Combo finisher', NULL, NULL),
(DEFAULT, 'Goring Blade', 'Melee', 'Physical DoT', 'Combo finisher', NULL, NULL),
(DEFAULT, 'Total Eclipse', 'Melee AoE', 'Physical Attack', 'Combo starter', NULL, NULL),
(DEFAULT, 'Prominence', 'Melee AoE', 'Physical Attack', 'Combo finisher', NULL, NULL),
(DEFAULT, 'Fight of Flight', 'Damage Increase', 'Buff', '25% damage increase', NULL, NULL),
(DEFAULT, 'Sheltron', 'Damage Mitigation', 'Buff', '6-second all-block', NULL, NULL),
--Warrior
(DEFAULT, 'Heavy Swing', 'Melee', 'Physical Attack', 'Combo starter', NULL, NULL),
(DEFAULT, 'Maim', 'Melee', 'Physical Attack', 'Combo continuation', NULL, NULL),
(DEFAULT, 'Storms Path', 'Melee', 'Physical Attack', 'Combo fininsher', NULL, NULL),
(DEFAULT, 'Storms Eye', 'Melee', 'Physical Attack', 'Combo finisher', NULL, NULL),
(DEFAULT, 'Overpower', 'Melee AoE', 'Physical Attack', 'Combo starter', NULL, NULL),
(DEFAULT, 'Mythril Tempest', 'Melee AoE', 'Physical Attack', 'Combo finisher', NULL, NULL),
(DEFAULT, 'Berserk', 'Damage Increase', 'Buff', 'All attacks critically hit', NULL, NULL),
(DEFAULT, 'Thrill of Battle', 'Damage Mitigation', 'Buff', '20% HP increase and heal', NULL, NULL),
--Dark Knight
(DEFAULT, 'Hard Slash', 'Melee', 'Physical Attack', 'Combo starter', NULL, NULL),
(DEFAULT, 'Syphon Strike', 'Melee', 'Physical Attack', 'Combo continuation', NULL, NULL),
(DEFAULT, 'Souleater', 'Melee', 'Physical Attack', 'Combo finisher', NULL, NULL);