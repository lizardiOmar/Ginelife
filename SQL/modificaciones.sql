ALTER TABLE `ginelife`.`antecedentespersonalestraumaticos` 
ADD COLUMN `YYYY` VARCHAR(5) NOT NULL AFTER `Descripcion`,
ADD COLUMN `idHistoriaClinica` INT NOT NULL AFTER `YYYY`;
use ginelife;
ALTER TABLE antecedentespersonalestraumaticos
ADD FOREIGN KEY (idHistoriaClinica) REFERENCES HistoriaClinica(idHistoriaClinica);
ALTER TABLE `ginelife`.`antecedentespersonalesquirurgicos` 
ADD COLUMN `Descripcion` TEXT NOT NULL AFTER `Nombre`,
ADD COLUMN `YYYY` VARCHAR(4) NOT NULL AFTER `Descripcion`,
ADD COLUMN `idHistoriaClinica` INT NOT NULL AFTER `YYYY`;
ALTER TABLE antecedentespersonalesquirurgicos
ADD FOREIGN KEY (idHistoriaClinica) REFERENCES HistoriaClinica(idHistoriaClinica);
