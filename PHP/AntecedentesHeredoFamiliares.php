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
		public static function getAntecedentesByHC($idHistoriaClinica){
			$response = null;
			$conn=new Conexion();
			$sql = "SELECT * FROM antecedentesheredofamiliares where idHistoriaClinica=$idHistoriaClinica";
			try {
				
				$stmt = $conn->getConexion()->query($sql);
				$result = $stmt->setFetchMode(PDO::FETCH_NUM);
				while ($row = $stmt->fetch()) {
					$antecedentesHF =  new AntecedentesHeredoFamiliares($row[0], $row[1], $row[2], $row[3],  $row[4], $row[5], $row[6],  $row[7]);
				}
				$conn=null;
				echo json_encode($antecedentesHF);
				return json_encode($antecedentesHF);
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