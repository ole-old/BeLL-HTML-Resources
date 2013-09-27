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
 
	xmlhttp.open("GET","MailManLetters_files/student.xml",true);
	 
	} 
	xmlhttp.send();
}

var w = new Array();
var w1val = new Array();
var w0val = new Array();
var wval = new Array();
var rval = new Array();
var types = new Array();
var cntPlace = 0;
var validLetters = ["a","b","c","d","e","f","g","h","i","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
function parsegameXMLDoc()
{

		if (xmlhttp.readyState == 4) {
		
			if (xmlhttp.responseXML) { 
			 
				 a = xmlhttp.responseXML.getElementsByTagName("letters")[0].childNodes[0].nodeValue;
				 w = a.toUpperCase().split(","); 
				 //k,q,x,y
				 for(var u=0;u<w.length;u++){ 
					indexVal = validLetters.indexOf(w[u].toLowerCase()); 
					validLetters.splice(indexVal,1); 
				 } 
				 
				 for(var t=0;t<w.length;t++){
					if(w[t] == "K" || w[t] == "Q" || w[t] == "X" || w[t] == "Y"){
						w[t] = validLetters[cntPlace].toUpperCase(); 
						cntPlace++;
						
					}
					
				 } 
				
			}
			 
			 WordsData();
			//  fun2call();
			 // }
		}
		
}

function getwval()
{
 alert(w);
	return w;
}

 