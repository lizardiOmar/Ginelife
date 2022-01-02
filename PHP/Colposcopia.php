<?php
	include 'Conexion.php';
	class Colposcopia{
		var $idColposcopia;
		var $DD;
		var $MM;
		var $YYYY;
		var $idPaciente;
        public function __construct($idColposcopia, $DD, $MM, $YYYY, $idPaciente){
			$this->idColposcopia=$idColposcopia;
			$this->DD=$DD;
			$this->MM=$MM;
			$this->YYYY=$YYYY;
			$this->idPaciente=$idPaciente;
           
		}
        public function nuevaColposcopia(){
			$conn=new Conexion();
			try{
				$query="INSERT INTO `ginelife`.`colposcopia`
                (`idcolposcopia`, `DD`, `MM`, `YYYY`, `idPaciente`) VALUES ($this->idColposcopia, '$this->DD', '$this->MM', '$this->YYYY', $this->idPaciente);";
				$conn->getConexion()->exec($query);
				$conn=null;
                echo "Colposcopia iniciada";
			}catch(PDOException $e){
				$response = array(
					"SERVICIO"=>"DESCONECTADO",
					"ESTADO"=>"NO CREADO",
					"ERROR"=>$e
				);
				return $e;
			}
			
		}
    }
    