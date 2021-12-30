<?php
	include 'Conexion.php';
	class AntecedentesPersonalesQirurgicos{
		var $idAntecedentesPersonalesQuirurgicos;
		var $Nombre;
		var $Descripcion;
		var $YYYY;
		var $idHistoriaClinica;
		public function __construct($idAntecedentesPersonalesQuirurgicos, $Nombre, $Descripcion, $YYYY, $idHistoriaClinica){
			$this->idAntecedentesPersonalesQuirurgicos=$idAntecedentesPersonalesQuirurgicos;
			$this->Nombre=$Nombre;
			$this->Descripcion=$Descripcion;
			$this->YYYY=$YYYY;
			$this->idHistoriaClinica=$idHistoriaClinica;
		}
		public function setAntecedentesPQ(){
			$conn=new Conexion();
			$query="INSERT INTO antecedentespersonalesquirurgicos (idAntecedentesPersonalesQuirurgicos, Nombre, Descripcion, YYYY, idHistoriaClinica) VALUES ($this->idAntecedentesPersonalesQuirurgicos, '$this->Nombre', '$this->Descripcion', '$this->YYYY', $this->idHistoriaClinica);";
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
		public static function getQuirurgicosByHC($idHistoriaClinica){
			$response = null;
			$sql = "SELECT * FROM antecedentespersonalesquirurgicos where idHistoriaClinica=$idHistoriaClinica;";
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