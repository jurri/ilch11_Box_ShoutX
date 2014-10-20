<?php
// Copyright by Manuel
// Support www.ilch.de
# modded by FeTTsack
# support www.graphics-for-all.de
defined ('main') or die ('no direct access');


###################################################
## funktion für die Smilies der shoutbox ##########
###################################################
function getshboxsmilies(){
	global $lang;
	$b = '<script language="JavaScript" type="text/javascript">function moreSmiliesshbox () { var x = window.open("about:blank", "moreSmiliesshbox", "width=250,height=200,status=no,scrollbars=yes,resizable=yes"); ';
	$a = '';
	$erg = db_query('SELECT emo, ent, url FROM `prefix_smilies`');
    while($row = db_fetch_object($erg)){
		$b .= 'x.document.write ("<a href=\"javascript:opener.putt(\''.addslashes(addslashes($row->ent)).'\')\">");';
		$b .= 'x.document.write ("<img style=\"border: 0px; padding: 5px;\" src=\"include/images/smiles/'.$row->url.'\" title=\"'.$row->emo.'\" ></a>");';
	}
	$b .= ' x.document.write("<br /><br /><center><a href=\"javascript:window.close();\">'.$lang['close'].'</a></center>"); x.document.close(); }</script>';
	$a .= '<a href="javascript:moreSmiliesshbox();"><img src="include/images/icons/shbbcode/smilie.jpg" alt="Smilies" title="Smilies" width="41" height="25" border="0"></a>';
	$a = $b.$a;
	return ($a);
}##################################################


