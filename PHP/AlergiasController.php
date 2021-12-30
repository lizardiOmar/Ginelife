<?php
	include 'Alergias.php';
	header('Access-Control-Allow-Origin: *');
	switch ($_SERVER['REQUEST_METHOD']) {
		case 'GET':
			if(
				isset($_GET['idAlergias']) &&
				isset($_GET['Nombre']) &&
				isset($_GET['idHistoriaClinica'])
			){
				$alergias=new Alergias($_GET['idAlergias'],$_GET['Nombre'],$_GET['idHistoriaClinica']);
				$alergias->setAlergia();
            }
			if(isset($_GET['idHistoriaClinica'])){
			Alergias::getAlergiasByHC($_GET['idHistoriaClinica']);
		}
	}

?>