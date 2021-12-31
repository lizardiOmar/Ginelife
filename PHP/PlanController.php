<?php
	include 'Plan.php';
	header('Access-Control-Allow-Origin: *');
	switch ($_SERVER['REQUEST_METHOD']) {
		case 'GET':
			if(
				isset($_GET['idplan']) &&
                isset($_GET['planManejo']) &&
                isset($_GET['pronostico']) &&
                isset($_GET['idHistoriaClinica'])
			){
				$explo=new Plan($_GET['idplan'], $_GET['planManejo'], $_GET['pronostico'], $_GET['idHistoriaClinica']);
				$explo->setExploracion();
			}
			if (isset($_GET['idHistoriaClinica'])) {
				Plan::getPlanByHC($_GET['idHistoriaClinica']);
			}
	}

?>