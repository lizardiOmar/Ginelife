<?php
	include 'Doctora.php';
	header('Access-Control-Allow-Origin: *');
	switch ($_SERVER['REQUEST_METHOD']) {
		case 'GET':
			if (isset($_GET['correo'])&& isset($_GET['clave'])) {
				
				Doctora::doctoraByEmail( $_GET['correo'], $_GET['clave']);
			}
			if (isset($_GET['correo'])) {
				
				Doctora::GetPerfil( $_GET['correo']);
			}
		break;
	}
?>