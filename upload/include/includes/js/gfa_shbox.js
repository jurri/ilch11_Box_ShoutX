// redrr_shoutbox Copyright by FeTTsack
// Geänderte Kopie vom Orginalen bbcode.js : Copyright by: Manuel Staechele

	var tagOpen = '[';
	var tagClos = ']';
	var tagEnde = '/';


  
function smilies(name) {
  aTag = tagOpen + name + tagClos;
  eTag = tagOpen + tagEnde + name + tagClos;
  smilies_insert ( aTag, eTag );
}

function smilies_insert(aTag,eTag) {
  
  var input = document.forms['shform'].elements['shoutbox_textarea'];
  input.focus();
  /* für Internet Explorer */
  if(typeof document.selection != 'undefined') {
    /* Einfügen des formatierungscodes */
    var range = document.selection.createRange();
    var insText = range.text;
    range.text = aTag + insText + eTag;
    /* Anpassen der Cursorposition */
    range = document.selection.createRange();
    if (insText.length == 0) {
      range.move('character', -eTag.length);
    } else {
      range.moveStart('character', aTag.length + insText.length + eTag.length);      
    }
    range.select();
  }
  /* für neuere auf Gecko basierende Browser */
  else if(typeof input.selectionStart != 'undefined')
  {
    /* Einfügen des formatierungscodes */
    var start = input.selectionStart;
    var end = input.selectionEnd;
    var insText = input.value.substring(start, end);
    input.value = input.value.substr(0, start) + aTag + insText + eTag + input.value.substr(end);
    /* Anpassen der Cursorposition */
    var pos;
    if (insText.length == 0) {
      pos = start + aTag.length;
    } else {
      pos = start + aTag.length + insText.length + eTag.length;
    }
    input.selectionStart = pos;
    input.selectionEnd = pos;
  }
  /* für die übrigen Browser */
  else
  {
    /* Abfrage der Einfügeposition */
    var pos = input.value.length;
    
    /* Einfügen des formatierungscodes */
    var insText = prompt("Bitte geben Sie den zu formatierenden Text ein:");
    input.value = input.value.substr(0, pos) + aTag + insText + eTag + input.value.substr(pos);
  }
}

function smilies_liste () {
  var x = '';
  var l = '';
  while ( x != null ) {
    x = prompt ("Um die Liste zu beenden 'Abbrechen' eingeben");
    if ( x != null ) {
      l = l + "[*]" + x + "\n";
    }
  }
  if ( l != '' ) {
    l = "[list]\n" + l + "[/list]"; 
    smilies_insert ( l, '' );
  }
}

function  putt ( towrite ) {
  smilies_insert ( towrite, '' );
}

