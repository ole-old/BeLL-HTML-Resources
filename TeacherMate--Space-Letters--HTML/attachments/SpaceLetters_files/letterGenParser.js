// JavaScript Document
var fun2call = {};
var studentPath="";
var studentPathloaded = true;
function loadgamedata(callbackFn)
{
 
	fun2call = callbackFn;
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest  ;
	} else {
		// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=parsegameXMLDoc;
	 if(studentPathloaded){
	xmlhttp.open("GET",st_path,true);
	//alert("HI"+studentPath);
	} 
	xmlhttp.send();
}

var w = new Array();
var w1val = new Array();
var w0val = new Array();
var wval = new Array();
var rval = new Array();
var types = new Array();
function parsegameXMLDoc()
{
		if (xmlhttp.readyState == 4) {
		
			if (xmlhttp.responseXML) { 
				 a = xmlhttp.responseXML.getElementsByTagName("letters")[0].childNodes[0].nodeValue;
				 w = a.split(","); 
			}
			
			//  fun2call();
			 // }
		}
		
}

function getwval()
{
 alert(w);
	return w;
}

 