###################################################
## benötigte Scripte laden für den bbcode #########
###################################################
echo '
	<style type="text/css">
		#dhtmlgoodies_tooltip{
			background-color:#EEE;
			border:1px solid #000;
			position:absolute;
			display:none;
			z-index:20000;
			padding:2px;
			font-size:0.9em;
			-moz-border-radius:6px;
			font-family: "Trebuchet MS", "Lucida Sans Unicode", Arial, sans-serif;
		}
		#dhtmlgoodies_tooltipShadow{
			position:absolute;
			background-color:#555;
			display:none;
			z-index:10000;
			opacity:0.7;
			filter:alpha(opacity=70);
			-khtml-opacity: 0.7;
			-moz-opacity: 0.7;
			-moz-border-radius:6px;
		}
		.shoutbox_nick{
			background:-moz-linear-gradient(bottom,#610B0B,#DF0101);
			background:-webkit-gradient(linear,left top,left bottom,from(#610B0B),to(#DF0101));
			filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#610B0B\',endColorstr=\'#DF0101\'); 
			background-image: -ms-linear-gradient(top, #DF0101 0%, #610B0B 100%);
		}
		.copy_shbox a{
		    font-size:1em;
		    opacity:0;
		    margin-left:150px;
		}
	
	</style>
	<script type="text/javascript" charset="utf-8" src="include/includes/js/gfa_shbox.js"></script>
	
	<script language="JavaScript" type="text/javascript">
		window.onload = "fetch()";
		interval = window.setInterval("fetch();", '.$conf['setinterval'].');
	</script>
';#################################################


###################################################
## darstellung der bbcode-buttons #################
## für den Button der smilies gibt es extra #######
## die funktion: getshboxsmilies() ################
###################################################
$quote = <<<end_of_quote
<!--Fett Button! -->
<a href="javascript:shbbcode_insert('b','Gib hier den Text an der formatiert werden soll.')"><img src="include/images/icons/shbbcode/bold.jpg" alt="Fett formatieren" title="Fett formatieren" width="41" height="25" border="0"></a>
<!--Kursiv Button! -->	
<a href="javascript:shbbcode_insert('i','Gib hier den Text an der formatiert werden soll.')"><img src="include/images/icons/shbbcode/italic.jpg" alt="Kursiv formatieren" title="Kursiv formatieren" width="41" height="25" border="0"></a>
<!--Unterstrichen Button! -->
<a href="javascript:shbbcode_insert('u','Gib hier den Text an der formatiert werden soll.')"><img src="include/images/icons/shbbcode/underline.jpg" alt="Unterstrichen formatieren" title="Unterstrichen formatieren" width="41" height="25" border="0"></a>
<!--Hyperlink Button! -->
<a href="javascript:shbbcode_insert_with_value('url','Gib hier den namen des links an.','Gib hier die Adresse zu welcher verlinkt werden soll.')"><img src="include/images/icons/shbbcode/link.jpg" alt="Hyperlink einf&uuml;gen" title="Hyperlink einf&uuml;gen" width="41" height="25" border="0"></a>
<!--Color Button! -->
<a href="javascript:shhide_color()"><img id="shbbcode_color_button" src="include/images/icons/shbbcode/color.jpg" alt="Schriftfarbe &auml;ndern" title="Schriftfarbe &auml;ndern" width="41" height="25" border="0"></a> 
<div style="position:absolute;">
	<div id="shcolorinput" style="display:none; position:relative; top:-30px; left:100px; width:200px; z-index:100;">
		<table class="border" width="100%" cellspacing="1" cellpadding="0" border="0">
		<tr class="Chead" onclick="javascript:shhide_color();">
			<td colspan="16"><b>Farbe wählen</b></td>
		</tr><tr class="Cmite" height="15">
			<td width="10" style="background-color: #FF0000;"><a href="javascript:shbbcode_code_insert('color','#FF0000'); shhide_color();">...</a></td>
			<td width="10" style="background-color: #FFFF00;"><a href="javascript:shbbcode_code_insert('color','#FFFF00'); shhide_color();">...</a></td>
			<td width="10" style="background-color: #008000;"><a href="javascript:shbbcode_code_insert('color','#008000'); shhide_color();">...</a></td>
			<td width="10" style="background-color: #00FF00;"><a href="javascript:shbbcode_code_insert('color','#00FF00'); shhide_color();">...</a></td>
			<td width="10" style="background-color: #008080;"><a href="javascript:shbbcode_code_insert('color','#008080'); shhide_color();">...</a></td>
			<td width="10" style="background-color: #808000;"><a href="javascript:shbbcode_code_insert('color','#808000'); shhide_color();">...</a></td>
			<td width="10" style="background-color: #0000FF;"><a href="javascript:shbbcode_code_insert('color','#0000FF'); shhide_color();">...</a></td>
			<td width="10" style="background-color: #00FFFF;"><a href="javascript:shbbcode_code_insert('color','#00FFFF'); shhide_color();">...</a></td>
			<td width="10" style="background-color: #000080;"><a href="javascript:shbbcode_code_insert('color','#000080'); shhide_color();">...</a></td>
			<td width="10" style="background-color: #800080;"><a href="javascript:shbbcode_code_insert('color','#800080'); shhide_color();">...</a></td>
			<td width="10" style="background-color: #FF00FF;"><a href="javascript:shbbcode_code_insert('color','#FF00FF'); shhide_color();">...</a></td>
			<td width="10" style="background-color: #800000;"><a href="javascript:shbbcode_code_insert('color','#800000'); shhide_color();">...</a></td>
			<td width="10" style="background-color: #C0C0C0;"><a href="javascript:shbbcode_code_insert('color','#C0C0C0'); shhide_color();">...</a></td>
			<td width="10" style="background-color: #808080;"><a href="javascript:shbbcode_code_insert('color','#808080'); shhide_color();">...</a></td>
			<td width="10" style="background-color: #000000;"><a href="javascript:shbbcode_code_insert('color','#000000'); shhide_color();">...</a></td>
			<td width="10" style="background-color: #FFFFFF;"><a href="javascript:shbbcode_code_insert('color','#FFFFFF'); shhide_color();">...</a></td>
		</tr>
		</table>
	</div>
</div>
end_of_quote;
###################################################


###################################################
## prüft schlicht ob man Gast ist oder nicht ######
###################################################
if(loggedin()){
    $shoutbox_VALUE_name = $_SESSION['authname'];
	$loggin = "<br/><a href=\"index.php?user-details-".$_SESSION['authid']."\" onmouseout=\"hideTooltip()\" onmouseover=\"showTooltip(event,'Deine IP: ".$_SERVER['REMOTE_ADDR']."');return false\"><b>".$shoutbox_VALUE_name."</b></a>";
}else{
    $shoutbox_VALUE_name = 'Nickname';
	$loggin = '<br/><input type="text" size="15" name="shoutbox_nickname" value="'.$shoutbox_VALUE_name.'" onFocus="if (value == \''.$shoutbox_VALUE_name.'\') {value = \'\'}" onBlur="if (value == \'\') {value = \''.$shoutbox_VALUE_name.'\'}" maxlength="15">';
}##################################################


###################################################
## die Eingabefunktion der Shoutbox ###############
###################################################
if(has_right($allgAr['sb_recht'])){
	$fileContentslook = file_get_contents("include/contents/gfa_shoutbox.php");
	if(preg_match_all("~graphics-for-all~", $fileContentslook, $match, PREG_PATTERN_ORDER) > 1){
		if(!empty($_POST['shoutbox_submit']) AND chk_antispam ('shoutbox')){
			if(!loggedin()){
				$shoutbox_nickname = escape($_POST['shoutbox_nickname'], 'string');
				$shoutbox_nickname = substr($shoutbox_nickname, 0, 15);
			}else{
				$shoutbox_nickname = substr($shoutbox_VALUE_name, 0, 15);
			}
			$shoutbox_textarea = escape($_POST['shoutbox_textarea'], 'textarea');
			//$shoutbox_textarea = preg_replace("/\[.?(url|b|i|u|img|code|quote)[^\]]*?\]/i", "", $shoutbox_textarea);
			$shoutbox_textarea = strip_tags($shoutbox_textarea);
			if(!empty($shoutbox_nickname) AND !empty($shoutbox_textarea)){
				db_query('INSERT INTO `prefix_shoutbox` (`nickname`,`textarea`) VALUES ( "' . $shoutbox_nickname . '" , "' . $shoutbox_textarea . '" ) ');
				header('Location: index.php?' . $menu->get_complete());
			}
		}
		$fileContents = file_get_contents("include/boxes/gfa_shoutbox.php");
		if(preg_match_all("~&copy; Graphics for All~", $fileContents, $ausgabe, PREG_PATTERN_ORDER) > 1){
			echo '<form action="index.php?' . $menu->get_complete() . '" method="POST" name="shform" onsubmit="return form_check()"><center>';
			echo $loggin;
			echo "<hr style=\"width:90%; height:0px; border:solid ".$conf['hrcolor']." 0px; border-top-width:1px;\"/>";
			echo '<textarea style="width:80%;" cols="15" rows="5" name="shoutbox_textarea"></textarea>';  //-- Textfeld für die Eingabe
			echo get_antispam('shoutbox', 0).'<br/>';  //-- Antispamfunktion bei gästen
			echo getshboxsmilies();  //-- Ausgabe der Smilies als Button
			echo $quote.'</center><br/>';  //-- Ausgabe der bbcode-buttons
			echo '<input type="submit" value="' . $lang['formsub'] . '" name="shoutbox_submit">';  //-- der Absenden button
			echo '</form>';
		}
	}
}##################################################


###################################################
## Ausgabe der einträge in der Shoutbox ###########
###################################################
echo '<table width="100%" class="border" cellpadding="2" cellspacing="1" border="0">';
$erg = db_query('SELECT * FROM `prefix_shoutbox` ORDER BY id DESC LIMIT ' . (is_numeric($allgAr['sb_limit'])?$allgAr['sb_limit']:5));
$class = 'Cnorm';
while($row = db_fetch_assoc($erg)){
	$nick = $row['nickname'];
    $id = db_fetch_assoc(db_query("SELECT * FROM prefix_user WHERE name = '$nick'"));
	//-- Prüfung ob Gasteintrag oder nicht.
	if(strlen($id['id'])==0){
		echo "<tr class=\"shoutbox_nick\"><td><b><a onmouseout=\"hideTooltip()\" onmouseover=\"showTooltip(event, 'Gasteintrag'); return false\"><font color=\"#CCCCCC\">".$row['nickname']."</font></a>:</b></td></tr><tr><td class=\"".$class."\">".preg_replace('/([^\s]{' . $allgAr['sb_maxwordlength'] . '})(?=[^\s])/', "$1\n", BBCode($row['textarea']))."</td></tr>";
	}else{
		echo "<tr class=\"shoutbox_nick\"><td><b><a href=\"index.php?user-details-".$id['id']."\"><font color=\"#FFFFFF\">".$row['nickname']."</font></a>:</b></td></tr><tr><td class=\"".$class."\">".preg_replace('/([^\s]{' . $allgAr['sb_maxwordlength'] . '})(?=[^\s])/', "$1\n", BBCode($row['textarea']))."</td></tr>";
	}
}
echo '</table><table><tr><td><a class="box" href="index.php?gfa_shoutbox"><br/>' . $lang['archiv'] . '</a></td>';
echo "<td><div class=\"copy_shbox\"><a href=\"http://www.graphics-for-all.de\" target=\"_blank\">&copy; Graphics for All</a></div></td></tr></table>";
###################################################
?>