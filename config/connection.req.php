<?php

	/*	Require	*/
	require_once 'config/database.req.php';
	require_once 'config/employee.req.php';

	/*	Connection */
	$database = new Database();
	$db = $database->connect();

?>
