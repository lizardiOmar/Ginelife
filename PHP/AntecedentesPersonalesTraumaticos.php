<?php
	include 'Conexion.php';
	class AntecedentesPersonalesTraumaticos{
		var $idAntecedentesPersonalesTraumaticos;
		var $Nombre;
		var $Descripcion;
		var $YYYY;
		var $idHistoriaClinica;
		public function __construct($idAntecedentesPersonalesTraumaticos, $Nombre, $Descripcion, $YYYY, $idHistoriaClinica){
			$this->idAntecedentesPersonalesTraumaticos=$idAntecedentesPersonalesTraumaticos;
			$this->Nombre=$Nombre;
			$this->Descripcion=$Descripcion;
			$this->YYYY=$YYYY;
			$this->idHistoriaClinica=$idHistoriaClinica;
		}
		public function setAntecedentesPT(){
			$conn=new Conexion();
			$query="INSERT INTO antecedentespersonalestraumaticos (idAntecedentesPersonalesTraumaticos, Nombre, Descripcion, YYYY, idHistoriaClinica) VALUES ($this->idAntecedentesPersonalesTraumaticos, '$this->Nombre', '$this->Descripcion', '$this->YYYY', $this->idHistoriaClinica);";
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
		public static function getTraumaticosByHC($idHistoriaClinica){
			$response = null;
			$sql = "SELECT * FROM antecedentespersonalestraumaticos where idHistoriaClinica=$idHistoriaClinica;";
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
				echo json_encode($response);
			}
		}
	}


?>