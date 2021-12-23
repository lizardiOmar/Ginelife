CREATE TABLE `historiaclinica` (
  `idHistoriaClinica` int(11) NOT NULL,
  `DD` varchar(2) NOT NULL,
  `MM` varchar(2) NOT NULL,
  `YYYY` varchar(4) NOT NULL,
  `Hora` varchar(5) NOT NULL,
  `idPaciente` int(11) NOT NULL,
  PRIMARY KEY (`idHistoriaClinica`));
ALTER TABLE historiaclinica
ADD FOREIGN KEY (idPaciente) REFERENCES pacientes(idPacientes);
ALTER TABLE `ginelife`.`historiaclinica` 
CHANGE COLUMN `idHistoriaClinica` `idHistoriaClinica` INT(11) NOT NULL AUTO_INCREMENT ;
/*ANTECEDENTES HEREDO-FAMILIARES*/
CREATE TABLE `ginelife`.`antecedentesheredofamiliares` (
  `idAntecedentesHeredoFamiliares` INT NOT NULL AUTO_INCREMENT,
  `Diabetes` BIT NOT NULL,
  `Cardiopatias` BIT NOT NULL,
  `HTA` BIT NOT NULL,
  `Tiroides` BIT NOT NULL,
  `Neoplasticos` BIT NOT NULL,
  `Especificaciones` TEXT NOT NULL,
  `idHistoriaClinica` INT NOT NULL,
  PRIMARY KEY (`idAntecedentesHeredoFamiliares`));
ALTER TABLE antecedentesheredofamiliares
ADD FOREIGN KEY (idHistoriaClinica) REFERENCES historiaClinica(idHistoriaClinica);
/*ANTECEDENTES PERSONALES-PATOLOGICOS*/
CREATE TABLE `ginelife`.`antecedentespersonalespatologicos` (
  `idAntecedentesPersonalesPatologicos` INT NOT NULL AUTO_INCREMENT,
  `Diabetes` BIT NOT NULL,
  `Cardiopatias` BIT NOT NULL,
  `HTA` BIT NOT NULL,
  `Epilepsia` BIT NOT NULL,
  `Nefropatias` BIT NOT NULL,
  `idHistoriaClinica` INT NOT NULL,
  PRIMARY KEY (`idAntecedentesPersonalesPatologicos`));
ALTER TABLE antecedentespersonalespatologicos
ADD FOREIGN KEY (idHistoriaClinica) REFERENCES historiaClinica(idHistoriaClinica);
/*TRAUMATICOS*/
CREATE TABLE `ginelife`.`antecedentespersonalestraumaticos` (
  `idAntecedentesPersonalesTraumaticos` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NOT NULL,
  `Descripcion` TEXT NOT NULL,
  PRIMARY KEY (`idAntecedentesPersonalesTraumaticos`));
CREATE TABLE `ginelife`.`historiaclinicaantpertra` (
  `idHistoriaClinicaAntPerTra` INT NOT NULL AUTO_INCREMENT,
  `idHistoriaClinica` INT NOT NULL,
  `idAntecedentePersonalTraumatico` INT NOT NULL,
  `YYYY` VARCHAR(4) NOT NULL,
  PRIMARY KEY (`idHistoriaClinicaAntPerTra`));
ALTER TABLE historiaclinicaantpertra
ADD FOREIGN KEY (idHistoriaClinica) REFERENCES historiaClinica(idHistoriaClinica);
ALTER TABLE historiaclinicaantpertra
ADD FOREIGN KEY (idAntecedentePersonalTraumatico) REFERENCES antecedentespersonalestraumaticos(idantecedentespersonalestraumaticos);
/*QUIRURGICOS*/
CREATE TABLE `ginelife`.`antecedentespersonalesquirurgicos` (
  `idAntecedentesPersonalesQuirurgicos` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(90) NOT NULL,
  PRIMARY KEY (`idAntecedentesPersonalesQuirurgicos`));
CREATE TABLE `ginelife`.`historiaclinicaantperqui` (
  `idHistoriaClinicaAntPerQui` INT NOT NULL AUTO_INCREMENT,
  `idHistoriaClinica` INT NOT NULL,
  `idAntecedentePersonalQuirurgico` INT NOT NULL,
  `YYYY` VARCHAR(4) NOT NULL,
  PRIMARY KEY (`idHistoriaClinicaAntPerQui`));
ALTER TABLE historiaclinicaantperqui
ADD FOREIGN KEY (idAntecedentePersonalQuirurgico) REFERENCES antecedentespersonalesquirurgicos(idantecedentespersonalesquirurgicos);
ALTER TABLE historiaclinicaantperqui
ADD FOREIGN KEY (idHistoriaClinica) REFERENCES HistoriaClinica(idHistoriaClinica);
/*Antecedentes personales no patológicos */
/*Adicciones*/
CREATE TABLE `ginelife`.`adicciones` (
  `idAdicciones` INT NOT NULL AUTO_INCREMENT,
  `Tabaquismo` BIT NOT NULL,
  `Alcoholismo` BIT NOT NULL,
  `Drogas` BIT NOT NULL,
  `idHistoriaClinica` INT NOT NULL,
  PRIMARY KEY (`idAdicciones`));
ALTER TABLE adicciones
ADD FOREIGN KEY (idHistoriaClinica) REFERENCES HistoriaClinica(idHistoriaClinica);
/*Inmunizaciones*/
CREATE TABLE `ginelife`.`inmunizaciones` (
  `idInmunizaciones` INT NOT NULL AUTO_INCREMENT,
  `Rubeola` BIT NOT NULL,
  `Influenza` BIT NOT NULL,
  `Antitetanica` BIT NOT NULL,
  `Covid19` BIT NOT NULL,
  `idHistoriaClinica` INT NOT NULL,
  PRIMARY KEY (`idInmunizaciones`));
ALTER TABLE inmunizaciones
ADD FOREIGN KEY (idHistoriaClinica) REFERENCES HistoriaClinica(idHistoriaClinica);
/*Antecedentes ginecológicos y obstétricos */
CREATE TABLE `ginelife`.`antecedentesginecologicosobstetricos` (
  `idAntecedentesGinecologicosObstetricos` INT NOT NULL AUTO_INCREMENT,
  `Menarca` VARCHAR(15) NOT NULL,
  `Ritmo` VARCHAR(15) NOT NULL,
  `IVS` VARCHAR(15) NOT NULL,
  `NoCompSex` VARCHAR(5) NOT NULL,
  `G` VARCHAR(15) NOT NULL,
  `P` VARCHAR(15) NOT NULL,
  `A` VARCHAR(15) NOT NULL,
  `C` VARCHAR(15) NOT NULL,
  `Ectopico` VARCHAR(45) NOT NULL,
  `Molar` VARCHAR(45) NOT NULL,
  `FUP` VARCHAR(45) NOT NULL,
  `FUM` VARCHAR(45) NOT NULL,
  `FPP` VARCHAR(45) NOT NULL,
  `idHistoriaClinica` INT NOT NULL,
  PRIMARY KEY (`idAntecedentesGinecologicosObstetricos`));
ALTER TABLE antecedentesginecologicosobstetricos
ADD FOREIGN KEY (idHistoriaClinica) REFERENCES HistoriaClinica(idHistoriaClinica);
