<?php
	include 'Conexion.php';
	class Doctora{
		var $idDoctora;
		var $Nombres;
		var $Apellidos;
		var $CedulaProfesional;
		var $CedulaEspecialista;
		var $Telefono;
		var $Email;
		var $Clave;
		public function __construct($idDoctora, $Nombres, $Apellidos, $CedulaProfesional, $CedulaEspecialista, $Telefono, $Email, $Clave){
			$this->idDoctora = $idDoctora;
			$this->Nombres = $Nombres;
			$this->Apellidos = $Apellidos;
			$this->CedulaProfesional = $CedulaProfesional;
			$this->CedulaEspecialista	= $CedulaEspecialista;
			$this->Telefono = $Telefono; 	
			$this->Email = $Email; 	
			$this->Clave = $Clave; 	
		}
		public static function doctoraByEmail($Email, $Clave){
			$response = null;
			$conn=new Conexion();
			$sql = "SELECT * FROM doctoras where email='$Email' and Clave='$Clave'";
			try {
				
				$stmt = $conn->getConexion()->query($sql);
				$result = $stmt->setFetchMode(PDO::FETCH_NUM);
				while ($row = $stmt->fetch()) {
					$Doctora =  new Doctora($row[0], $row[1], $row[2], $row[3],  $row[4], $row[5], $row[6], $row[7]);
				}
				$conn=null;
				return json_encode($Doctora);
			} catch (PDOException $e) {
				$response = null;
				$response = array(
					"estado"=>"FALLIDO",
					"cliente"=>"NULL"
				);
				
				return $response;
			}
		}
		public static function GetPerfil($Email){
			$response = null;
			$conn=new Conexion();
			$sql = "SELECT * FROM doctoras where email='$Email'";
			try {
				
				$stmt = $conn->getConexion()->query($sql);
				$result = $stmt->setFetchMode(PDO::FETCH_NUM);
				while ($row = $stmt->fetch()) {
					$Doctora =  new Doctora($row[0], $row[1], $row[2], $row[3],  $row[4], $row[5], $row[6], $row[7]);
				}
				$conn=null;
				echo json_encode($Doctora);
				return json_encode($Doctora);
			} catch (PDOException $e) {
				$response = null;
				$response = array(
					"estado"=>"FALLIDO",
					"cliente"=>"NULL"
				);
				
				return json_encode($response);
			}
		}
	}
?>