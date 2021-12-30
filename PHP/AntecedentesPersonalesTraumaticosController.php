<?php
	include 'AntecedentesPersonalesTraumaticos.php';
	header('Access-Control-Allow-Origin: *');
	switch ($_SERVER['REQUEST_METHOD']) {
		case 'GET':
			if (
				isset($_GET['idAntecedentesPersonalesTraumaticos']) &&
				isset($_GET['Nombre']) &&
				isset($_GET['Descripcion']) &&
				isset($_GET['YYYY']) &&
				isset($_GET['idHistoriaClinica'])
			){
				$antecedentesPT=new AntecedentesPersonalesTraumaticos($_GET['idAntecedentesPersonalesTraumaticos'], $_GET['Nombre'], $_GET['Descripcion'], $_GET['YYYY'], $_GET['idHistoriaClinica']);
				$antecedentesPT->setAntecedentesPT();
			}
			if (isset($_GET['idHistoriaClinica'])) {
				
				AntecedentesPersonalesTraumaticos::getTraumaticosByHC($_GET['idHistoriaClinica']);
			}
	}

?>