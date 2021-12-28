<?php
	include 'Conexion.php';
	class AntecedentesHeredoFamiliares{
		var $idAntecedentesHeredoFamiliares;
		var $Diabetes;
		var $Cardiopatias;
		var $HTA;
		var $Tiroides;
		var $Neoplasticos;
		var $Especificaciones;
		var $idHistoriaClinica;
		public function __construct($idAntecedentesHeredoFamiliares, $Diabetes, $Cardiopatias, $HTA, $Tiroides, $Neoplasticos, $Especificaciones, $idHistoriaClinica){
			$this->idAntecedentesHeredoFamiliares=$idAntecedentesHeredoFamiliares;
			$this->Diabetes=$Diabetes;
			$this->Cardiopatias=$Cardiopatias;
			$this->HTA=$HTA;
			$this->Tiroides=$Tiroides;
			$this->Neoplasticos=$Neoplasticos; 	
			$this->Especificaciones=$Especificaciones;
			$this->idHistoriaClinica=$idHistoriaClinica;	
		}
		public function setAntecedentesHF(){
			$conn=new Conexion();
			$query="INSERT INTO antecedentesheredofamiliares (idAntecedentesHeredoFamiliares, Diabetes, Cardiopatias, HTA, Tiroides, Neoplasticos, Especificaciones, idHistoriaClinica) VALUES ($this->idAntecedentesHeredoFamiliares, $this->Diabetes, $this->Cardiopatias, $this->HTA, $this->Tiroides, $this->Neoplasticos, '$this->Especificaciones', $this->idHistoriaClinica)";
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
			echo json_encode($response);
			
		}
	}
	

?>