<?php
	include 'Conexion.php';
	class AntecedentesPersonalesPatologicos{
		var $idAntecedentesPersonalesPatologicos;
		var $Diabetes;
		var $Cardiopatias;
		var $HTA;
		var $Epilepsia;
		var $Nefropatias;
		var $idHistoriaClinica;
		public function __construct($idAntecedentesPersonalesPatologicos, $Diabetes, $Cardiopatias, $HTA, $Epilepsia, $Nefropatias, $idHistoriaClinica){
			$this->idAntecedentesPersonalesPatologicos=$idAntecedentesPersonalesPatologicos;
			$this->Diabetes=$Diabetes;
			$this->Cardiopatias=$Cardiopatias;
			$this->HTA=$HTA;
			$this->Epilepsia=$Epilepsia;
			$this->Nefropatias=$Nefropatias; 	
			$this->idHistoriaClinica=$idHistoriaClinica;	
		}
		public function setAntecedentesPerPat(){
			$conn=new Conexion();
			$query="INSERT INTO antecedentespersonalespatologicos (idAntecedentesPersonalesPatologicos, Diabetes, Cardiopatias, HTA, Epilepsia, Nefropatias, idHistoriaClinica) VALUES ($this->idAntecedentesPersonalesPatologicos, $this->Diabetes, $this->Cardiopatias, $this->HTA,$this->Epilepsia, $this->Nefropatias, $this->idHistoriaClinica)";
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
		public static function getAntecedentesPPByHC($idHistoriaClinica){
			$response = null;
			$conn=new Conexion();
			$sql = "SELECT * FROM antecedentespersonalespatologicos where idHistoriaClinica=$idHistoriaClinica";
			try {
				
				$stmt = $conn->getConexion()->query($sql);
				$result = $stmt->setFetchMode(PDO::FETCH_NUM);
				while ($row = $stmt->fetch()) {
					$antecedentesPP =  new AntecedentesPersonalesPatologicos($row[0], $row[1], $row[2], $row[3],  $row[4], $row[5], $row[6]);
				}
				$conn=null;
				echo json_encode($antecedentesPP);
				return json_encode($antecedentesPP);
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