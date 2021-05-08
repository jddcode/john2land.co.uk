<?php

include '..\..\..\wapcode.php';

$user = $_COOKIE["user"];

if($user == "")
{

wap();

?>
	<wml>
		<card id="main" title="John2Land.co.uk">
			<p align="center">
			Please Log In
			</p>
			<p align="left">
			<br/>User: <input type="text" title="User Name" name="user"/>
			<br/><br/>
			Password: <input type="password" title="password" name="pass"/>
			<br/>
			<br/>
			<anchor>Log In
			<go method="post" href="index.php">
				<postfield name="user" value="$user"/>
				<postfield name="pass" value="$pass"/>
			</go>
			</anchor>
			</p>
		</card>
	</wml>

<?php

}
else
{	
	$checkPointID = $_GET["checkpoint"];

	$link = mysql_connect("127.0.0.1","web","web");
	mysql_select_db("john2land");

	$hourdiff = "0";
	$timeadjust = ($hourdiff * 60 * 60);
	$Time = date("H:i:s");

	$query = "update checkpoints set time = null, date = null where checkpointID = '${checkPointID}'";
	mysql_query($query);

	$query = "select checkpointid,destination,road from checkpoints where time is not null order by checkpointid desc";
	$result = mysql_query($query);
	$data = mysql_fetch_row($result);

	wap();

?>

	<wml>
		<card id="main" title="John2Land.co.uk">
			<p align="center">
			<br/>
			<anchor>
<?php 
				if($data[1] == "")
				{
					print "No Road!";
				}
				else
				{
					print "${data[1]} - ${data[2]}";
				}
?>
			<go method="post" href="undoCheckpoint.php?checkpoint=<?php print $data[0]; ?>">
			</go>
			</anchor>
			<br/>
			</p>
			<p align="left">
			<br/>
			<anchor>Back
			<go method="post" href="http://wap.john2land.co.uk/admin/">
			</go>
			</anchor>
			</p>
		</card>
	</wml>

<?php
}