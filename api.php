<?php
	require_once 'config/connection.req.php';
	header('Content-Type: application/json');

	$dataObject['data'] = null;
	$employee = new Employee($db);
	$select = $employee->select();
	$rows = $select->rowCount();
	$dataObject['data'] = $select->fetchAll(PDO::FETCH_ASSOC);
	switch ($dataObject['data']) {
		case null:
			$dataObject['config'] = array(
				'success' => 204,
				'source' => $_SERVER['HTTP_HOST'],
				'message' => 'Processed, but no content',
				'lastUpdated' => 'Feb 21, 2019'
			);
			break;
		default:
			$dataObject['config'] = array(
				'success' => 200,
				'source' => $_SERVER['HTTP_HOST'],
				'message' => 'Data fetched successfully',
				'lastUpdated' => 'Feb 21, 2019'
			);
			break;
	}
	$json = json_encode($dataObject, JSON_PRETTY_PRINT);
	echo $json;
?>
