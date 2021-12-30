<?php
	include 'Inmunizaciones.php';
	header('Access-Control-Allow-Origin: *');

	switch ($_SERVER['REQUEST_METHOD']) {
		case 'GET':
			if(
				isset($_GET['idInmunizaciones']) &&
				isset($_GET['Rubeola']) &&
				isset($_GET['Influenza']) &&
				isset($_GET['Antitetanica']) &&
				isset($_GET['Covid19']) &&
				isset($_GET['idHistoriaClinica'])
			){
				$inmunizaciones= new Inmunizaciones($_GET['idInmunizaciones'], $_GET['Rubeola'], $_GET['Influenza'], $_GET['Antitetanica'], $_GET['Covid19'], $_GET['idHistoriaClinica']);
				$inmunizaciones->setInmunizaciones();
			}
			if (isset($_GET['idHistoriaClinica'])) {
				
				Inmunizaciones::getInmunizacionesByHC($_GET['idHistoriaClinica']);
			}
	}
?>