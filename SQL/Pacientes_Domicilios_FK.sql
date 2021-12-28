/*DOMICILIO DE LAS PACIENTES*/
use ginelife;
CREATE TABLE `ginelife`.`domiciliopaciente` (
  `idDomicilioPaciente` INT NOT NULL,
  `Municipio` VARCHAR(55) NOT NULL,
  `Colonia` VARCHAR(55) NOT NULL,
  `Calle` VARCHAR(55) NOT NULL,
  `Numero` VARCHAR(5) NOT NULL,
  `CP` VARCHAR(10) NOT NULL,
  `idPaciente` INT NOT NULL,
  PRIMARY KEY (`idDomicilioPaciente`));
ALTER TABLE domicilioPaciente
ADD FOREIGN KEY (idPaciente) REFERENCES pacientes(idPacientes);
ALTER TABLE `ginelife`.`domiciliopaciente` 
CHANGE COLUMN `idDomicilioPaciente` `idDomicilioPaciente` INT(11) NOT NULL AUTO_INCREMENT ;
