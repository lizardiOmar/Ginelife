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
			$query="INSERT INTO adicciones (idAdicciones, Tabaquismo, Alcoholismo, Drogas, idHistoriaClinica) VALUES ($this->idAdicciones, '$this->Tabaquismo', '$this->Alcoholismo', '$this->Drogas', $this->idHistoriaClinica)";
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
	}


?>