<?php

//include '..\..\waptools.php';

//wap();

$link = mysql_connect("127.0.0.1","web","web");
mysql_select_db("john2land");

$query = "describe checkpoints";
$result = mysql_query($query);
$count = mysql_num_rows($result);

while ($count > 0)
{
	$data = mysql_fetch_row($result);

	print "${data[0]}<br>";

	$count--;
}

?>
