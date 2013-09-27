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
 
	xmlhttp.open("GET",st_path+"/student.xml",true);
	 
	} 
	xmlhttp.send();
}

var w = new Array();
var w1val = new Array();
var w0val = new Array();
var wval = new Array();
var rval = new Array();
var types = new Array();
var validLetters = ["a","b","c","d","e","f","g","h","i","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
function parsegameXMLDoc()
{
		if (xmlhttp.readyState == 4) {
		
			if (xmlhttp.responseXML) { 
				 a = xmlhttp.responseXML.getElementsByTagName("letters")[0].childNodes[0].nodeValue;
				 w = a.split(","); 
				  for(var u=0;u<w.length;u++){ 
					indexVal = validLetters.indexOf(w[u]); 
					validLetters.splice(indexVal,1); 
				 } 
				 
				 for(var t=0;t<w.length;t++){
					if(w[t] == "k" || w[t] == "q" || w[t] == "x" || w[t] == "y"){
						w[t] = validLetters[t];  
					}
				 } 
			}
			 //alert(w);
		  initial();
			 // }
		}
		
}

function getwval()
{
 alert(w);
	return w;
}

 