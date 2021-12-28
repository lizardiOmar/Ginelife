<?php
	include 'DomicilioPaciente.php';
	header('Access-Control-Allow-Origin: *');
	switch ($_SERVER['REQUEST_METHOD']) {
		case 'GET':
			if (
			isset($_GET['idDomicilioPaciente']) &&
			isset($_GET['Municipio']) &&
			isset($_GET['Colonia']) &&
			isset($_GET['Calle']) &&
			isset($_GET['Numero']) &&
			isset($_GET['CP']) &&
			isset($_GET['idPaciente'])
			) {
				$domicilio =new DomicilioPaciente($_GET['idDomicilioPaciente'], $_GET['Municipio'], $_GET['Colonia'], 
				$_GET['Calle'], $_GET['Numero'], $_GET['CP'], $_GET['idPaciente']);
				$domicilio->setDomicilioPaciente();
			}
	}

?>