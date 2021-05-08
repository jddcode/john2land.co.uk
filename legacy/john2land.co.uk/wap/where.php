<?php

include '..\..\wapcode.php';

wap();

$link = mysql_connect("127.0.0.1","web","web");
mysql_select_db("john2land");


//Production query. Roll to this when DB is upgraded.
//---------------------------------------------------
$query = "	select road,town,city,county,time,day 
		from checkpoints where time is not null order by checkpointid desc";

$query = "	select road, destination, time from checkpoints where time is not null order by checkpointid desc";

$result = mysql_query($query);
$data = mysql_fetch_row($result);
$count = mysql_num_rows($result);


?>

<wml>
	<card id="main" title="John2Land.co.uk">
		<p align="center">
<?php
		if($count < 1)
		{
			print "Where Are They?";
		}
		else
		{
			//print "Day ${data[5]} of 10";
			print "Day data goes here";
		}
?>
		<br/>
<?php 
		if($count < 1)
		{
			print "<br/>The Journey Begins, soon!";
		}
		else
		{			

			print "</p>";
			print "<p align='left'><br/>";			

			print "<a href='progress.php'>";
			print substr($data[2],0,5);
			print "</a>";
			print "<br/>";	

			print $data[0];

			print "<br/>";

			if($data[1] == "")
			{
			}
			else
			{ 
				print $data[1];
				print "<br/>";
			}

			//print "${data[2]} <br/> ${data[3]}";
		} 
?>
		</p>
	</card>
</wml>