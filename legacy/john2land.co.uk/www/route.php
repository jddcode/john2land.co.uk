<?php
	
include 'tools.php';

$link = mysql_connect('jddlan.com','apache','apache');
mysql_select_db("john2land");

$query = "select checkpointid,date,time,road,destination from checkpoints order by checkpointid";

$result = mysql_query($query);

$count = mysql_num_rows($result);

$imgCount = 1;

?>

<html>
<head>
<title>John O'Groats To Lands End Route</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>

<body bgcolor="#FFFFFF" text="#0000A0" link="#0080C0" vlink="#0080FF" alink="#0080C0">
<p align="center"><font face="Verdana" size="4"><b><i><font color="#666699">The 
  Route For</font> <font color="#0000CC"><a href="http://www.cancerresearchuk.org/">Cancer 
  Research UK</a> <font color="#666699">and</font> <a href="http://www.clic.uk.com">CLIC</a></font></i></b></font></p>
<p align="center"><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0" width="100" height="22" name="index">
    <param name="BASE" value=".">
    <param name=movie value="button2.swf">
    <param name=quality value=high>
    <param name="BGCOLOR" value="">
    <embed src="button2.swf" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="100" height="22" bgcolor="" name="index" base=".">
    </embed> 
  </object><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0" width="100" height="22" name="Team">
    <param name="BASE" value=".">
    <param name=movie value="button3.swf">
    <param name=quality value=high>
    <param name="BGCOLOR" value="">
    <embed src="button3.swf" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="100" height="22" bgcolor="" name="Team" base=".">
    </embed> 
  </object><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0" width="100" height="22" name="Equipment">
    <param name="BASE" value=".">
    <param name=movie value="button4.swf">
    <param name=quality value=high>
    <param name="BGCOLOR" value="">
    <embed src="button4.swf" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="100" height="22" bgcolor="" name="Equipment" base=".">
    </embed> 
  </object><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0" width="100" height="22" name="route">
    <param name="BASE" value=".">
    <param name=movie value="button5.swf">
    <param name=quality value=high>
    <param name="BGCOLOR" value="">
    <embed src="button5.swf" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="100" height="22" bgcolor="" name="route" base=".">
    </embed> 
  </object><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0" width="100" height="22" name="sponsors">
    <param name="BASE" value=".">
    <param name=movie value="button6.swf">
    <param name=quality value=high>
    <param name="BGCOLOR" value="">
    <embed src="button6.swf" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="100" height="22" bgcolor="" name="sponsors" base=".">
    </embed> 
  </object><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0" width="100" height="22" name="help">
    <param name="BASE" value=".">
    <param name=movie value="button7.swf">
    <param name=quality value=high>
    <param name="BGCOLOR" value="">
    <embed src="button7.swf" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="100" height="22" bgcolor="" name="help" base=".">
    </embed> 
  </object><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0" width="100" height="22" name="contact">
    <param name="BASE" value=".">
    <param name=movie value="button8.swf">
    <param name=quality value=high>
    <param name="BGCOLOR" value="">
    <embed src="button8.swf" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="100" height="22" bgcolor="" name="contact" base=".">
    </embed> 
  </object></p>
<p align="center">&nbsp;</p>
<p><font size="3"><font face="Verdana" color="#666699" size="4">This is our planned 
  route. This may change slightly as we go incase of road works or other hazards 
  ! As we progress you will see details of the date and time that we have reached 
  each location. This will be done via a special login to our WAP site which doesnt 
  look much different to the public WAP area but gives us a 'link' to click on. 
  </font><font size="3"><font face="Verdana" color="#666699" size="4">This then 
  changes to our next destination as well as reporting back to you exactly where 
  we are and when.</font></font></font></p>
<p><i><font face="Verdana" size="4" color="#CC3300">This shows our actual progress. Click on image link to view pictures.</font></i></p>
<p align="center"><font face="Verdana" color="#666699" size="4"> </font></p>
<table width="75%" border="1" align="center" bordercolor="#666699">
  <tr> 
    <td width="20%"><div align="center"><strong><font color="#666699" size="3" face="Verdana">Destination</font></strong></div></td>
    <td width="20%"><div align="center"><font color="#666699" size="3" face="Verdana"><strong>Road</strong></font></div></td>
    <td width="20%"><div align="center"><strong><font color="#666699" size="3" face="Verdana">Date</font></strong></div></td>
    <td width="20%"><div align="center"><strong><font color="#666699" size="3" face="Verdana">Time</font></strong></div></td>
    <td width="20%"><div align="center"><strong><font color="#666699" size="3" face="Verdana">Image</font></strong></div></td>
  </tr>
  <?php
	while($count > 0)
	{
		$data = mysql_fetch_row($result);

		if($data[1] == "")
		{
			$date = "-";
		}
		else
		{
			$date = $data[1];
			$date = substr($date,8,2) . "." . substr($date,5,2) . "." . substr($date,0,4);
		}
	
		if($data[2] == "")
		{
			$time = "-";
		}
		else
		{
			$time = $data[2];
		}

		if($data[3] == "")
		{
			$road = "-";
		}
		else
		{
			$road = $data[3];
		}
		
		$destination = $data[4];
		
		if($data[2] != "")
		{
			$file = $imgCount . ".jpg";
			$check = is_readable($file);

			print "<tr>";
				print "<td><div align='center'><font color='#666699' size='3' face='Verdana'>${destination}</font></div></td>";
				print "<td><div align='center'><font color='#666699' size='3' face='Verdana'>${road}</font></div></td>";
				print "<td><div align='center'><font color='#666699' size='3' face='Verdana'>${date}</font></div></td>";
				print "<td><div align='center'><font color='#666699' size='3' face='Verdana'>${time}</font></div></td>";
				if($check)
				{
					print "<td><div align='center'>";
					print "<input type='button' value='View Picture' name='John2Land Picture' onClick=\"window.open('pic.php?pic=${file}','PictureWindow','width=640,height=480')\">";
					print "<font color='#666699' size='3' face='Verdana'></font></a></div></td>";
				}
				else
				{	
					print "<td><div align='center'><font color='#666699' size='3' face='Verdana'>-</font></div></td>";
				}
			print "</tr>";
		}
		else
		{
			print "<tr>";
				print "<td><div align='center'><font color='#666699' size='3' face='Verdana'>${destination}</font></div></td>";
				print "<td><div align='center'><font color='#666699' size='3' face='Verdana'>${road}</font></div></td>";
				print "<td><div align='center'><font color='#666699' size='3' face='Verdana'>${date}</font></div></td>";
				print "<td><div align='center'><font color='#666699' size='3' face='Verdana'>-</font></div></td>";
				print "<td><div align='center'><font color='#666699' size='3' face='Verdana'>-</font></div></td>";
			print "</tr>";
		}

		$count--;
		$imgCount++;
	}

?>
</table>
<p align="center"><font face="Verdana" color="#666699" size="4"> 
  </font></p>
<p align="center">&nbsp;</p>
<p align="center"><br>
</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp; </p>
</body>
</html>
