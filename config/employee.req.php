<?php

	class Employee{
		private $connection;
		private $table = 'employees';

		public function __construct($db){
			$this->connection = $db;
		}

		public function select(){
			$query = 'SELECT * FROM ' .$this->table;
			$stmt = $this->connection->prepare($query);
			$stmt->execute();
			return $stmt;
		}
	}

?>
