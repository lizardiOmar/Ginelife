CREATE DATABASE `ginelife`;

CREATE TABLE `doctoras` (
  `idDOCTORAS` int(11) NOT NULL AUTO_INCREMENT,
  `Nombres` varchar(55) NOT NULL,
  `Apellidos` varchar(55) NOT NULL,
  `CedulaProfesional` varchar(15) NOT NULL,
  `CedulaEspecialidad` varchar(15) NOT NULL,
  `Telefono` varchar(25) NOT NULL,
  `Email` varchar(55) NOT NULL,
  `clave` varchar(25) NOT NULL,
  PRIMARY KEY (`idDOCTORAS`)
);

CREATE TABLE `pacientes` (
  `idPacientes` int(11) NOT NULL AUTO_INCREMENT,
  `Nombres` varchar(55) NOT NULL,
  `Apellidos` varchar(55) NOT NULL,
  `Edad` varchar(3) NOT NULL,
  `EstadoCivil` varchar(55) NOT NULL,
  `Ocupacion` varchar(55) NOT NULL,
  `Escolaridad` varchar(55) NOT NULL,
  `CiudadDeNacimiento` varchar(55) NOT NULL,
  `idDoctora` int(11) NOT NULL,
  PRIMARY KEY (`idPacientes`),
  KEY `idDoctora` (`idDoctora`),
  CONSTRAINT `pacientes_ibfk_1` FOREIGN KEY (`idDoctora`) REFERENCES `doctoras` (`idDOCTORAS`)
);

CREATE TABLE `domiciliopaciente` (
  `idDomicilioPaciente` int(11) NOT NULL AUTO_INCREMENT,
  `Municipio` varchar(55) NOT NULL,
  `Colonia` varchar(55) NOT NULL,
  `Calle` varchar(55) NOT NULL,
  `Numero` varchar(5) NOT NULL,
  `CP` varchar(10) NOT NULL,
  `idPaciente` int(11) NOT NULL,
  PRIMARY KEY (`idDomicilioPaciente`),
  KEY `idPaciente` (`idPaciente`),
  CONSTRAINT `domiciliopaciente_ibfk_1` FOREIGN KEY (`idPaciente`) REFERENCES `pacientes` (`idPacientes`)
);

CREATE TABLE `historiaclinica` (
  `idHistoriaClinica` int(11) NOT NULL AUTO_INCREMENT,
  `DD` varchar(2) NOT NULL,
  `MM` varchar(2) NOT NULL,
  `YYYY` varchar(4) NOT NULL,
  `Hora` varchar(5) NOT NULL,
  `idPaciente` int(11) NOT NULL,
  PRIMARY KEY (`idHistoriaClinica`),
  KEY `idPaciente` (`idPaciente`),
  CONSTRAINT `historiaclinica_ibfk_1` FOREIGN KEY (`idPaciente`) REFERENCES `pacientes` (`idPacientes`)
);

CREATE TABLE `abdomen_o` (
  `idabdomen_o` int(11) NOT NULL AUTO_INCREMENT,
  `abdomenGloboso` bit(1) NOT NULL,
  `fondoUterino` varchar(45) NOT NULL,
  `uteroOcupado` bit(1) NOT NULL,
  `unicoMultiple` bit(1) NOT NULL,
  `numero` int(11) NOT NULL,
  `vivo` bit(1) NOT NULL,
  `longitudinal` bit(1) NOT NULL,
  `transverso` bit(1) NOT NULL,
  `otro` varchar(45) NOT NULL,
  `cefalico` bit(1) NOT NULL,
  `pelvico` bit(1) NOT NULL,
  `presentacionOtro` varchar(45) NOT NULL,
  `dorsoIZQ` bit(1) NOT NULL,
  `dorsoDER` bit(1) NOT NULL,
  `FCF` varchar(45) NOT NULL,
  `ritmo` varchar(45) NOT NULL,
  `normal` bit(1) NOT NULL,
  `anormal` bit(1) NOT NULL,
  `especifique` varchar(45) NOT NULL,
  `idHistoriaClinica` int(11) NOT NULL,
  PRIMARY KEY (`idabdomen_o`),
  KEY `idHistoriaClinica` (`idHistoriaClinica`),
  CONSTRAINT `abdomen_o_ibfk_1` FOREIGN KEY (`idHistoriaClinica`) REFERENCES `historiaclinica` (`idHistoriaClinica`)
);

