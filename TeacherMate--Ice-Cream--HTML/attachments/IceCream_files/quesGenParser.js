// JavaScript Document
var backToFunc = {};
var studentxml = '../../student/660/questGen.xml';
var studentPath="";
var studentPathloaded = true;
function loadIceXML(backData)
{ 

clearTimeout(clrtime); 
	backToFunc = backData;
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest  ;
	} else {
		// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=parseXMLGameDoc;
	 if(studentPathloaded){
	 //xmlhttp.onreadystatechange=parseXMLGameDoc;
	xmlhttp.open("GET",base_url+'questGen.xml',true);
	//alert(base_url+"xml/"+s_id+'/questGen.xml');
	}
	 
	// else{
	
	// xmlhttp.open("GET","../../Config.xml",true);
	// }
	//alert(studentPath);
	xmlhttp.send();

}
var words = new Array();
var type = new Array();
var w0 = new Array();
var w1 = new Array();
var w2 = new Array();
var a = new Array();
var w0Arr = new Array();
var w1Arr = new Array();
var w2Arr = new Array();
var str;

function trim(str) {
        return str.replace(/^\s+|\s+$/g,"");
    }

function parseXMLGameDoc()
{	
//alert('Hi');		
//alert("state="+xmlhttp.readyState );

	if (xmlhttp.readyState == 4) 
	{
		if (xmlhttp.responseXML) 
		{
			//alert("");
			 
			 
			var x=xmlhttp.responseXML.documentElement.getElementsByTagName('sort');
			var qNodes = x[0].getElementsByTagName('q')
			var len = x[0].getElementsByTagName('q').length;
			for(var i=0; i<len;i++)
			{
            
             type[i] = qNodes[i].getElementsByTagName('t')[0].childNodes[0].nodeValue;	
					
             if(type[i] == "rimes")
            {
				w0 = qNodes[i].getElementsByTagName('w0')[0].childNodes[0].nodeValue
				w1 = qNodes[i].getElementsByTagName('w2')[0].childNodes[0].nodeValue
				w2 = qNodes[i].getElementsByTagName('w1')[0].childNodes[0].nodeValue					
				a[i] = qNodes[i].getElementsByTagName('r')[0].childNodes[0].nodeValue
						
				for(var m=0;m<=24;m++){		
				for(var k=0;k<=24;k++){
				if(a[k]==a[m])
				{
				arrCnt++;
				//alert(arrCnt);
				if(arrCnt>1){
				a.splice(k,1);
				}		
				
				}
				}
				arrCnt=0;
				}
				woArr=w0.split(",");
				w1Arr=w1.split(",");
				w2Arr=w2.split(",");
			//alert(a.length);
				for(var j=0;j<woArr.length;j++)
				{
					//words.push(woArr[j], w1Arr[j], w2Arr[j]);					
					words.push(trim(woArr[j]));				
				}
			}
            
            }
			//alert(words);
			 
			
		}
	
		backToFunc();
	}
}
var arrCnt=0;
function getIceAudio() 
{
	
	return cleanArray(a);
}

function cleanArray(actual)
{
	//alert("inclean array");
  var newArray = new Array();
  for(var i = 0; i<actual.length; i++)
	{
      if (actual[i]){
        newArray.push(actual[i]);
    }
  }
  return newArray;
}

function getWordCollection()
{
	return words;
}


