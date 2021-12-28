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
	}
?>