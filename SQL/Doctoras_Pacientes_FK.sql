CREATE SCHEMA `ginelife` ;
use ginelife;
/*TABLA DE LAS ESPECIALISTAS*/
CREATE TABLE `ginelife`.`doctoras` (
 `idDOCTORAS` INT NOT NULL AUTO_INCREMENT,
 `Nombres` VARCHAR(55) NOT NULL,
 `Apellidos` VARCHAR(55) NOT NULL,
 `CedulaProfesional` VARCHAR(15) NOT NULL,
 `CedulaEspecialidad` VARCHAR(15) NOT NULL,
 `Telefono` VARCHAR(25) NOT NULL,
 `Email` VARCHAR(55) NOT NULL,
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

