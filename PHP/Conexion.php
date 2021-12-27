<?php
	class Conexion{
		var $servername;
		var $username;
		var $password;
		var $database;
		var $conn;
		var $estado_servidor;
		
		public function __construct(){
			$this->servername		= "localhost";
			$this->username 		= "root";
			$this->password 		= "";
			$this->database 	 	= "ginelife";
			$this->conexion			= null;
			$this->estado_servidor	= "desconectado"; 
			try {
				$this->conexion = new PDO("mysql:host=$this->servername;dbname=$this->database", $this->username, $this->password);
				$this->conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				$this->estado_servidor= "conectado";
			} catch(PDOException $e) {
				$this->conexion=null;
				$this->estado_servidor = "desconectado";
				echo json_encode($e);
			}
		}
		public function getConexion(){
			if($this->conexion!=null){
				return $this->conexion;
			}
		}
	}
?>