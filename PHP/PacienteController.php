<?php
	include 'Paciente.php';
	header('Access-Control-Allow-Origin: *');
	switch ($_SERVER['REQUEST_METHOD']) {
		case 'GET':
			if (
			isset($_GET['idPaciente']) &&
			isset($_GET['Nombres']) &&
			isset($_GET['Apellidos']) &&
			isset($_GET['Edad']) &&
			isset($_GET['EstadoCivil']) &&
			isset($_GET['Ocupacion']) &&
			isset($_GET['Escolaridad']) &&
			isset($_GET['CiudadDeNacimiento']) &&
			isset($_GET['idDoctora'])
			) {
				$paciente =  new Paciente($_GET['idPaciente'], $_GET['Nombres'], $_GET['Apellidos'], $_GET['Edad'], $_GET['EstadoCivil'], $_GET['Ocupacion'], $_GET['Escolaridad'], $_GET['CiudadDeNacimiento'], $_GET['idDoctora']);
				$paciente->nuevoPaciente();
			}
			if (
			isset($_GET['Nombres']) &&
			isset($_GET['Apellidos']) &&
			isset($_GET['Edad']) &&
			isset($_GET['CiudadDeNacimiento'])
			) {
				Paciente::getPacienteRegistro($_GET['Nombres'], $_GET['Apellidos'], $_GET['Edad'], $_GET['CiudadDeNacimiento']);
			}
			if (
			isset($_GET['idPaciente'])
			) {
				Paciente::getPacienteByID($_GET['idPaciente']);
			}
			if (isset($_GET['idDoctora'])) {
				Paciente::getPacientesByDoctor($_GET['idDoctora']);
			}
			
		break;
	}


?>