<?php
	include 'Conexion.php';
	class Exploracion{
		var $idexploracionG;
		var $consciente;
		var $habitus;
		var $peso;
		var $estatura;
		var $TA;
		var $FC;
		var $FR;
		var $temperatura;
		var $pulmonesB;
		var $pulmonesT;
		var $corazonB;
		var $corazonT;
		var $cabezaB;
		var $cabezaT;
		var $cuelloB;
		var $cuelloT;
		var $idHistoriaClinica;
		public function __construct($idexploracionG, $consciente, $habitus, $peso, $estatura, $TA, $FC, $FR, $temperatura, $pulmonesB, $pulmonesT, $corazonB, $corazonT, $cabezaB, $cabezaT, $cuelloB, $cuelloT, $idHistoriaClinica){
			$this->idexploracionG=$idexploracionG;
			$this->consciente=$consciente;
			$this->habitus=$habitus;
			$this->peso=$peso;
			$this->estatura=$estatura;
			$this->TA=$TA;
			$this->FC=$FC;
			$this->FR=$FR;
			$this->temperatura=$temperatura;
			$this->pulmonesB=$pulmonesB;
			$this->pulmonesT=$pulmonesT;
			$this->corazonB=$corazonB;
			$this->corazonT=$corazonT;
			$this->cabezaB=$cabezaB;
			$this->cabezaT=$cabezaT;
			$this->cuelloB=$cuelloB;
			$this->cuelloT=$cuelloT;
			$this->idHistoriaClinica=$idHistoriaClinica;
		}
		public function setExploracion(){
			$conn=new Conexion();
			$query="INSERT INTO `ginelife`.`exploraciong` (`idexploracionG`, `consciente`, `habitus`, `peso`, `estatura`,	`TA`, `FC`,	`FR`, `temperatura`, `pulmonesB`, `pulmonesT`, `corazonB`,`corazonT`, `cabezaB`, `cabezaT`, `cuelloB`, `cuelloT`,`idHistoriaClinica`) VALUES ($this->idexploracionG, $this->consciente, '$this->habitus',' $this->peso',	'$this->estatura','$this->TA', '$this->FC', '$this->FR', '$this->temperatura', $this->pulmonesB, '$this->pulmonesT', $this->corazonB, '$this->corazonT', $this->cabezaB, '$this->cabezaT', $this->cuelloB, '$this->cuelloT', $this->idHistoriaClinica);
			";
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
		public static function getExploracionByHC($idHistoriaClinica){
			$response = null;
			$sql = "SELECT * FROM exploraciong where idHistoriaClinica=$idHistoriaClinica;";
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