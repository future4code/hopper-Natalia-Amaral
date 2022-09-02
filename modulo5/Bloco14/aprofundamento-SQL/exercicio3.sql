-- Exercício 03
USE `Hopper-4314121-natalia-amaral`;

ALTER TABLE ProjetosLbn DROP titulo;

DESCRIBE ProjetosLbn;

ALTER TABLE ProjetosLbn CHANGE date dates VARCHAR(40) NOT NULL;

/*Na tabela funcionarios o campo está definido como unique*/
DESCRIBE FuncionariosLbn;

