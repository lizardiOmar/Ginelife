<?php
	include 'Exploracion.php';
	header('Access-Control-Allow-Origin: *');
	switch ($_SERVER['REQUEST_METHOD']) {
		case 'GET':
			if(
				isset($_GET['idexploracionG']) &&
                isset($_GET['consciente']) &&
                isset($_GET['habitus']) &&
                isset($_GET['peso']) &&
                isset($_GET['estatura']) &&
                isset($_GET['ta']) &&
                isset($_GET['fc']) &&
                isset($_GET['fr']) &&
                isset($_GET['temperatura']) &&
                isset($_GET['pulmonesB']) &&
                isset($_GET['pulmonesT']) &&
                isset($_GET['corazonB']) &&
                isset($_GET['corazonT']) &&
                isset($_GET['cabezaB']) &&
                isset($_GET['cabezaT']) &&
                isset($_GET['cuelloB']) &&
                isset($_GET['cuelloT']) &&
                isset($_GET['idHistoriaClinica'])
			){
				$explo=new Exploracion($_GET['idexploracionG'], $_GET['consciente'], $_GET['habitus'], $_GET['peso'],$_GET['estatura'],$_GET['ta'], $_GET['fc'], $_GET['fr'],$_GET['temperatura'], $_GET['pulmonesB'], $_GET['pulmonesT'], $_GET['corazonB'], $_GET['corazonT'], $_GET['cabezaB'], $_GET['cabezaT'], $_GET['cuelloB'], $_GET['cuelloT'], $_GET['idHistoriaClinica']);
				$explo->setExploracion();
			}
            if (isset($_GET['idHistoriaClinica'])) {
				Exploracion::getExploracionByHC($_GET['idHistoriaClinica']);
			}
			
	}

?>