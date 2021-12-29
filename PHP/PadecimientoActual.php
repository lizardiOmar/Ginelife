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
	}

?>