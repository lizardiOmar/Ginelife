<?php
	include 'Conexion.php';
	class AntecedentesPersonalesPatologicos{
		var $idAntecedentesPersonalesPatologicos;
		var $Diabetes;
		var $Cardiopatias;
		var $HTA;
		var $Epilepsia;
		var $Neoplasticos;
		var $idHistoriaClinica;
		public function __construct($idAntecedentesPersonalesPatologicos, $Diabetes, $Cardiopatias, $HTA, $Epilepsia, $Neoplasticos, $idHistoriaClinica){
			$this->idAntecedentesPersonalesPatologicos=$idAntecedentesPersonalesPatologicos;
			$this->Diabetes=$Diabetes;
			$this->Cardiopatias=$Cardiopatias;
			$this->HTA=$HTA;
			$this->Epilepsia=$Epilepsia;
			$this->Neoplasticos=$Neoplasticos; 	
			$this->idHistoriaClinica=$idHistoriaClinica;	
		}
		public function setAntecedentesPerPat(){
			$conn=new Conexion();
			$query="INSERT INTO antecedentespersonalespatologicos (idAntecedentesPersonalesPatologicos, Diabetes, Cardiopatias, HTA, Epilepsia, Nefropatias, idHistoriaClinica) VALUES ($this->idAntecedentesPersonalesPatologicos, $this->Diabetes, $this->Cardiopatias, $this->HTA,$this->Epilepsia, $this->Neoplasticos, $this->idHistoriaClinica)";
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