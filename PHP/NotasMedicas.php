<?php
    include 'Conexion.php';
    class NotasMedicas{
        var $idnotaMedica;
        var $titulo;
        var $TA;
        var $FC;
        var $FR;
        var $T;
        var $descripcion;
        var $DD;
        var $MM;
        var $YYYY;
        var $idPaciente;
        public function __construct($idnotamedica, $titulo, $TA, $FC, $FR, $T, $descripcion, $DD, $MM, $YYYY, $idPaciente)
        {
            $this->idnotaMedica=$idnotamedica;
            $this->titulo=$titulo;
            $this->TA=$TA;
            $this->FC=$FC;
            $this->FR=$FR;
            $this->T=$T;
            $this->descripcion=$descripcion;
            $this->DD=$DD;
            $this->MM=$MM;
            $this->YYYY=$YYYY;
            $this->idPaciente=$idPaciente;
        }
        public function nuevaNota(){
			$conn=new Conexion();
			try{
				$query="INSERT INTO `ginelife`.`notamedica`
                (`idnotaMedica`,
                `titulo`,
                `TA`,
                `FC`,
                `FR`,
                `T`,
                `descripcion`,
                `DD`,
                `MM`,
                `YYYY`,
                `idPaciente`)
                VALUES
                ($this->idnotaMedica,
                '$this->titulo',
                '$this->TA',
                '$this->FC',
                '$this->FR',
                '$this->T',
                '$this->descripcion',
                '$this->DD',
                '$this->MM',
                '$this->YYYY',
                $this->idPaciente);";
				$conn->getConexion()->exec($query);
				$conn=null;
				return "creado";
			}catch(PDOException $e){
				return $e;
			}
		}
        public static function getNotasByPaciente($idPaciente){
			$response = null;
			$sql = "SELECT * FROM notamedica where idPaciente=$idPaciente order by idnotamedica asc;";
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
        public static function getNotaMedicaById($idnotaMedica){
			$response = null;
			$conn=new Conexion();
			$sql = "SELECT * FROM notamedica where idnotaMedica=$idnotaMedica";
			try {
				
				$stmt = $conn->getConexion()->query($sql);
				$result = $stmt->setFetchMode(PDO::FETCH_NUM);
				while ($row = $stmt->fetch()) {
					$notaMedica =  new NotasMedicas($row[0], $row[1], $row[2], $row[3],  $row[4], $row[5], $row[6], $row[7], $row[8], $row[9], $row[10]);
				}
				$conn=null;
				echo json_encode($notaMedica);
				return json_encode($notaMedica);
			} catch (PDOException $e) {
				return $e;
			}
		}
    }