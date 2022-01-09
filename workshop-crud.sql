-- INSERT INTO `myTable` (`name`,`phone`,`email`,`country`,`currency`,`date`)
-- VALUES
--   ("Stacey Boyer","(232) 470-5887","dapibus.ligula.aliquam@outlook.edu","Brazil","$59.60","Dec 7, 2021"),
--   ("Kieran Weiss","(238) 319-7163","integer.aliquam@icloud.edu","Brazil","$9.31","Jan 16, 2021"),
--   ("Dalton Mckinney","(326) 207-8926","mauris.suspendisse@aol.edu","Italy","$97.90","Aug 17, 2021"),
--   ("Carolyn French","1-383-724-5382","donec.felis.orci@google.ca","Australia","$81.69","Aug 27, 2022"),
--   ("Dolan Pace","(276) 787-7878","donec.luctus@aol.com","Pakistan","$93.89","Dec 18, 2022");

-- SELECT * FROM myTable WHERE id = 5;
-- SELECT * FROM myTable WHERE country = 'Brazil';

SELECT * FROM myTable;

-- UPDATE myTable SET phone = '(123312) 111111' WHERE country='Brazil';

-- INSERT INTO myTable (name, phone, email, country, date) VALUES ('Mihail', '+371 123412312312', 'helloworld@inbox.lv', 'Spain', '1970-10-10');

-- currency varchar(255) DEFAULT '$0.0'

-- DELETE FROM myTable WHERE country='Spain';

-- SELECT name, email FROM myTable WHERE email LIKE '%gmail.com';

select count(*) from myTable where email like '%inbox.lv';