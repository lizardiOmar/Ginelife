<?php
	include 'Conexion.php';
	class Paciente{
		var $idPaciente;
		var $Nombres;
		var $Apellidos;
		var $Edad;
		var $EstadoCivil;
		var $Ocupacion;
		var $Escolaridad;
		var $CiudadDeNacimiento;
		var $idDoctora;
		public function __construct($idPaciente, $Nombres, $Apellidos, $Edad, $EstadoCivil, $Ocupacion, $Escolaridad, $CiudadDeNacimiento, $idDoctora){
			$this->idPaciente=$idPaciente;
			$this->Nombres=$Nombres;
			$this->Apellidos=$Apellidos;
			$this->Edad=$Edad;
			$this->EstadoCivil=$EstadoCivil;
			$this->Ocupacion=$Ocupacion;
			$this->Escolaridad=$Escolaridad;
			$this->CiudadDeNacimiento=$CiudadDeNacimiento;
			$this->idDoctora=$idDoctora;
		}
		public function nuevoPaciente(){
			$conn=new Conexion();
			try{
				$query="INSERT INTO pacientes (idPacientes, Nombres, Apellidos, Edad, EstadoCivil, Ocupacion, Escolaridad, CiudadDeNacimiento, idDoctora)
				VALUES ($this->idPaciente, '$this->Nombres', '$this->Apellidos', '$this->Edad', '$this->EstadoCivil', '$this->Ocupacion', '$this->Escolaridad', '$this->CiudadDeNacimiento', $this->idDoctora)";
				$conn->getConexion()->exec($query);
				
				$conn=null;
				return "creado";
			}catch(PDOException $e){
				$response = array(
					"SERVICIO"=>"DESCONECTADO",
					"ESTADO"=>"NO CREADO",
					"ERROR"=>$e
				);
				return $e;
			}
			
		}
		public static function getPacienteRegistro($nombres, $apellidos, $edad, $ciudad){
			$response=null;
			$conn=new Conexion();
			$query="SELECT * FROM pacientes where Nombres='$nombres' and Apellidos='$apellidos' and Edad='$edad' and CiudadDeNacimiento='$ciudad'";
			try{
				$stmt=$conn->getConexion()->query($query);
				$result=$stmt->setFetchMode(PDO::FETCH_NUM);
				while ($row = $stmt->fetch()) {
					$Paciente =  new Paciente($row[0], $row[1], $row[2], $row[3],  $row[4], $row[5], $row[6], $row[7],  $row[8]);
				}
				$conn=null;
				echo json_encode($Paciente);
				return json_encode($Paciente);
			}catch (PDOException $e) {
				$response = null;
				$response = array(
					"estado"=>"FALLIDO",
					"cliente"=>"NULL"
				);
				
				return $response;
			}
		}
		public static function getPacientesByDoctor($idDoctora){
			$response = null;
			$sql = "SELECT * FROM pacientes where idDoctora=$idDoctora order by Apellidos asc;";
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
		public static function getPacienteByID($idPaciente){
			$response=null;
			$conn=new Conexion();
			$query="SELECT * FROM pacientes where idPacientes=$idPaciente";
			try{
				$stmt=$conn->getConexion()->query($query);
				$result=$stmt->setFetchMode(PDO::FETCH_NUM);
				while ($row = $stmt->fetch()) {
					$Paciente =  new Paciente($row[0], $row[1], $row[2], $row[3],  $row[4], $row[5], $row[6], $row[7],  $row[8]);
				}
				$conn=null;
				echo json_encode($Paciente);
				return json_encode($Paciente);
			}catch (PDOException $e) {
				$response = null;
				$response = array(
					"estado"=>"FALLIDO",
					"cliente"=>"NULL"
				);
				
				return $response;
			}
		}
	}

	
?>