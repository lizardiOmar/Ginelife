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
	}
?>