CREATE TABLE `adicciones` (
  `idAdicciones` int(11) NOT NULL AUTO_INCREMENT,
  `Tabaquismo` bit(1) NOT NULL,
  `Alcoholismo` bit(1) NOT NULL,
  `Drogas` bit(1) NOT NULL,
  `idHistoriaClinica` int(11) NOT NULL,
  PRIMARY KEY (`idAdicciones`),
  KEY `idHistoriaClinica` (`idHistoriaClinica`),
  CONSTRAINT `adicciones_ibfk_1` FOREIGN KEY (`idHistoriaClinica`) REFERENCES `historiaclinica` (`idHistoriaClinica`)
);

CREATE TABLE `alergias` (
  `idalergias` int(11) NOT NULL AUTO_INCREMENT,
  `alergiaN` varchar(45) NOT NULL,
  `idHistoriaClinica` int(11) NOT NULL,
  PRIMARY KEY (`idalergias`),
  KEY `idHistoriaClinica` (`idHistoriaClinica`),
  CONSTRAINT `alergias_ibfk_1` FOREIGN KEY (`idHistoriaClinica`) REFERENCES `historiaclinica` (`idHistoriaClinica`)
);

CREATE TABLE `alturapresentacion` (
  `idalturaPresentacion` int(11) NOT NULL AUTO_INCREMENT,
  `I` varchar(45) NOT NULL,
  `II` varchar(45) NOT NULL,
  `III` varchar(45) NOT NULL,
  `aminosIntegro` bit(1) NOT NULL,
  `roto` bit(1) NOT NULL,
  `DD` varchar(5) NOT NULL,
  `MM` varchar(5) NOT NULL,
  `YYYY` varchar(5) NOT NULL,
  `idHistoriaClinica` int(11) NOT NULL,
  PRIMARY KEY (`idalturaPresentacion`),
  KEY `idHistoriaClinica` (`idHistoriaClinica`),
  CONSTRAINT `alturapresentacion_ibfk_1` FOREIGN KEY (`idHistoriaClinica`) REFERENCES `historiaclinica` (`idHistoriaClinica`)
);

CREATE TABLE `antecedentesginecologicosobstetricos` (
  `idAntecedentesGinecologicosObstetricos` int(11) NOT NULL AUTO_INCREMENT,
  `Menarca` varchar(15) NOT NULL,
  `Ritmo` varchar(15) NOT NULL,
  `IVS` varchar(15) NOT NULL,
  `NoCompSex` varchar(5) NOT NULL,
  `G` varchar(15) NOT NULL,
  `P` varchar(15) NOT NULL,
  `A` varchar(15) NOT NULL,
  `C` varchar(15) NOT NULL,
  `Ectopico` varchar(45) NOT NULL,
  `Molar` varchar(45) NOT NULL,
  `FUP` varchar(45) NOT NULL,
  `FUM` varchar(45) NOT NULL,
  `FPP` varchar(45) NOT NULL,
  `idHistoriaClinica` int(11) NOT NULL,
  PRIMARY KEY (`idAntecedentesGinecologicosObstetricos`),
  KEY `idHistoriaClinica` (`idHistoriaClinica`),
  CONSTRAINT `antecedentesginecologicosobstetricos_ibfk_1` FOREIGN KEY (`idHistoriaClinica`) REFERENCES `historiaclinica` (`idHistoriaClinica`)
);

CREATE TABLE `antecedentesheredofamiliares` (
  `idAntecedentesHeredoFamiliares` int(11) NOT NULL AUTO_INCREMENT,
  `Diabetes` bit(1) NOT NULL,
  `Cardiopatias` bit(1) NOT NULL,
  `HTA` bit(1) NOT NULL,
  `Tiroides` bit(1) NOT NULL,
  `Neoplasticos` bit(1) NOT NULL,
  `Especificaciones` text NOT NULL,
  `idHistoriaClinica` int(11) NOT NULL,
  PRIMARY KEY (`idAntecedentesHeredoFamiliares`),
  KEY `idHistoriaClinica` (`idHistoriaClinica`),
  CONSTRAINT `antecedentesheredofamiliares_ibfk_1` FOREIGN KEY (`idHistoriaClinica`) REFERENCES `historiaclinica` (`idHistoriaClinica`)
);

CREATE TABLE `antecedentespersonalespatologicos` (
  `idAntecedentesPersonalesPatologicos` int(11) NOT NULL AUTO_INCREMENT,
  `Diabetes` bit(1) NOT NULL,
  `Cardiopatias` bit(1) NOT NULL,
  `HTA` bit(1) NOT NULL,
  `Epilepsia` bit(1) NOT NULL,
  `Nefropatias` bit(1) NOT NULL,
  `idHistoriaClinica` int(11) NOT NULL,
  PRIMARY KEY (`idAntecedentesPersonalesPatologicos`),
  KEY `idHistoriaClinica` (`idHistoriaClinica`),
  CONSTRAINT `antecedentespersonalespatologicos_ibfk_1` FOREIGN KEY (`idHistoriaClinica`) REFERENCES `historiaclinica` (`idHistoriaClinica`)
);

