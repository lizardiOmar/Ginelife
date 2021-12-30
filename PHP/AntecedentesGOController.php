<?php

include 'AntecedentesGO.php';
header('Access-Control-Allow-Origin: *');

switch ($_SERVER['REQUEST_METHOD']) {
		case 'GET':
			if(
				isset($_GET['idAntecedentesGO']) &&
				isset($_GET['Menarca']) &&
				isset($_GET['Ritmo']) &&
				isset($_GET['IVS']) &&
				isset($_GET['NoCompSex']) &&
				isset($_GET['G']) &&
				isset($_GET['P']) &&
				isset($_GET['A']) &&
				isset($_GET['C']) &&
				isset($_GET['Ectopico']) &&
				isset($_GET['Molar']) &&
				isset($_GET['FUP']) &&
				isset($_GET['FUM']) &&
				isset($_GET['FPP']) &&
				isset($_GET['idHistoriaClinica'])
			){
				$antecedentesGO=new AntecedentesGO(
					$_GET['idAntecedentesGO'], $_GET['Menarca'], $_GET['Ritmo'], $_GET['IVS'], $_GET['NoCompSex'], $_GET['G'], $_GET['P'], $_GET['A'], $_GET['C'],$_GET['Ectopico'], $_GET['Molar'], $_GET['FUP'], $_GET['FUM'],$_GET['FPP'], $_GET['idHistoriaClinica']
				);
				$antecedentesGO->setAntecedentesGO();
            }
			if (isset($_GET['idHistoriaClinica'])) {
				
				AntecedentesGO::getAntecedentesGOByHC($_GET['idHistoriaClinica']);
			}
}

?>