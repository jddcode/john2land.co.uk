<?php

/*
    ===============================================
    John2Land Website
    Brought back from deep storage and renovated to
    work again
    ===============================================

    2005-09-01  JDD     Renovated
*/

    require_once('/usr/local/scripts/global.inc');

    tracking();

    // Old document starts from here

include 'tools.php';

$count = hits("index.php");

$link = mysql_connect("jddlan.com","apache","apache");
mysql_select_db("john2land");

$query = "select road,destination from checkpoints where time is not null and date is not null order by checkpointid desc";

$result = mysql_query($query);

$journeyCount = mysql_num_rows($result);

$data = mysql_fetch_row($result);

if($journeyCount < 1)
{
	$road = "The Journey Begins Soon";
	$destination = "";
}
else
{
	$road = $data[0];
	$destination = $data[1];
}

$imgCount = 0;

$file = $imgCount . ".jpg";
$oldfile = $file;
$file = is_readable($file);

$countdown = 200;

//while($file == 1)

while($countdown > 0)
{
	$imgCount++;
	$file = $imgCount . ".jpg";
	$file = is_readable($file);
	if($file == 1)
	{
		$oldfile = $imgCount . ".jpg";
	}

	$countdown--;
}


?>

<html>
<head>
<title>John O'Groats To Lands End By Bike</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>

<body bgcolor="#FFFFFF" text="#0000A0" link="#0080C0" vlink="#0080FF" alink="#0080C0" background="/img/temp.gif">
<p align="center"><font size="+5" face="Verdana" color="#666699">J</font><font size="+5" face="Impact" color="#666699"><font face="Verdana">ohn2Land.co.uk</font></font></p>
<p align="center"><font face="Verdana" size="4"><b><i> <font color="#0000CC">Eight 
  days cycling for</font> <font color="#0000CC"><a href="http://www.cancerresearchuk.org/">Cancer 
  Research UK</a> and <a href="http://www.clic.uk.com">CLIC</a></font></i></b></font></p>
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
<p align="center"><font size="4"><b><font face="Verdana" color="#0000CC">This 
  page will tell you why, when and where we are as well as how you can help us 
  Cancer Research UK and CLIC. Send us a message on the contact page or why not 
  visit us on your mobile at wap.john2land.co.uk</font></b></font></p>
<p align="center"><font size="4"><b><font face="Verdana" color="#0000CC"><i>Current 
  Progress: 
<?php 
	if($journeyCount > 0)
	{
		print "${destination} (${road})";
	}
	else
	{	
		print "${destination} ${road}";
	} 

?></i></font></b></font></p>
<p align="center"><img src="<?php print $oldfile; ?>" width="567" height="468"></p>
<blockquote> 
  <blockquote> 
    <blockquote> 
      <blockquote>
        <p><font size="1" face="Verdana"></font></p>
      </blockquote>
    </blockquote>
  </blockquote>
</blockquote>
<p align="center"><font color="#0000FF" size="5" face="Courier New"><b> 
  <?php print $count; ?>
  </b></font></p>
<p align="center"><font color="#0000FF" size="5" face="Courier New"><b><font size="2" face="Verdana">Last 
  Updated 16th September 2003</font></b></font></p>
</body>
</html>
