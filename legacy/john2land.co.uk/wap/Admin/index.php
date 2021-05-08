<?php

include '..\..\..\wapcode.php';

$user = $_COOKIE["user"];

if($user == "")
{
	$user = $_POST["user"];
}

if($_COOKIE["user"] == "")
{
	$postuser = $_POST["user"];
	$postpass = $_POST["pass"];

	if($postuser == "Simon")
	{
		if($postpass == "FTrack")
		{
			setcookie("user","1");
		}
	}
	else
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

}
else
{

wap();

?>

	<wml>
		<card id="main" title="John2Land.co.uk">
			<p align="center">
			Admin</p>
			<p align="left">
			<br/>
			<anchor>Checkpoint Mode
			<go method="post" href="checkpoints.php">
			</go>
			</anchor>
			<anchor>Undo Checkpoints
			<go method="post" href="undo.php">
			</go>
			</anchor>
			<a href="notes.php">Notes</a>
			<br/>
			<br/>
			<anchor>Log Out
			<go method="post" href="clear.php">
			</go>
			</anchor>
			</p>
		</card>
	</wml>
<?php

}