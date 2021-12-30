<?php
	include 'AntecedentesPersonalesQirurgicos.php';
	header('Access-Control-Allow-Origin: *');
	switch ($_SERVER['REQUEST_METHOD']) {
		case 'GET':
			if (
				isset($_GET['idAntecedentesPersonalesQuirurgicos']) &&
				isset($_GET['Nombre']) &&
				isset($_GET['Descripcion']) &&
				isset($_GET['YYYY']) &&
				isset($_GET['idHistoriaClinica'])
			){
				$antecedentesPQ=new AntecedentesPersonalesQirurgicos($_GET['idAntecedentesPersonalesQuirurgicos'], $_GET['Nombre'], $_GET['Descripcion'], $_GET['YYYY'], $_GET['idHistoriaClinica']);
				$antecedentesPQ->setAntecedentesPQ();
			}
			if (isset($_GET['idHistoriaClinica'])) {
				
				AntecedentesPersonalesQirurgicos::getQuirurgicosByHC($_GET['idHistoriaClinica']);
			}
	}

?>