CREATE TABLE `antecedentespersonalesquirurgicos` (
  `idAntecedentesPersonalesQuirurgicos` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(90) NOT NULL,
  `Descripcion` text NOT NULL,
  `YYYY` varchar(4) NOT NULL,
  `idHistoriaClinica` int(11) NOT NULL,
  PRIMARY KEY (`idAntecedentesPersonalesQuirurgicos`),
  KEY `idHistoriaClinica` (`idHistoriaClinica`),
  CONSTRAINT `antecedentespersonalesquirurgicos_ibfk_1` FOREIGN KEY (`idHistoriaClinica`) REFERENCES `historiaclinica` (`idHistoriaClinica`)
);

CREATE TABLE `antecedentespersonalestraumaticos` (
  `idAntecedentesPersonalesTraumaticos` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) NOT NULL,
  `Descripcion` text NOT NULL,
  `YYYY` varchar(5) NOT NULL,
  `idHistoriaClinica` int(11) NOT NULL,
  PRIMARY KEY (`idAntecedentesPersonalesTraumaticos`),
  KEY `idHistoriaClinica` (`idHistoriaClinica`),
  CONSTRAINT `antecedentespersonalestraumaticos_ibfk_1` FOREIGN KEY (`idHistoriaClinica`) REFERENCES `historiaclinica` (`idHistoriaClinica`)
);
CREATE TABLE `estudios_lab` (
  `idestudios_lab` int(11) NOT NULL AUTO_INCREMENT,
  `grupoSanguineo` varchar(45) NOT NULL,
  `RH` varchar(45) NOT NULL,
  `hemoglobina` varchar(45) NOT NULL,
  `Hematocrito` varchar(45) NOT NULL,
  `Leucocitos` varchar(45) NOT NULL,
  `Plaquetas` varchar(45) NOT NULL,
  `TP` varchar(45) NOT NULL,
  `TPT` varchar(45) NOT NULL,
  `Glucosa` varchar(45) NOT NULL,
  `VDRL` varchar(45) NOT NULL,
  `HIV` varchar(45) NOT NULL,
  `idHistoriaClinica` int(11) NOT NULL,
  PRIMARY KEY (`idestudios_lab`),
  KEY `idHistoriaClinica` (`idHistoriaClinica`),
  CONSTRAINT `estudios_lab_ibfk_1` FOREIGN KEY (`idHistoriaClinica`) REFERENCES `historiaclinica` (`idHistoriaClinica`)
);