function check() {
	if ( sform.xtxt.value == '' ) {
	  alert ( 'Bis jetzt wurde wohl noch nichts eingegeben, also schnell nachholen!' );
	  return false;
	} else {
	  if ( sform.pageName.value == '' ) {
	    alert ( 'Bitte gib noch schnell einen Namen ein!' );
	    return false;
	  } else {
	    return true;
	  }
	}
  
}


	var dhtmlgoodies_tooltip = false;
	var dhtmlgoodies_tooltipShadow = false;
	var dhtmlgoodies_shadowSize = 4;
	var dhtmlgoodies_tooltipMaxWidth = 200;
	var dhtmlgoodies_tooltipMinWidth = 100;
	var dhtmlgoodies_iframe = false;
	var tooltip_is_msie = (navigator.userAgent.indexOf('MSIE')>=0 && navigator.userAgent.indexOf('opera')==-1 && document.all)?true:false;
	function showTooltip(e,tooltipTxt){
        var bodyWidth = Math.max(document.body.clientWidth,document.documentElement.clientWidth) - 20;
        if(!dhtmlgoodies_tooltip){
			dhtmlgoodies_tooltip = document.createElement('DIV');
			dhtmlgoodies_tooltip.id = 'dhtmlgoodies_tooltip';
			dhtmlgoodies_tooltipShadow = document.createElement('DIV');
			dhtmlgoodies_tooltipShadow.id = 'dhtmlgoodies_tooltipShadow';
			document.body.appendChild(dhtmlgoodies_tooltip);
			document.body.appendChild(dhtmlgoodies_tooltipShadow);

			if(tooltip_is_msie){
				dhtmlgoodies_iframe = document.createElement('IFRAME');
				dhtmlgoodies_iframe.frameborder='5';
				dhtmlgoodies_iframe.style.backgroundColor='#FFFFFF';
				dhtmlgoodies_iframe.src = '#';
				dhtmlgoodies_iframe.style.zIndex = 100;
				dhtmlgoodies_iframe.style.position = 'absolute';
				document.body.appendChild(dhtmlgoodies_iframe);
			}
		}

		dhtmlgoodies_tooltip.style.display='block';
 	    dhtmlgoodies_tooltipShadow.style.display='block';
		if(tooltip_is_msie)dhtmlgoodies_iframe.style.display='block';

		var st = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
		if(navigator.userAgent.toLowerCase().indexOf('safari')>=0)st=0;
		var leftPos = e.clientX + 10;

		dhtmlgoodies_tooltip.style.width = null;	// Reset style width if it's set
		dhtmlgoodies_tooltip.innerHTML = tooltipTxt;
		dhtmlgoodies_tooltip.style.left = leftPos + 'px';
		dhtmlgoodies_tooltip.style.top = e.clientY + 10 + st + 'px';


		dhtmlgoodies_tooltipShadow.style.left =  leftPos + dhtmlgoodies_shadowSize + 'px';
		dhtmlgoodies_tooltipShadow.style.top = e.clientY + 10 + st + dhtmlgoodies_shadowSize + 'px';

		if(dhtmlgoodies_tooltip.offsetWidth>dhtmlgoodies_tooltipMaxWidth){	/* Exceeding max width of tooltip ? */
			dhtmlgoodies_tooltip.style.width = dhtmlgoodies_tooltipMaxWidth + 'px';
		}

		var tooltipWidth = dhtmlgoodies_tooltip.offsetWidth;
		if(tooltipWidth<dhtmlgoodies_tooltipMinWidth)tooltipWidth = dhtmlgoodies_tooltipMinWidth;


		dhtmlgoodies_tooltip.style.width = tooltipWidth + 'px';
		dhtmlgoodies_tooltipShadow.style.width = dhtmlgoodies_tooltip.offsetWidth + 'px';
		dhtmlgoodies_tooltipShadow.style.height = dhtmlgoodies_tooltip.offsetHeight + 'px';

		if((leftPos + tooltipWidth)>bodyWidth){
			dhtmlgoodies_tooltip.style.left = (dhtmlgoodies_tooltipShadow.style.left.replace('px','') - ((leftPos + tooltipWidth)-bodyWidth)) + 'px';
			dhtmlgoodies_tooltipShadow.style.left = (dhtmlgoodies_tooltipShadow.style.left.replace('px','') - ((leftPos + tooltipWidth)-bodyWidth) + dhtmlgoodies_shadowSize) + 'px';
		}

		if(tooltip_is_msie){
			dhtmlgoodies_iframe.style.left = dhtmlgoodies_tooltip.style.left;
			dhtmlgoodies_iframe.style.top = dhtmlgoodies_tooltip.style.top;
			dhtmlgoodies_iframe.style.width = dhtmlgoodies_tooltip.offsetWidth + 'px';
			dhtmlgoodies_iframe.style.height = dhtmlgoodies_tooltip.offsetHeight + 'px';

		}

	}

	function hideTooltip()
	{
		dhtmlgoodies_tooltip.style.display='none';
		dhtmlgoodies_tooltipShadow.style.display='none';
		if(tooltip_is_msie)dhtmlgoodies_iframe.style.display='none';
	}

