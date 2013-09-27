// JavaScript Document
var fun2call = {};
var studentPathloaded=true;
var studentPath="";
var studId;
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
	 //studId = xmlhttp.responseXML.documentElement.getElementsByTagName('Id')[0].textContent;
	// studentPath="../../student/"+studId;
	if(studentPathloaded){
	//	alert(studentPath);
		// xmlhttp.open("GET",base_url+'xml/'+s_id+'/questGen.xml',true); //precode
		xmlhttp.open("GET",'./questGen.xml',true); //precode
	}
	 
	xmlhttp.send();
}

var wordAudio = new Array();
var w0 = new Array();
var w1 = new Array();
var wSuffix = new Array();
function parsegameXMLDoc()
{
		if (xmlhttp.readyState == 4) {
			if (xmlhttp.responseXML) {
				 
				 
					//alert("enter");
					var x=xmlhttp.responseXML.documentElement.getElementsByTagName('sort');
					var qNodes = x[0].getElementsByTagName('q')
					var len = x[0].getElementsByTagName('q').length;
				 		for(var i=0; i<len; i++)
						{					
					 	    w0 = qNodes[i].getElementsByTagName('w0')[0].childNodes[0].nodeValue;	
							w1.push(qNodes[i].getElementsByTagName('r')[0].childNodes[0].nodeValue);	
							var woArr=w0.split(",");
							for(var j=0;j<woArr.length;j++)
							{
								wordAudio.push(woArr[j]);
							}
							
					   }
				  
				
			}

			fun2call();
		}
}


function getAudio()
{

	return wordAudio;
}
