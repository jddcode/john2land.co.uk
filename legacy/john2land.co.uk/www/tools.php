<?php

function hits($page)
{
	$link = mysql_connect('jddlan.com','apache','apache');
	mysql_select_db("john2land");

	$ip = getenv("REMOTE_ADDR");
	$client = getenv("HTTP_USER_AGENT");
	$Date = date("Y-m-d");
	$hourdiff = "0";
	$timeadjust = ($hourdiff * 60 * 60);
	$Time = date("H:i:s");

	$query = "insert into hits (page,ip,date,time,system) values ('${page}','${ip}','${Date}','${Time}','${client}')";
	mysql_query($query);

	$query = "select count(*) from hits";
	$result = mysql_query($query);

	$data = mysql_fetch_row($result);
	$count = $data[0];

	mysql_close($link);

	$length = strlen($count);
	$target = 8;

	while($length < $target)
	{
		$count = "0" . $count;

		$length++;
	}

	return $count;
}
