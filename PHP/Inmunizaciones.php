<?php
	include 'Conexion.php';
	class Inmunizaciones{
		var $idInmunizaciones;
		var $rubeola;
		var $influenza;
		var $antitetanica;
		var $covid19;
		var $idHistoriaClinica;
		public function __construct($idInmunizaciones, $rubeola, $influenza, $antitetanica, $covid19, $idHistoriaClinica){
			$this->idInmunizaciones=$idInmunizaciones;
			$this->rubeola=$rubeola;
			$this->influenza=$influenza;
			$this->antitetanica=$antitetanica;
			$this->covid19=$covid19;
			$this->idHistoriaClinica=$idHistoriaClinica;
		}
		public function setInmunizaciones(){
			$conn=new Conexion();
			$query="INSERT INTO inmunizaciones (idInmunizaciones, Rubeola, Influenza, Antitetanica, Covid19, idHistoriaClinica) VALUES ($this->idInmunizaciones, $this->rubeola, $this->influenza, $this->antitetanica, $this->covid19, $this->idHistoriaClinica)";
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
				echo ""+$e;
				return $e;
			}
		}
		public static function getInmunizacionesByHC($idHistoriaClinica){
			$response = null;
			$conn=new Conexion();
			$sql = "SELECT * FROM inmunizaciones where idHistoriaClinica=$idHistoriaClinica";
			try {
				
				$stmt = $conn->getConexion()->query($sql);
				$result = $stmt->setFetchMode(PDO::FETCH_NUM);
				while ($row = $stmt->fetch()) {
					$inmunizaciones =  new Inmunizaciones($row[0], $row[1], $row[2], $row[3],  $row[4], $row[5]);
				}
				$conn=null;
				echo json_encode($inmunizaciones);
				return json_encode($inmunizaciones);
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