<?php
	include 'AntecedentesPersonalesPatologicos.php';
	header('Access-Control-Allow-Origin: *');
	switch ($_SERVER['REQUEST_METHOD']) {
		case 'GET':
			if (
				isset($_GET['idAntecedentesPersonalesPatologicos']) &&
				isset($_GET['Diabetes']) &&
				isset($_GET['Cardiopatias']) &&
				isset($_GET['HTA']) &&
				isset($_GET['Epilepsia']) &&
				isset($_GET['Neoplasticos']) &&
				isset($_GET['idHistoriaClinica'])
			){
				$antecedentesPP=new AntecedentesPersonalesPatologicos($_GET['idAntecedentesPersonalesPatologicos'], $_GET['Diabetes'], $_GET['Cardiopatias'], $_GET['HTA'], $_GET['Epilepsia'], $_GET['Neoplasticos'], $_GET['idHistoriaClinica']);
				$antecedentesPP->setAntecedentesPerPat();
			}
	}

?>