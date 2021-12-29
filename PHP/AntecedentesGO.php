<?php

	include("Conexion.php");
	class AntecedentesGO{
		var $idAntecedentesGO;
		var $Menarca;
		var $Ritmo;
		var $IVS;
		var $NoCompSex;
		var $G;
		var $P;
		var $A;
		var $C;
		var $Ectopico;
		var $Molar;
		var $FUP;
		var $FUM;
		var $FPP;
		var $idHistoriaClinica;
		public function __construct($idAntecedentesGO, $Menarca, $Ritmo, $IVS, $NoCompSex, $G, $P, $A, $C, $Ectopico, $Molar, $FUP, $FUM, $FPP, $idHistoriaClinica){
			$this->idAntecedentesGO = $idAntecedentesGO;
			$this->Menarca = $Menarca;
			$this->Ritmo = $Ritmo;
			$this->IVS = $IVS;
			$this->NoCompSex = $NoCompSex;
			$this->G = $G;
			$this->P = $P;
			$this->A = $A;
			$this->C = $C;
			$this->Ectopico = $Ectopico;
			$this->Molar = $Molar;
			$this->FUP = $FUP;
			$this->FUM = $FUM;
			$this->FPP = $FPP;
			$this->idHistoriaClinica = $idHistoriaClinica;
		}
		public function setAntecedentesGO(){
			$conn=new Conexion();
			$query="INSERT INTO  antecedentesginecologicosobstetricos (idAntecedentesGinecologicosObstetricos, Menarca, Ritmo, IVS, NoCompSex, G, P, A, C, Ectopico, Molar, FUP, FUM, FPP, idHistoriaClinica) VALUES ($this->idAntecedentesGO, '$this->Menarca', '$this->Ritmo', '$this->IVS', '$this->NoCompSex', '$this->G', '$this->P', '$this->A', '$this->C', '$this->Ectopico', '$this->Molar', '$this->FUP', '$this->FUM', '$this->FPP', $this->idHistoriaClinica)";
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