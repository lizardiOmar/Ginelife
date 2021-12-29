<?php
	include 'Adicciones.php';
	header('Access-Control-Allow-Origin: *');
	switch ($_SERVER['REQUEST_METHOD']) {
		case 'GET':
			if(
				isset($_GET['idAdicciones']) &&
				isset($_GET['Tabaquismo']) &&
				isset($_GET['Alcoholismo']) &&
				isset($_GET['Drogas']) &&
				isset($_GET['idHistoriaClinica'])
			){
				$adicciones=new Adicciones($_GET['idAdicciones'], $_GET['Tabaquismo'], $_GET['Alcoholismo'], $_GET['Drogas'], $_GET['idHistoriaClinica']);
				$adicciones->setAdicciones();
			}
	}

?>