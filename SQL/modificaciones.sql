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
CREATE TABLE `ginelife`.`estudios_lab` (
  `idestudios_lab` INT NOT NULL AUTO_INCREMENT,
  `grupoSanguineo` VARCHAR(45) NOT NULL,
  `RH` VARCHAR(45) NOT NULL,
  `hemoglobina` VARCHAR(45) NOT NULL,
  `Hematocrito` VARCHAR(45) NOT NULL,
  `Leucocitos` VARCHAR(45) NOT NULL,
  `Plaquetas` VARCHAR(45) NOT NULL,
  `TP` VARCHAR(45) NOT NULL,
  `TPT` VARCHAR(45) NOT NULL,
  `Glucosa` VARCHAR(45) NOT NULL,
  `VDRL` VARCHAR(45) NOT NULL,
  `HIV` VARCHAR(45) NOT NULL,
  `idHistoriaClinica` INT NOT NULL,
  PRIMARY KEY (`idestudios_lab`));
ALTER TABLE estudios_lab
ADD FOREIGN KEY (idHistoriaClinica) REFERENCES historiaclinica(idHistoriaClinica);
CREATE TABLE `ginelife`.`plan` (
  `idplan` INT NOT NULL AUTO_INCREMENT,
  `planManejo` TEXT NOT NULL,
  `pronostico` TEXT NOT NULL,
  `idHistoriaClinica` INT NOT NULL,
  PRIMARY KEY (`idplan`));
ALTER TABLE plan
ADD FOREIGN KEY (idHistoriaClinica) REFERENCES historiaclinica(idHistoriaClinica);
CREATE TABLE `ginelife`.`abdomen_o` (
  `idabdomen_o` INT NOT NULL AUTO_INCREMENT,
  `abdomenGloboso` BIT NOT NULL,
  `fondoUterino` VARCHAR(45) NOT NULL,
  `uteroOcupado` BIT NOT NULL,
  `unicoMultiple` BIT NOT NULL,
  `numero` INT NOT NULL,
  `vivo` BIT NOT NULL,
  `longitudinal` BIT NOT NULL,
  `transverso` BIT NOT NULL,
  `otro` VARCHAR(45) NOT NULL,
  `cefalico` BIT NOT NULL,
  `pelvico` BIT NOT NULL,
  `presentacionOtro` VARCHAR(45) NOT NULL,
  `dorsoIZQ` BIT NOT NULL,
  `dorsoDER` BIT NOT NULL,
  `FCF` VARCHAR(45) NOT NULL,
  `ritmo` VARCHAR(45) NOT NULL,
  `normal` BIT NOT NULL,
  `anormal` BIT NOT NULL,
  `especifique` VARCHAR(45) NOT NULL,
  `idHistoriaClinica` INT NOT NULL,
  PRIMARY KEY (`idabdomen_o`));
  ALTER TABLE abdomen_o
ADD FOREIGN KEY (idHistoriaClinica) REFERENCES historiaclinica(idHistoriaClinica);
CREATE TABLE `ginelife`.`utero_o` (
  `idutero_o` INT NOT NULL AUTO_INCREMENT,
  `actividad` BIT NOT NULL,
  `contraccionEsesporadicas` BIT NOT NULL,
  `contraccionesIrregulares` BIT NOT NULL,
  `frecuenciaContracciones` VARCHAR(45) NOT NULL,
  `intensidad` VARCHAR(45) NOT NULL,
  `hipertonia` BIT NOT NULL,
  `idHistoriaClinica` INT NULL,
  PRIMARY KEY (`idutero_o`));
ALTER TABLE utero_o
ADD FOREIGN KEY (idHistoriaClinica) REFERENCES historiaclinica(idHistoriaClinica);
ALTER TABLE `ginelife`.`utero_o` 
CHANGE COLUMN `idHistoriaClinica` `idHistoriaClinica` INT(11) NOT NULL ;
CREATE TABLE `ginelife`.`vaginal_o` (
  `idvaginal_o` INT NOT NULL AUTO_INCREMENT,
  `tacto` BIT NOT NULL,
  `dilatacion` VARCHAR(45) NOT NULL,
  `borramiento` VARCHAR(45) NOT NULL,
  `anterior` BIT NOT NULL,
  `central` BIT NOT NULL,
  `posterior` BIT NOT NULL,
  `constDura` BIT NOT NULL,
  `blanda` BIT NOT NULL,
  `idHistoriaClinica` INT NOT NULL,
  PRIMARY KEY (`idvaginal_o`));
ALTER TABLE vaginal_o
ADD FOREIGN KEY (idHistoriaClinica) REFERENCES historiaclinica(idHistoriaClinica);
CREATE TABLE `ginelife`.`alturapresentacion` (
  `idalturaPresentacion` INT NOT NULL AUTO_INCREMENT,
  `I` VARCHAR(45) NOT NULL,
  `II` VARCHAR(45) NOT NULL,
  `III` VARCHAR(45) NOT NULL,
  `aminosIntegro` BIT NOT NULL,
  `roto` BIT NOT NULL,
  `DD` VARCHAR(5) NOT NULL,
  `MM` VARCHAR(5) NOT NULL,
  `YYYY` VARCHAR(5) NOT NULL,
  `idHistoriaClinica` INT NOT NULL,
  PRIMARY KEY (`idalturaPresentacion`));
ALTER TABLE alturapresentacion
ADD FOREIGN KEY (idHistoriaClinica) REFERENCES historiaclinica(idHistoriaClinica);