//getXMLHTTP
function AjaxShBox() {
  var result = false;
  if( typeof XMLHttpRequest != "undefined" ) {
    result = new XMLHttpRequest();
  } else {
    try {
        result = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            result = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (ie) {}
    }
  }
  if (typeof netscape != 'undefined' && typeof netscape.security !=
      'undefined') {
      try {
          netscape.security.PrivilegeManager.enablePrivilege('UniversalBrowserRead');
      }
      catch (e) {
      }
  }
	return result;
}

 //Fetch entries of the shoutbox
function fetch(){
	var timestamp = new Date().getTime();
	xmlget = AjaxShBox();
	//xmlget.overrideMimeType('text/xml; charset=ISO-8859-1');
	xmlget.open("GET", "index.php?shbox=fetch");
	xmlget.onreadystatechange = function(){
		if ( xmlget.readyState == 4 && xmlget.responseText) {
				if( document.getElementById("shoutbox").innerHTML != xmlget.responseText){
					var eintraege = xmlget.responseText.split("||||");
					var show = "";
					for(var i = 0; i < eintraege.length; i++){
						var things = eintraege[i].split("|||");
						if(things[0]!="" && things[1]!="" && things[2]!=""){
						show = show+'<span>'+things[0]+'</span><br />';
						}
					}
					document.getElementById("shoutbox").innerHTML = show;
				}
		}
	}
	xmlget.send(null);
	return true;
}


//Funktion zum bestimmen der Elementkoordinaten
function getPageCoords (elementId) {
	var element;
	if (document.all) {
		element = document.all[elementId];
	} else if (document.getElementById) {
		element = document.getElementById(elementId);
	}
	if (element) {
		var coords = {x: 0, y: 0};
		do {
			coords.x += element.offsetLeft;
			coords.y += element.offsetTop;
			element = element.offsetParent;
		} while (element)
		return coords;
	} else {
		return null;
	}
}

// Farbpalette verstecken/anzeigen
function shhide_color() {
	if (document.getElementById("shcolorinput").style.display=="block") {
		document.getElementById("shcolorinput").style.display="none";
	} else {
		var pos = getPageCoords( "shbbcode_color_button" );
		document.getElementById("shcolorinput").style.display= "block";
	}
}

//Textarea in die für BBcode genutzt wird
var shbbcode_textarea = ['shform', 'shoutbox_textarea'];

function shbbcode_insert_into_textarea(text){
	var formular = document.forms[shbbcode_textarea[0]].elements[shbbcode_textarea[1]];
	formular.focus();

	// Nachschauen, an welche Position cursor gesetzt werden soll
	if (shbbcode_insert_into_textarea.arguments.length != 1) {
		var pos = shbbcode_insert_into_textarea.arguments[1];
	} else {
		var pos = -1;
	}

	// Für UserAgent IE.
	if(typeof document.selection != 'undefined')  {
	 	// Einfügen der Tags.
		var range = document.selection.createRange();

		if(text != null && text !='') {
			range.text = text;
			range.select();
			/* Anpassen der Cursorposition */
    		range = document.selection.createRange();
   	  		if (pos == -1) {
   	  			range.moveStart('character', 0);//text.length);
   	  		} else {
				range.move('character', (text.length * -1) + pos);
			}

			range.select();
		}
	// Für UserAgents die auf Gecko basieren.
	} else if(typeof formular.selectionStart != 'undefined') {
	 	// Einfügen der Tags
		var start = formular.selectionStart;
    	var end = formular.selectionEnd;

		if(text != null && text !='') {
			formular.value = formular.value.substr(0, start) + text + formular.value.substr(end);
			/* Anpassen der Cursorposition */
    		var pos = start + (pos == -1 ? text.length : pos);

			formular.selectionStart = pos;
    		formular.selectionEnd = pos;
		}
	}
}

