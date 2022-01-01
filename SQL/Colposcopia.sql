CREATE TABLE `ginelife`.`colposcopia` (
  `idcolposcopia` INT NOT NULL AUTO_INCREMENT,
  `DD` VARCHAR(2) NOT NULL,
  `MM` VARCHAR(2) NOT NULL,
  `YYYY` VARCHAR(4) NOT NULL,
  `idPaciente` INT NOT NULL,
  PRIMARY KEY (`idcolposcopia`));
ALTER TABLE colposcopia
ADD FOREIGN KEY (idPaciente) REFERENCES pacientes(idPacientes);
CREATE TABLE `ginelife`.`imagenescolposcopia` (
  `idimagenesColposcopia` INT NOT NULL AUTO_INCREMENT,
  `imagen_1` MEDIUMBLOB NOT NULL,
  `imagen_2` MEDIUMBLOB NOT NULL,
  `imagen_3` MEDIUMBLOB NOT NULL,
  `imagen_4` MEDIUMBLOB NOT NULL,
  `idColposcopia` INT NOT NULL,
  PRIMARY KEY (`idimagenesColposcopia`));
ALTER TABLE imagenescolposcopia
ADD FOREIGN KEY (idColposcopia) REFERENCES colposcopia(idColposcopia);
