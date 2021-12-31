<?php
	include 'EstudiosL.php';
	header('Access-Control-Allow-Origin: *');
	switch ($_SERVER['REQUEST_METHOD']) {
		case 'GET':
			if(
				isset($_GET['idestudios_lab']) &&
                isset($_GET['grupoSanguineo']) &&
                isset($_GET['RH']) &&
                isset($_GET['hemoglobina']) &&
                isset($_GET['Hematocrito']) &&
                isset($_GET['Leucocitos']) &&
                isset($_GET['Plaquetas']) &&
                isset($_GET['TP']) &&
                isset($_GET['TPT']) &&
                isset($_GET['Glucosa']) &&
                isset($_GET['VDRL']) &&
                isset($_GET['HIV']) &&
                isset($_GET['idHistoriaClinica'])
			){
				$explo=new EstudiosL($_GET['idestudios_lab'], $_GET['grupoSanguineo'], $_GET['RH'], $_GET['hemoglobina'],$_GET['Hematocrito'],$_GET['Leucocitos'], $_GET['Plaquetas'], $_GET['TP'],$_GET['TPT'], $_GET['Glucosa'], $_GET['VDRL'], $_GET['HIV'], $_GET['idHistoriaClinica']);
				$explo->setExploracion();
			}
            if (isset($_GET['idHistoriaClinica'])) {
				EstudiosL::getEstudiosByHC($_GET['idHistoriaClinica']);
			}
			
	}

?>