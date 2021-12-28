<?php
	include 'AntecedentesHeredoFamiliares.php';
	header('Access-Control-Allow-Origin: *');
	switch ($_SERVER['REQUEST_METHOD']) {
		case 'GET':
			if (
				isset($_GET['idAntecedentesHeredoFamiliares']) &&
				isset($_GET['Diabetes']) &&
				isset($_GET['Cardiopatias']) &&
				isset($_GET['HTA']) &&
				isset($_GET['Tiroides']) &&
				isset($_GET['Neoplasticos']) &&
				isset($_GET['Especificaciones']) &&
				isset($_GET['idHistoriaClinica'])
			){
				$antecedentesHF=new AntecedentesHeredoFamiliares($_GET['idAntecedentesHeredoFamiliares'], $_GET['Diabetes'], $_GET['Cardiopatias'], $_GET['HTA'], $_GET['Tiroides'], $_GET['Neoplasticos'], $_GET['Especificaciones'], $_GET['idHistoriaClinica']);
				$antecedentesHF->setAntecedentesHF();
			}
	}

?>