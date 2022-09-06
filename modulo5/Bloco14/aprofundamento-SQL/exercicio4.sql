-- Exercício 04
USE `Hopper-4314121-natalia-amaral`;

ALTER TABLE ProjetosLbn ADD description VARCHAR(150);

DESCRIBE ProjetosLbn;

UPDATE ProjetosLbn SET description="Projeto de sistema em nuvem da Labenu." WHERE id = "001";
UPDATE ProjetosLbn SET description="Projeto de sistema de gerenciamento de músicas da Labenu." WHERE id = "002";
UPDATE ProjetosLbn SET description="Projeto de rede de comunicação da Labenu." WHERE id = "003";
SELECT * FROM ProjetosLbn;

