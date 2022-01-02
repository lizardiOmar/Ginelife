<?php
	include 'Colposcopia.php';
	header('Access-Control-Allow-Origin: *');
	switch ($_SERVER['REQUEST_METHOD']) {
		case 'GET':
			if (
				isset($_GET['idColposcopia']) &&
				isset($_GET['DD']) &&
				isset($_GET['MM']) &&
				isset($_GET['YYYY']) &&
				isset($_GET['idPaciente'])
			){
				$colposcopia=new Colposcopia($_GET['idColposcopia'], $_GET['DD'], $_GET['MM'], $_GET['YYYY'], $_GET['idPaciente']);
				$colposcopia->nuevaColposcopia();
			}
        case 'POST':
            if(isset($_POST["submit"])){
                $total = count($_FILES['upload']['name']);
                echo json_encode($total);
                if($total<4){
                    
                }else if($total>4){
                    
                }else{
                    for( $i=0 ; $i < $total ; $i++ ) {
                        $tmpFilePath = $_FILES['upload']['tmp_name'][$i];
                        echo '('.$tmpFilePath.')';
                        echo json_encode(getimagesize($tmpFilePath));
                    }

                }
            }
    }