CREATE TABLE `exploraciong` (
  `idexploracionG` int(11) NOT NULL AUTO_INCREMENT,
  `consciente` bit(1) NOT NULL,
  `habitus` varchar(45) NOT NULL,
  `peso` varchar(15) NOT NULL,
  `estatura` varchar(15) NOT NULL,
  `TA` varchar(45) NOT NULL,
  `FC` varchar(45) NOT NULL,
  `FR` varchar(45) NOT NULL,
  `temperatura` varchar(45) NOT NULL,
  `pulmonesB` bit(1) NOT NULL,
  `pulmonesT` varchar(45) NOT NULL,
  `corazonB` bit(1) NOT NULL,
  `corazonT` varchar(45) NOT NULL,
  `cabezaB` bit(1) NOT NULL,
  `cabezaT` varchar(45) NOT NULL,
  `cuelloB` bit(1) NOT NULL,
  `cuelloT` varchar(45) NOT NULL,
  `idHistoriaClinica` int(11) NOT NULL,
  PRIMARY KEY (`idexploracionG`),
  KEY `idHistoriaClinica` (`idHistoriaClinica`),
  CONSTRAINT `exploraciong_ibfk_1` FOREIGN KEY (`idHistoriaClinica`) REFERENCES `historiaclinica` (`idHistoriaClinica`)
);
CREATE TABLE `inmunizaciones` (
  `idInmunizaciones` int(11) NOT NULL AUTO_INCREMENT,
  `Rubeola` bit(1) NOT NULL,
  `Influenza` bit(1) NOT NULL,
  `Antitetanica` bit(1) NOT NULL,
  `Covid19` bit(1) NOT NULL,
  `idHistoriaClinica` int(11) NOT NULL,
  PRIMARY KEY (`idInmunizaciones`),
  KEY `idHistoriaClinica` (`idHistoriaClinica`),
  CONSTRAINT `inmunizaciones_ibfk_1` FOREIGN KEY (`idHistoriaClinica`) REFERENCES `historiaclinica` (`idHistoriaClinica`)
);
CREATE TABLE `notamedica` (
  `idnotaMedica` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) NOT NULL,
  `TA` varchar(10) NOT NULL,
  `FC` varchar(10) NOT NULL,
  `FR` varchar(10) NOT NULL,
  `T` varchar(10) NOT NULL,
  `descripcion` text NOT NULL,
  `DD` varchar(5) NOT NULL,
  `MM` varchar(5) NOT NULL,
  `YYYY` varchar(5) NOT NULL,
  `idPaciente` int(11) NOT NULL,
  PRIMARY KEY (`idnotaMedica`),
  KEY `idPaciente` (`idPaciente`),
  CONSTRAINT `notamedica_ibfk_1` FOREIGN KEY (`idPaciente`) REFERENCES `pacientes` (`idPacientes`)
);
CREATE TABLE `otros_o` (
  `idotros_O` int(11) NOT NULL AUTO_INCREMENT,
  `amnioticoMeconio` bit(1) NOT NULL,
  `miembrosSupNormales` bit(1) NOT NULL,
  `anotaciones` text NOT NULL,
  `edema` bit(1) NOT NULL,
  `idHistoriaClinica` int(11) NOT NULL,
  PRIMARY KEY (`idotros_O`),
  KEY `idHistoriaClinica` (`idHistoriaClinica`),
  CONSTRAINT `otros_o_ibfk_1` FOREIGN KEY (`idHistoriaClinica`) REFERENCES `historiaclinica` (`idHistoriaClinica`)
);
CREATE TABLE `padecimientoactual` (
  `idpadecimientoActual` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` text NOT NULL,
  `idHistoriaClinica` int(11) NOT NULL,
  PRIMARY KEY (`idpadecimientoActual`),
  KEY `idHistoriaClinica` (`idHistoriaClinica`),
  CONSTRAINT `padecimientoactual_ibfk_1` FOREIGN KEY (`idHistoriaClinica`) REFERENCES `historiaclinica` (`idHistoriaClinica`)
);
CREATE TABLE `plan` (
  `idplan` int(11) NOT NULL AUTO_INCREMENT,
  `planManejo` text NOT NULL,
  `pronostico` text NOT NULL,
  `idHistoriaClinica` int(11) NOT NULL,
  PRIMARY KEY (`idplan`),
  KEY `idHistoriaClinica` (`idHistoriaClinica`),
  CONSTRAINT `plan_ibfk_1` FOREIGN KEY (`idHistoriaClinica`) REFERENCES `historiaclinica` (`idHistoriaClinica`)
);
CREATE TABLE `utero_o` (
  `idutero_o` int(11) NOT NULL AUTO_INCREMENT,
  `actividad` bit(1) NOT NULL,
  `contraccionEsesporadicas` bit(1) NOT NULL,
  `contraccionesIrregulares` bit(1) NOT NULL,
  `frecuenciaContracciones` varchar(45) NOT NULL,
  `intensidad` varchar(45) NOT NULL,
  `hipertonia` bit(1) NOT NULL,
  `idHistoriaClinica` int(11) NOT NULL,
  PRIMARY KEY (`idutero_o`),
  KEY `idHistoriaClinica` (`idHistoriaClinica`),
  CONSTRAINT `utero_o_ibfk_1` FOREIGN KEY (`idHistoriaClinica`) REFERENCES `historiaclinica` (`idHistoriaClinica`)
);

CREATE TABLE `vaginal_o` (
  `idvaginal_o` int(11) NOT NULL AUTO_INCREMENT,
  `tacto` bit(1) NOT NULL,
  `dilatacion` varchar(45) NOT NULL,
  `borramiento` varchar(45) NOT NULL,
  `anterior` bit(1) NOT NULL,
  `central` bit(1) NOT NULL,
  `posterior` bit(1) NOT NULL,
  `constDura` bit(1) NOT NULL,
  `blanda` bit(1) NOT NULL,
  `idHistoriaClinica` int(11) NOT NULL,
  PRIMARY KEY (`idvaginal_o`),
  KEY `idHistoriaClinica` (`idHistoriaClinica`),
  CONSTRAINT `vaginal_o_ibfk_1` FOREIGN KEY (`idHistoriaClinica`) REFERENCES `historiaclinica` (`idHistoriaClinica`)
);











