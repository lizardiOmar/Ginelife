<?php
	include 'Conexion.php';
	class HistoriaClinica{
		var $idHistoriaClinica;
		var $DD;
		var $MM;
		var $YYYY;
		var $hora;
		var $idPaciente;
		public function __construct($idHistoriaClinica, $DD, $MM, $YYYY, $hora, $idPaciente){
			$this->idHistoriaClinica=$idHistoriaClinica;
			$this->DD=$DD;
			$this->MM=$MM;
			$this->YYYY=$YYYY;
			$this->hora=$hora;
			$this->idPaciente=$idPaciente;
		}
		public function nuevaHistoriaClinica(){
			$conn=new Conexion();
			try{
				$query="INSERT INTO historiaClinica () VALUES ($this->idHistoriaClinica, '$this->DD', '$this->MM', '$this->YYYY', '$this->hora', $this->idPaciente)";
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
		public static function getHistoriaClinicaByHoraPaciente($hora, $paciente){
			$response = null;
			$conn=new Conexion();
			$sql = "SELECT * FROM historiaClinica where hora='$hora' and idPaciente=$paciente";
			try {
				
				$stmt = $conn->getConexion()->query($sql);
				$result = $stmt->setFetchMode(PDO::FETCH_NUM);
				while ($row = $stmt->fetch()) {
					$HistoriaClinica =  new HistoriaClinica($row[0], $row[1], $row[2], $row[3],  $row[4], $row[5]);
				}
				$conn=null;
				echo json_encode($HistoriaClinica);
				return json_encode($HistoriaClinica);
			} catch (PDOException $e) {
				$response = null;
				$response = array(
					"estado"=>"FALLIDO",
					"cliente"=>"NULL"
				);
				
				return json_encode($response);
			}
		}
		public static function getHistoriaClinicaByPaciente($idPaciente){
			$response = null;
			$sql = "SELECT * FROM historiaClinica where idPaciente=$idPaciente;";
			try {
				$conn=new conexion();
				$stmt = $conn->getConexion()->query($sql);
				$result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
				while ($row = $stmt->fetch()) {
					$response[] = $row;
				}
				echo json_encode($response);
			} catch (PDOException $e) {
				$response = array(
					"estado"=>"FALLIDO",
					"direccion"=>"NULL"
				);
				echo json_encode($e);
			}
		}
		public static function getHistoriaClinicaById($idHistoriaClinica){
			$response = null;
			$conn=new Conexion();
			$sql = "SELECT * FROM historiaClinica where idHistoriaClinica=$idHistoriaClinica";
			try {
				
				$stmt = $conn->getConexion()->query($sql);
				$result = $stmt->setFetchMode(PDO::FETCH_NUM);
				while ($row = $stmt->fetch()) {
					$HistoriaClinica =  new HistoriaClinica($row[0], $row[1], $row[2], $row[3],  $row[4], $row[5]);
				}
				$conn=null;
				echo json_encode($HistoriaClinica);
				return json_encode($HistoriaClinica);
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