Use `Hopper-4314121-natalia-amaral`;

CREATE TABLE ToDoListUsers ( 
id VARCHAR(255) PRIMARY KEY, 
name VARCHAR (30) NOT NULL, 
nickname TEXT NOT NULL, 
email VARCHAR(30) NOT NULL 
);

INSERT INTO ToDoListUsers (id, name, nickname, email) 
VALUES( 
"001", 
"Astro Dev", 
"astrodev", 
"astro@dev.com" 
);

SELECT * FROM TodoListUsers
WHERE ID = id