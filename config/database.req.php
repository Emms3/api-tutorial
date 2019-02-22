<?php

	class Database {
		private $host = 'localhost';
		private $charset = 'utf8mb4';

		private $username = 'root';
		private $password = '';

		private $db_name = 'api';

		public function connect(){
			try {
				$dsn = 'mysql:host=' . $this->host . ';dbname=' . $this->db_name . ';charset=' .$this->charset;
				$pdo = new PDO($dsn, $this->username, $this->password);
				$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				return $pdo;
			} catch (PDOException $e) {
				echo "Connection failed: " .$e.getMessage();
				die();
			}
		}

	}
?>
