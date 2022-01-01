CREATE TABLE `ginelife`.`colposcopia` (
  `idcolposcopia` INT NOT NULL AUTO_INCREMENT,
  `DD` VARCHAR(2) NOT NULL,
  `MM` VARCHAR(2) NOT NULL,
  `YYYY` VARCHAR(4) NOT NULL,
  `idPaciente` INT NOT NULL,
  PRIMARY KEY (`idcolposcopia`));
ALTER TABLE colposcopia
ADD FOREIGN KEY (idPaciente) REFERENCES pacientes(idPacientes);
