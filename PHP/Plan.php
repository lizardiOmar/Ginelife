<?php
	include 'Conexion.php';
    class Plan{
        var $idplan;
        var $planManejo;
        var $pronostico;
        var $idHistoriaClinica;
        public function __construct($idplan, $planManejo, $pronostico, $idHistoriaClinica){
            $this->idplan=$idplan;
            $this->planManejo=$planManejo;
            $this->pronostico=$pronostico;
            $this->idHistoriaClinica=$idHistoriaClinica;
        }
        public function setExploracion(){
			$conn=new Conexion();
			$query="INSERT INTO `ginelife`.`plan`
            (`idplan`,
            `planManejo`,
            `pronostico`,
            `idHistoriaClinica`)
            VALUES
            ($this->idplan,
            '$this->planManejo',
            '$this->pronostico',
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
        public static function getPlanByHC($idHistoriaClinica){
			$response = null;
			$sql = "SELECT * FROM plan where idHistoriaClinica=$idHistoriaClinica;";
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