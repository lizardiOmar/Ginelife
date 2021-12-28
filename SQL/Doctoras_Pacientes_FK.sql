CREATE SCHEMA `ginelife` ;
use ginelife;
/*TABLA DE LAS ESPECIALISTAS*/
CREATE TABLE `doctoras` (
 `idDOCTORAS` int(11) NOT NULL AUTO_INCREMENT,
 `Nombres` varchar(55) NOT NULL,
 `Apellidos` varchar(55) NOT NULL,
 `CedulaProfesional` varchar(15) NOT NULL,
 `CedulaEspecialidad` varchar(15) NOT NULL,
 `Telefono` varchar(25) NOT NULL,
 `Email` varchar(55) NOT NULL,
 `Clave` varchar(25) NOT NULL,
 PRIMARY KEY (`idDOCTORAS`));
/*TABLA DE LAS PACIENTES/ficha de identificación*/
CREATE TABLE `ginelife`.`pacientes` (
 `idPacientes` INT NOT NULL AUTO_INCREMENT,
 `Nombres` VARCHAR(55) NOT NULL,
 `Apellidos` VARCHAR(55) NOT NULL,
 `Edad` VARCHAR(3) NOT NULL,
 `EstadoCivil` INT NOT NULL,
 `Ocupacion` VARCHAR(55) NOT NULL,
 `Escolaridad` VARCHAR(55) NOT NULL,
 `CiudadDeNacimiento` VARCHAR(55) NOT NULL,
 `idDoctora` INT NULL,
 PRIMARY KEY (`idPacientes`));
ALTER TABLE pacientes
ADD FOREIGN KEY (idDoctora) REFERENCES doctoras(idDoctoras);
ALTER TABLE `ginelife`.`pacientes` 
CHANGE COLUMN `EstadoCivil` `EstadoCivil` VARCHAR(55) NOT NULL ;
