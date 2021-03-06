<?php
	include("Conexion.php");
	class PadecimientoActual{
		var $idPadecimentoActual;
		var $Nombre;
		var $Descripcion;
		var $idHistoriaClinica;
		public function __construct($idPadecimentoActual, $Nombre, $Descripcion, $idHistoriaClinica){
			$this->idPadecimentoActual = $idPadecimentoActual;
			$this->Nombre = $Nombre;
			$this->Descripcion = $Descripcion;
			$this->idHistoriaClinica = $idHistoriaClinica;
		}
		public function setPadecimiento(){
			$conn=new Conexion();
			$query="INSERT INTO padecimientoactual (`idpadecimientoActual`, `nombre`, `descripcion`, `idHistoriaClinica`) VALUES ($this->idPadecimentoActual, '$this->Nombre', '$this->Descripcion', '$this->idHistoriaClinica');";
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
		public static function getPadecimientosByHC($idHistoriaClinica){
			$response = null;
			$sql = "SELECT * FROM padecimientoactual where idHistoriaClinica=$idHistoriaClinica;";
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