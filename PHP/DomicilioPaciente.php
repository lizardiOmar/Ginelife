<?php
	include 'Conexion.php';
	class DomicilioPaciente{
		var $idDomicilioPaciente;
		var $Municipio;
		var $Colonia;
		var $Calle;
		var $Numero;
		var $CP;
		var $idPaciente;
		public function __construct($idDomicilioPaciente, $Municipio, $Colonia, $Calle, $Numero, $CP, $idPaciente){
			$this->idDomicilioPaciente=$idDomicilioPaciente;
			$this->Municipio=$Municipio;
			$this->Colonia=$Colonia;
			$this->Calle=$Calle;
			$this->Numero=$Numero;
			$this->CP=$CP;
			$this->idPaciente=$idPaciente;
		}
		public function setDomicilioPaciente(){
			$conn=new Conexion();
			try{
				$query="INSERT INTO domicilioPaciente (idDomicilioPaciente, Municipio, Colonia, Calle, Numero, CP, idPaciente) VALUES ($this->idDomicilioPaciente, '$this->Municipio', '$this->Colonia', '$this->Calle', '$this->Numero', '$this->CP', $this->idPaciente)";
				$conn->getConexion()->exec($query);
				$conn=null;
				return "creado";
			}catch(PDOException $e){
				$response = array(
					"SERVICIO"=>"DESCONECTADO",
					"ESTADO"=>"NO CREADO",
					"ERROR"=>$e
				);
				return $e;
			}
		}
		public static function getDomicilioById($idPaciente){
			$response = null;
			$conn=new Conexion();
			$sql = "SELECT * FROM domicilioPaciente where idPaciente=$idPaciente";
			try {
				
				$stmt = $conn->getConexion()->query($sql);
				$result = $stmt->setFetchMode(PDO::FETCH_NUM);
				while ($row = $stmt->fetch()) {
					$domicilio =  new DomicilioPaciente($row[0], $row[1], $row[2], $row[3],  $row[4], $row[5], $row[6]);
				}
				$conn=null;
				echo json_encode($domicilio);
				return json_encode($domicilio);
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