function shbbcode_get_selection(){
	var formular = document.forms[shbbcode_textarea[0]].elements[shbbcode_textarea[1]];
	formular.focus();
	var text;
	// Für UserAgent IE.
	if(typeof document.selection !='undefined')  {
	 	// Einfügen der Tags.
		var range = document.selection.createRange();
		text = range.text;
	// Für UserAgents die auf Gecko basieren.
	} else if(typeof formular.selectionStart != 'undefined') {
	 	// Einfügen der Tags
		var start = formular.selectionStart;
    	var end = formular.selectionEnd;
    	text = formular.value.substring(start, end);
    }
    return text;
}

// BB-Code ins Textarea einfügen.
function shbbcode_insert(tag, boxtext) {
	var formular = document.forms[shbbcode_textarea[0]].elements[shbbcode_textarea[1]];
	formular.focus();
	// Tags Definieren
	var begin_tag = "["+tag+"]";
	var end_tag = "[/"+tag+"]";
	var list_x = '';
	var list_text = '';
    var prompt_box;

	var selection = shbbcode_get_selection();

	// Box ausgeben mit Anforderung.
	if(tag == 'list') {
		if(selection == null || selection =='') {
			while ( list_x != null ) {
  				list_x = prompt (boxtext);
  				if ( list_x != null ) {
    					list_text = list_text + "[*]" + list_x + "\n";
  				}
			}
			if ( list_text != '' ) {
 				prompt_box = list_text;
			}
		} else {
			while ( list_x != null ) {
 				list_x = prompt (boxtext,selection);
 				if ( list_x != null ) {
   					list_text = list_text + "[*]" + list_x + "\n";
 				}
			}

			if ( list_text != '' ) {
 				prompt_box = list_text;
			}
		}
	} else {
		if(selection == null || selection == '') {
			prompt_box = prompt(boxtext, "");
		} else {
			shbbcode_insert_into_textarea(begin_tag + selection + end_tag);
			return;
		}
	}
	if (prompt_box == null || prompt_box == '') {
		prompt_box = '';
		var pos = tag.length + 2;
	} else {
		var pos = -1;
	}
	shbbcode_insert_into_textarea(begin_tag + prompt_box + end_tag, pos);
}

// BBCode mit Werte Einfügen.
function shbbcode_insert_with_value(tag, boxtext1, boxtext2) {
	var default_text;
	var selection = shbbcode_get_selection();
	var prompt_text1;
	var prompt_text2;
	var prompt_box;
	var pos = -1;

	// Alternativen Text für die Box ausgeben.
	if(tag == 'url') {
		default_text = "http://";
	} else if(tag == 'size') {
		default_text = "12"; 
	} else {
		default_text ="";  
	}

	// Box ausgeben mit Anforderung.
	if(selection == null || selection =='') {
		prompt_text1 = prompt(boxtext1, "");
	} else {
		prompt_text1 = prompt(boxtext1, selection);
	}

	// Ausgabe der 2ten Box.
	prompt_text2 = prompt(boxtext2, default_text);

	// Überprüfen ob prompt_text1 nicht Leer ist. Wenn True dann Format [XXX=XXX]XXX[/XXX]
	if(prompt_text1 != null && prompt_text1 !='') {
		if(prompt_text2 != null && prompt_text2 !='') {
			prompt_box = "["+tag+"="+prompt_text2+"]"+prompt_text1+"[/"+tag+"]";
		}
	// Wenn promptText1 Leer ist dann Format [XXX]XXX[/XXX] (Aber nur bei Gewünschten Tags)
	} else if(tag == 'url' || tag == 'email') {
		if(prompt_text2 != null && prompt_text2 !='') {
			prompt_box = "["+tag+"]"+prompt_text2+"[/"+tag+"]";
		} else {
			prompt_box = "["+tag+"][/"+tag+"]";
			pos = tag.length + 2;
		}
	}

	if (prompt_box == null) {
		prompt_box = '';
		pos = tag.length + 2;
	}
	shbbcode_insert_into_textarea(prompt_box, pos);
}

