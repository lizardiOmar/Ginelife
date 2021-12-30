<?php
	include("Conexion.php");
	class Alergias{
		var $idAlergia;
		var $nombre;
		var $idHistoriaClinica;
		public function __construct($idAlergia, $nombre, $idHistoriaClinica){
			$this->idAlergia = $idAlergia;
			$this->nombre = $nombre;
			$this->idHistoriaClinica = $idHistoriaClinica;
		}
		public function setAlergia(){
			$conn=new Conexion();
			$query="INSERT INTO alergias (`idalergias`, `alergiaN`, `idHistoriaClinica`) VALUES ($this->idAlergia, '$this->nombre', $this->idHistoriaClinica);";
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
		public static function getAlergiasByHC($idHistoriaClinica){
			$response = null;
			$sql = "SELECT * FROM alergias where idHistoriaClinica=$idHistoriaClinica;";
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