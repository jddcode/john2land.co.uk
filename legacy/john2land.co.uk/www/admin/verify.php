<?php

    // Modern patching
    require_once('/usr/local/scripts/libs/db.inc');

// Old code

openDB('john2land');

$error = 0;

if($_POST["password"] <> "FTrack")
{
	if($_COOKIE["valid"] <> 1)
	{
		print "err";
		$error = 1;
	}
	else
	{
		$commentid = $_GET["commentid"];
		$action = $_GET["action"];

		if($commentid != "" && $action != "")
		{
			if($action == 0)
			{
				$query = "delete from comments where commentid = '${commentid}'";
			}
			else
			{
				$query = "update comments set approved = '1' where commentid = '${commentid}'";
			}
			
			mysql_query($query);
		}
	}
}

if($error == 0)
{

	setcookie("valid","1");

	$query = "select c.commentid, c.name, s.subject, c.comment from comments c, commentssubjects s where c.subject = s.subjectid and c.approved is null order by c.commentid";

	$result = mysql_query($query);
	
	$count = mysql_num_rows($result);

?>

<html>
<head>
<title>John O'Groats To Lands End Contact</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>

<body bgcolor="#FFFFFF" text="#0000A0" link="#0080C0" vlink="#0080FF" alink="#0080C0">

<form method="post" action="/admin/verify.php">
  <p align="center"><font face="Verdana" size="4"><b><i><font color="#666699">Contact 
    Us For</font> <font color="#0000CC"><a href="http://www.cancerresearchuk.org/">Cancer 
    Research UK</a> <font color="#666699">and</font> <a href="http://www.clic.uk.com">CLIC</a></font></i></b></font></p>
<p align="center"> 
  <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0" width="100" height="22" name="index">
    <param name="BASE" value=".">
    <param name=movie value="../button2.swf">
    <param name=quality value=high>
    <param name="BGCOLOR" value="">
    <embed src="../button2.swf" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="100" height="22" bgcolor="" name="index" base="."> 
    </embed> </object>
  <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0" width="100" height="22" name="Team">
    <param name="BASE" value=".">
    <param name=movie value="../button3.swf">
    <param name=quality value=high>
    <param name="BGCOLOR" value="">
    <embed src="../button3.swf" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="100" height="22" bgcolor="" name="Team" base="."> 
    </embed> </object>
  <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0" width="100" height="22" name="Equipment">
    <param name="BASE" value=".">
    <param name=movie value="../button4.swf">
    <param name=quality value=high>
    <param name="BGCOLOR" value="">
    <embed src="../button4.swf" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="100" height="22" bgcolor="" name="Equipment" base="."> 
    </embed> </object>
  <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0" width="100" height="22" name="route">
    <param name="BASE" value=".">
    <param name=movie value="../button5.swf">
    <param name=quality value=high>
    <param name="BGCOLOR" value="">
    <embed src="../button5.swf" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="100" height="22" bgcolor="" name="route" base="."> 
    </embed> </object>
  <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0" width="100" height="22" name="sponsors">
    <param name="BASE" value=".">
    <param name=movie value="../button6.swf">
    <param name=quality value=high>
    <param name="BGCOLOR" value="">
    <embed src="../button6.swf" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="100" height="22" bgcolor="" name="sponsors" base="."> 
    </embed> </object>
  <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0" width="100" height="22" name="help">
    <param name="BASE" value=".">
    <param name=movie value="../button7.swf">
    <param name=quality value=high>
    <param name="BGCOLOR" value="">
    <embed src="../button7.swf" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="100" height="22" bgcolor="" name="help" base="."> 
    </embed> </object>
  <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0" width="100" height="22" name="contact">
    <param name="BASE" value=".">
    <param name=movie value="../button8.swf">
    <param name=quality value=high>
    <param name="BGCOLOR" value="">
    <embed src="../button8.swf" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="100" height="22" bgcolor="" name="contact" base="."> 
    </embed> </object>
</p>
  <p align="center"><font face="Verdana" size="4" color="#666699">Visit us at 
    www.john2land.co.uk!</font></p>
  <table width="50%" border="1" align="center" bordercolor="#666699">
    <tr> 
      <td colspan="2"> <div align="center"><font color="#000000" size="3" face="Verdana"><strong>Verify 
          New Messages</strong></font></div></td>
    </tr>
<?php
	while($count > 0)
	{
		$data = mysql_fetch_row($result);		

		print "<tr>";
		print "<td width='50%'><div align='center'><font color='#666699' size='2' face='verdana'>${data[1]}</font></div></td>";
		print "<td width='50%'><div align='center'><font color='#666699' size='2' face='verdana'>${data[2]}</font></div></td>";
		print "</tr>";

		print "<tr>";
		print "<td colspan='2'><div align='center'><font color='#666699' size='2' face='verdana'>${data[3]}</font></div></td>";
		print "</tr>";

		print "<tr>";
		print "<td><div align='center'><a href='verify.php?commentid=${data[0]}&action=1'><font color='#666699' size='2' face='verdana'>Accept</font></a></div></td>";
		print "<td><div align='center'><a href='verify.php?commentid=${data[0]}&action=0'><font color='#666699' size='2' face='verdana'>Reject</font></a></div></td>";
		print "</tr>";

		print "<tr>";
		print "<td colspan='2'><font color='#666699' size='2' face='verdana'>&nbsp;</font></td>";
		print "</tr>";
	
		$count--;
	}
?>

  </table>
  <div align="center"><br>
    <a href="http://www.john2land.co.uk/admin/verify.php"><font color="#666699" size="4" face="Verdana">Refresh 
    </font></a></div>
  <div align="center"><br>
  </div>
</form>
</body>
</html>


<?php
}
