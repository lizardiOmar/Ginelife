<?php
	include 'HistoriaClinica.php';
	header('Access-Control-Allow-Origin: *');
	switch ($_SERVER['REQUEST_METHOD']) {
		case 'GET':
			if (
				isset($_GET['idHistoriaClinica']) &&
				isset($_GET['DD']) &&
				isset($_GET['MM']) &&
				isset($_GET['YYYY']) &&
				isset($_GET['hora']) &&
				isset($_GET['idPaciente'])
			){
				$hc=new HistoriaClinica($_GET['idHistoriaClinica'], $_GET['DD'], $_GET['MM'], $_GET['YYYY'], $_GET['hora'], $_GET['idPaciente']);
				$hc->nuevaHistoriaClinica();
			}
			if (
				isset($_GET['idPaciente']) &&
				isset($_GET['hora'])
			){
				HistoriaClinica::getHistoriaClinicaByHoraPaciente($_GET['hora'], $_GET['idPaciente']);
			}
			
	}

?>