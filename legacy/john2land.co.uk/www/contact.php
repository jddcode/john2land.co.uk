<?php

include 'tools.php';

$link = mysql_connect('jddlan.com','apache','apache');
mysql_select_db("john2land");

$name = $_POST["name"];

if($name != "")
{
	$subject = $_POST["subject"];
	$message = $_POST["message"];

	$query = "insert into comments (name,subject,comment) values ('${name}','${subject}','${message}')";
	
	mysql_query($query);
}


$query = "select name,subject,comment from comments where approved = '1' order by commentid desc";

$result = mysql_query($query);

$count = mysql_num_rows($result);

?>

<html>
<head>
<title>John O'Groats To Lands End Contact</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>

<body bgcolor="#FFFFFF" text="#0000A0" link="#0080C0" vlink="#0080FF" alink="#0080C0">

<form method="post" action="contact.php">
  <p align="center"><font face="Verdana" size="4"><b><i><font color="#666699">Contact 
    Us For</font> <font color="#0000CC"><a href="http://www.cancerresearchuk.org/">Cancer 
    Research UK</a> <font color="#666699">and</font> <a href="http://www.clic.uk.com">CLIC</a></font></i></b></font></p>
<p align="center"> 
  <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0" width="100" height="22" name="index">
    <param name="BASE" value=".">
    <param name=movie value="button2.swf">
    <param name=quality value=high>
    <param name="BGCOLOR" value="">
    <embed src="button2.swf" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="100" height="22" bgcolor="" name="index" base="."> 
    </embed> </object>
  <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0" width="100" height="22" name="Team">
    <param name="BASE" value=".">
    <param name=movie value="button3.swf">
    <param name=quality value=high>
    <param name="BGCOLOR" value="">
    <embed src="button3.swf" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="100" height="22" bgcolor="" name="Team" base="."> 
    </embed> </object>
  <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0" width="100" height="22" name="Equipment">
    <param name="BASE" value=".">
    <param name=movie value="button4.swf">
    <param name=quality value=high>
    <param name="BGCOLOR" value="">
    <embed src="button4.swf" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="100" height="22" bgcolor="" name="Equipment" base="."> 
    </embed> </object>
  <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0" width="100" height="22" name="route">
    <param name="BASE" value=".">
    <param name=movie value="button5.swf">
    <param name=quality value=high>
    <param name="BGCOLOR" value="">
    <embed src="button5.swf" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="100" height="22" bgcolor="" name="route" base="."> 
    </embed> </object>
  <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0" width="100" height="22" name="sponsors">
    <param name="BASE" value=".">
    <param name=movie value="button6.swf">
    <param name=quality value=high>
    <param name="BGCOLOR" value="">
    <embed src="button6.swf" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="100" height="22" bgcolor="" name="sponsors" base="."> 
    </embed> </object>
  <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0" width="100" height="22" name="help">
    <param name="BASE" value=".">
    <param name=movie value="button7.swf">
    <param name=quality value=high>
    <param name="BGCOLOR" value="">
    <embed src="button7.swf" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="100" height="22" bgcolor="" name="help" base="."> 
    </embed> </object>
  <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0" width="100" height="22" name="contact">
    <param name="BASE" value=".">
    <param name=movie value="button8.swf">
    <param name=quality value=high>
    <param name="BGCOLOR" value="">
    <embed src="button8.swf" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="100" height="22" bgcolor="" name="contact" base="."> 
    </embed> </object>
</p>
  <p align="center"><font face="Verdana" size="4" color="#666699">


<?php
	$name = $_POST["name"];

	if($name != "")
	{
		print "Thankyou. Your message has been recieved and may appear on site if approved by our moderators.";
	}
	else
	{
		print "You can contact us by updating our message board. Type your details and the message then click on the 'send message' button. Once we have verified the message it will appear lower down on this page.";
	}
?>




</font></p>
<p align="center">&nbsp;</p>
  <div align="right">
    <table width="50%" border="0" align="center" bordercolor="#666699">
      <tr> 
        <td colspan="2"> 
          <div align="center"><font color="#000000" size="3" face="Verdana"><strong><font color="#666699">Enter 
            A Message</font></strong></font></div>
        </td>
      </tr>
      <tr> 
        <td width="50%"> 
          <div align="center"><font color="#666699" size="3" face="Verdana">Name</font></div>
        </td>
        <td width="50%"> 
          <input type="text" name="name">
        </td>
      </tr>
      <tr> 
        <td> 
          <div align="center"><font color="#666699" size="3" face="Verdana">Subject</font></div>
        </td>
        <td> 
          <select name="subject">
            <?php

		$query = "select subjectid,subject from commentssubjects";
		$subjectsListResult = mysql_query($query);
		$subjectsListCount = mysql_num_rows($subjectsListResult);

		while($subjectsListCount > 0)
		{
			$subjectsListData = mysql_fetch_row($subjectsListResult);

			print "<option value='${subjectsListData[0]}'>${subjectsListData[1]}</option>";
			
			$subjectsListCount--;
		}
?>
          </select>
        </td>
      </tr>
      <tr> 
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr> 
        <td colspan="2"> 
          <div align="center"><font color="#666699" size="3" face="Verdana">Message:</font></div>
        </td>
      </tr>
      <tr> 
        <td colspan="2"> 
          <div align="center"> 
            <textarea name="message" cols="60"></textarea>
          </div>
        </td>
      </tr>
      <tr> 
        <td colspan="2"> 
          <div align="center"> 
            <input type="submit" name="Submit" value="Send Message">
          </div>
        </td>
      </tr>
    </table>
  </div>
  <div align="center"><br>
  <br>
  <br>
    <table width="75%" border="0" bordercolor="#666699">
      <tr> 
        <td colspan='2'> 
          <div align="center"><strong><font color="#666699" size="3" face="Verdana">Previous 
            Messages </font></strong></div>
        </td>
      </tr>
<?php

	while($count > 0)
	{
		$data = mysql_fetch_row($result);

		$query = "select subject from commentssubjects where subjectid = '${data[1]}'";
		$subjectResult = mysql_query($query);
		$subjectData = mysql_fetch_row($subjectResult);

		$subject = $subjectData[0];		

		print "<tr>";
		print "<td colspan='2'><font face='verdana' size='4' color='#666699'>Subject: ${subject}</font></td>";
		print "</tr>";

		print "<tr>";
		print "<td colspan='2'><font face='verdana' color='#000000'>${data[2]}</font></td>";
		print "</tr>";
	
		print "<tr>";
		print "<td colspan='2'><font face='verdana' color='#000000'><b>${data[0]}</b></font><br><br></td>";
		print "</tr>";


		$count--;
	}
?>
    </table>
</div>
</form>
</body>
</html>
