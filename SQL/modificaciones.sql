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
CREATE TABLE `padecimientoactual` (
  `idpadecimientoActual` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` text NOT NULL,
  `idHojaClinica` int(11) NOT NULL,
  PRIMARY KEY (`idpadecimientoActual`)
);
ALTER TABLE `ginelife`.`padecimientoactual` 
CHANGE COLUMN `idHojaClinica` `idHistoriaClinica` INT(11) NOT NULL ;
ALTER TABLE padecimientoactual
ADD FOREIGN KEY (idHistoriaClinica) REFERENCES HistoriaClinica(idHistoriaClinica);
CREATE TABLE `ginelife`.`alergias` (
  `idalergias` INT NOT NULL AUTO_INCREMENT,
  `alergiaN` VARCHAR(45) NOT NULL,
  `idHistoriaClinica` INT NOT NULL,
  PRIMARY KEY (`idalergias`));
ALTER TABLE alergias
ADD FOREIGN KEY (idHistoriaClinica) REFERENCES HistoriaClinica(idHistoriaClinica);
CREATE TABLE `ginelife`.`exploraciong` (
  `idexploracionG` INT NOT NULL AUTO_INCREMENT,
  `consciente` BIT NOT NULL,
  `habitus` VARCHAR(45) NOT NULL,
  `peso` VARCHAR(15) NOT NULL,
  `estatura` VARCHAR(15) NOT NULL,
  `TA` VARCHAR(45) NOT NULL,
  `FC` VARCHAR(45) NOT NULL,
  `FR` VARCHAR(45) NOT NULL,
  `temperatura` VARCHAR(45) NOT NULL,
  `pulmonesB` BIT NOT NULL,
  `pulmonesT` VARCHAR(45) NOT NULL,
  `corazonB` BIT NOT NULL,
  `corazonT` VARCHAR(45) NOT NULL,
  `cabezaB` BIT NOT NULL,
  `cabezaT` VARCHAR(45) NOT NULL,
  `cuelloB` BIT NOT NULL,
  `cuelloT` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idexploracionG`));
  ALTER TABLE `ginelife`.`exploraciong` 
ADD COLUMN `idHistoriaClinica` INT NOT NULL AFTER `cuelloT`;
ALTER TABLE exploraciong
ADD FOREIGN KEY (idHistoriaClinica) REFERENCES historiaclinica(idHistoriaClinica);
