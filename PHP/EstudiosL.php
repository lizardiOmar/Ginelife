<?php
	include 'Conexion.php';
    class EstudiosL{
        var $idestudios_lab;
		var $grupoSanguineo;
		var $RH;
		var $hemoglobina;
		var $Hematocrito;
		var $Leucocitos;
		var $Plaquetas;
		var $TP;
		var $TPT;
		var $Glucosa;
		var $VDRL;
		var $HIV;
        var $idHistoriaClinica;
        public function __construct($idestudios_lab, $grupoSanguineo, $RH, $hemoglobina, $Hematocrito, $Leucocitos, $Plaquetas, $TP, $TPT, $Glucosa, $VDRL, $HIV, $idHistoriaClinica){
            $this->idestudios_lab=$idestudios_lab;
			$this->grupoSanguineo=$grupoSanguineo;
			$this->RH=$RH;
			$this->hemoglobina=$hemoglobina;
			$this->Hematocrito=$Hematocrito;
			$this->Leucocitos=$Leucocitos;
			$this->Plaquetas=$Plaquetas;
			$this->TP=$TP;
			$this->TPT=$TPT;
			$this->Glucosa=$Glucosa;
			$this->VDRL=$VDRL;
			$this->HIV=$HIV;
			$this->idHistoriaClinica=$idHistoriaClinica;
        }
        public function setExploracion(){
			$conn=new Conexion();
			$query="INSERT INTO `ginelife`.`estudios_lab`
            (`idestudios_lab`,
            `grupoSanguineo`,
            `RH`,
            `hemoglobina`,
            `Hematocrito`,
            `Leucocitos`,
            `Plaquetas`,
            `TP`,
            `TPT`,
            `Glucosa`,
            `VDRL`,
            `HIV`,
            `idHistoriaClinica`)
            VALUES
            ($this->idestudios_lab,
            '$this->grupoSanguineo',
            '$this->RH',
            '$this->hemoglobina',
            '$this->Hematocrito',
            '$this->Leucocitos',
            '$this->Plaquetas',
            '$this->TP',
            '$this->TPT',
            '$this->Glucosa',
            '$this->VDRL',
            '$this->HIV',
            $this->idHistoriaClinica);
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
		public static function getEstudiosByHC($idHistoriaClinica){
			$response = null;
			$sql = "SELECT * FROM estudios_lab where idHistoriaClinica=$idHistoriaClinica;";
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