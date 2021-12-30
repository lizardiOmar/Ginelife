<?php
	include 'Conexion.php';
	class Adicciones{
		var $idAdicciones;
		var $Tabaquismo;
		var $Alcoholismo;
		var $Drogas;
		var $idHistoriaClinica;
		public function __construct($idAdicciones, $Tabaquismo, $Alcoholismo, $Drogas, $idHistoriaClinica){
			$this->idAdicciones=$idAdicciones;
			$this->Tabaquismo=$Tabaquismo;
			$this->Alcoholismo=$Alcoholismo;
			$this->Drogas=$Drogas;
			$this->idHistoriaClinica=$idHistoriaClinica;
		}
		public function setAdicciones(){
			$conn=new Conexion();
			$query="INSERT INTO adicciones (idAdicciones, Tabaquismo, Alcoholismo, Drogas, idHistoriaClinica) VALUES ($this->idAdicciones, $this->Tabaquismo, $this->Alcoholismo, $this->Drogas, $this->idHistoriaClinica)";
			try{
				$conn->getConexion()->exec($query);
				$conn=null;
				echo "creado";
				return "creado";
			}catch(PDOException $e){
				$response = array(
					"SERVICIO"=>"DESCONECTADO",
					"ESTADO"=>"NO CREADO",
					"ERROR"=>$e
				);
				echo $e;
				return $e;
			}
		}
		public static function getAdiccionesByHC($idHistoriaClinica){
			$response = null;
			$conn=new Conexion();
			$sql = "SELECT * FROM adicciones where idHistoriaClinica=$idHistoriaClinica";
			try {
				
				$stmt = $conn->getConexion()->query($sql);
				$result = $stmt->setFetchMode(PDO::FETCH_NUM);
				while ($row = $stmt->fetch()) {
					$adicciones =  new Adicciones($row[0], $row[1], $row[2], $row[3],  $row[4]);
				}
				$conn=null;
				echo json_encode($adicciones);
				return json_encode($adicciones);
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