// BBCode mit vielen Werten einfügen
/* options = {tag:[question, default],  <-- tag:['Pfad zu ...', '']
	option1:[question, default],    <-- Bsp width:['Geben sie die Höhe an', 300]
	option2:[question, default],
	}
*/
function shbbcode_insert_with_multiple_values(tag, options){
	var text = '['+tag;
	var endtext = '';
	for (var i in options) {
		if (i == 'tag') {
			var endtext = prompt(options[i][0], options[i][1]) + '[/' + tag + ']';
		} else {
			var prompt_text = prompt(options[i][0], options[i][1]);
			if (prompt_text.length > 0) {
				text = text + ' ' + i + '=\'' + prompt_text + '\'';
			}
		}
	}
	shbbcode_insert_into_textarea(text + ']' + endtext);
}

// BBCode mit Werte Einfügen (andere Art).
function shbbcode_insert_with_value_2(tag, boxtext1, boxtext2) {

	var default_text;

	// Alternativen Text für die Box ausgeben.
	if(tag == 'video') {
		default_text = "YouTube";
	} else {
		default_text ="";
	}

	var prompt_text1;
	var prompt_text2;
	var prompt_box;

	// Box ausgeben mit Anforderung.
	prompt_text2 = prompt(boxtext2, default_text);

	var selection = shbbcode_get_selection();

	// Ausgabe der 2ten Box.
	if(selection == null || selection == '') {
		prompt_text1 = prompt(boxtext1, "");
	} else {
		prompt_text1 = prompt(boxtext1, selection);
	}

	// Überprüfen ob prompt_text1 nicht Leer ist. Wenn True dann Format [XXX=XXX]XXX[/XXX]
	if(prompt_text1 != null && prompt_text1 !='') {
		if(prompt_text2 != null && prompt_text2 !='') {
			prompt_box = "["+tag+"="+prompt_text2+"]"+prompt_text1+"[/"+tag+"]";
		}
	// Wenn promptText1 Leer ist dann Format [XXX]XXX[/XXX] (Aber nur bei Gewünschten Tags)
	} else if(tag == 'url' || tag == 'email') {
		if(prompt_text2 != null && prompt_text2 !='') {
			prompt_box = "["+tag+"]"+prompt_text2+"[/"+tag+"]";
		}
	}

	// Wenn insText nicht Leer ist dann Tags Einfügen.
	if(prompt_box != null && prompt_box !='') {
		shbbcode_insert_into_textarea(prompt_box);
	}
}

// Simples einfügen der Tags :-)
function shbbcode_code_insert(tag, color) {
    
    // Tags Definieren
	if(color == "0"){
		var begin_tag = "["+tag+"]";
		var end_tag = "[/"+tag+"]";
		if (document.form.code != undefined) {
			document.form.code.options['0'].selected = true; // selectiert immer <Code einfügen>
		}
	} else if (tag == "code" || tag == "php" || tag == "html" || tag == "css") {
		var prompt_text1 = prompt("Format: dateiname;5  (Im Beispiel ist die Startzeile 5)\nSie können hier nun einen Dateinamen und eine Startzeile mit angeben,\nwobei die Startzeile optional ist und auch das komplette Feld leer gelassen werden kann.)","");
		if (prompt_text1 != "" && prompt_text1 != null) {
			var begin_tag = "["+tag+"="+prompt_text1+"]";
		} else {
			var begin_tag = "["+tag+"]";
		}
		var end_tag = "[/"+tag+"]";
	} else {
		var begin_tag = "["+tag+"="+color+"]";
		var end_tag = "[/"+tag+"]";
	}
	var selection = shbbcode_get_selection();
	if (selection.length != undefined && selection.length != 0) {
		var pos = -1;
	} else {
		var pos = begin_tag.length;
	}
	shbbcode_insert_into_textarea(begin_tag + selection + end_tag, pos);
}

function shbbcode_code_insert_codes(tag) {
	if (tag != "0") {
		shbbcode_code_insert(tag,'1');
	}
}

	