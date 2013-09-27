// JavaScript Document
var fun2call = {};
var studentPath="";
var studentPathloaded = true;
function loadgamedata(e){fun2call=e;if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest}else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP")}xmlhttp.onreadystatechange=parsegameXMLDoc;if(studentPathloaded){xmlhttp.open("GET",st_path+"/student.xml",true)}xmlhttp.send()}function parsegameXMLDoc(){if(xmlhttp.readyState==4){if(xmlhttp.responseXML){a=xmlhttp.responseXML.getElementsByTagName("letters")[0].childNodes[0].nodeValue;w=a.split(",")}}}function getwval(){alert(w);return w}var fun2call={};var studentPath="";var studentPathloaded=true;var w=new Array;var w1val=new Array;var w0val=new Array;var wval=new Array;var rval=new Array;var types=new Array