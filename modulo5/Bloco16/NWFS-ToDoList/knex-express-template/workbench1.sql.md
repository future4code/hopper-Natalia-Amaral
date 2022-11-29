Use `Hopper-4314121-natalia-amaral`;

CREATE TABLE ToDoListTask ( 
id VARCHAR(255) PRIMARY KEY, 
title VARCHAR (30) NOT NULL, 
description TEXT NOT NULL, 
creatorUserNickname VARCHAR(30) NOT NULL 
);

INSERT INTO ToDoListTask (id, title, description, limit_date, creator_user_id)
VALUES (
"003", 
"Criar banco de alunos",
"Devemos criar o banco dos alunos para o módulo do backend",
STR_TO_DATE (
"04/05/2023",
"001"
);

SELECT * FROM ToDoListTask
WHERE id = id;


SELECT nickname From ToDoListUsers
WHERE id = id