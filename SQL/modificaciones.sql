ALTER TABLE `ginelife`.`antecedentespersonalestraumaticos` 
ADD COLUMN `YYYY` VARCHAR(5) NOT NULL AFTER `Descripcion`,
ADD COLUMN `idHistoriaClinica` INT NOT NULL AFTER `YYYY`;
use ginelife;
ALTER TABLE antecedentespersonalestraumaticos
ADD FOREIGN KEY (idHistoriaClinica) REFERENCES HistoriaClinica(idHistoriaClinica);
