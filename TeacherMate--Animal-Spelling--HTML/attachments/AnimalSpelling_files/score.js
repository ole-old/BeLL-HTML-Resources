// JavaScript Document
var scores = 0;
var parsedFiles=0;
function loadXml(xmlpath)
{
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest;
	} else {
		// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	//alert(xmlpath);
	xmlhttp.onreadystatechange=parseXMLDoc;
	//xmlhttp.open("GET","student/99990001/variable.xml",true);
	xmlhttp.open("GET",xmlpath,true);
	xmlhttp.send();

}

function parseXMLDoc()
{		
		if (xmlhttp.readyState == 4) {
			if (xmlhttp.responseXML) {
				if(parsedFiles==0){
					var studId = xmlhttp.responseXML.documentElement.getElementsByTagName('Id')[0].textContent;
					//alert(tmp);
					//alert("../../student/"+studId+"/variable.xml");
					parsedFiles++;
					loadXml("../../student/"+studId+"/variable.xml");
				}else{
					var x=xmlhttp.responseXML.documentElement.getElementsByTagName('score');
					var qNodes = x[0].getElementsByTagName('Elem')
					var len = x[0].getElementsByTagName('Elem').length;
					scores=qNodes[0].getElementsByTagName('Data')[0].childNodes[0].nodeValue;
					//alert("getscore else"+scores);
				}
			}
		}
}
function getScore()
{
	//alert("getscore "+scores);
	return scores;
}
