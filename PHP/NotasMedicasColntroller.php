<?php
	include 'NotasMedicas.php';
	header('Access-Control-Allow-Origin: *');
    switch ($_SERVER['REQUEST_METHOD']) {
        case 'GET':
            if (
			isset($_GET['idNotaMedica']) &&
			isset($_GET['titulo']) &&
			isset($_GET['TA']) &&
			isset($_GET['FC']) &&
			isset($_GET['FR']) &&
			isset($_GET['T']) &&
			isset($_GET['descripcion']) &&
			isset($_GET['DD']) &&
            isset($_GET['MM']) &&
            isset($_GET['YYYY']) &&
			isset($_GET['idPaciente'])
			) {
				$notaMedica=new NotasMedicas($_GET['idNotaMedica'], $_GET['titulo'], $_GET['TA'], $_GET['FC'], $_GET['FR'], $_GET['T'], $_GET['descripcion'], $_GET['DD'], $_GET['MM'], $_GET['YYYY'], $_GET['idPaciente']);
                $notaMedica->nuevaNota();
			}else 
            if(isset($_GET['idPaciente'])){
                NotasMedicas::getNotasByPaciente($_GET['idPaciente']);
            }else
            if (
				isset($_GET['idNotaMedica'])
			){
				NotasMedicas::getNotaMedicaById($_GET['idNotaMedica']);
			}

            
    }
