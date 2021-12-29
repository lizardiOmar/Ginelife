<?php

	include 'PadecimientoActual.php';
	header('Access-Control-Allow-Origin: *');
	switch ($_SERVER['REQUEST_METHOD']) {
		case 'GET':
			if(
				isset($_GET['idPadecimientoActual']) &&
				isset($_GET['nombre']) &&
				isset($_GET['Descripcion']) &&
				isset($_GET['idHistoriaClinica'])
			){
				$pa=new PadecimientoActual($_GET['idPadecimientoActual'],$_GET['nombre'],$_GET['Descripcion'],$_GET['idHistoriaClinica']);
				$pa->setPadecimiento();
            }
}

?>