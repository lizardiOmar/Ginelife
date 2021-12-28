ALTER TABLE `ginelife`.`antecedentespersonalestraumaticos` 
ADD COLUMN `YYYY` VARCHAR(5) NOT NULL AFTER `Descripcion`,
ADD COLUMN `idHhistoriaClinica` INT NOT NULL AFTER `YYYY`;
