<?php

$link = mysql_connect("127.0.0.1","web","web");
mysql_select_db("jddlanmembers");

//$query = "describe members";

//$query 		=	"select 	m.memberid,
//					m.username,
//					m.password,
//					m.name,
//					m.surname,
//					m.email,
//					m.verified,
//					a.balance
//
//			from jddlanmembers.members m,
//			jddlanaccounts.accounts a
//			
//			where a.memberid = m.memberid";

//$query = "select * from transactions";

//$query = "describe transactions";

$query = "select 1 + 1";

$result = mysql_query($query);
$count = mysql_num_rows($result);

while($count > 0)
{
	$data = mysql_fetch_row($result);

	print "${data[0]} ${data[1]} ${data[2]} ${data[3]} ${data[4]} ${data[5]} ${data[6]} ${data[7]} ${data[8]} ${data[9]} ${data[10]} ${data[11]} ${data[12]} ${data[13]} ${data[14]} ${data[15]} ${data[16]}<br><br>";

	$count--;
}