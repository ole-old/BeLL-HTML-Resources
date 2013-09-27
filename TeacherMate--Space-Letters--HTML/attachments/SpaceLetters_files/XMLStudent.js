var opObj = [];
var activityName="";
var activiteNode=0;
var operationIndex=0;
var parsedNodes=0;
var definedNode=["ActivityPool","Level"];
var mathOperations=[0,"Addition_Facts","Subtraction_Facts","Multiplication_Facts","Division_Facts"];
var studentPath="";
var studentPathloaded = true;
var studId;
function loadGameData(){


	loadXMLData("SpaceMath");
}

function loadXMLData(actName) {

	activityName=actName;
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest  ;
	} else {
		// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=parseXMLDoc;
	if(studentPathloaded){

		xmlhttp.open("GET",st_path,true);
	
	
	}
	 
	xmlhttp.send();

}

function parseXMLDoc() {
	
	
	if (xmlhttp.readyState == 4) {
	
		if (xmlhttp.responseXML) {
			// added operationIndex 9/17/2010
			 
			 
			operationIndex++;
			var currentNode=definedNode[activiteNode];

			var x=xmlhttp.responseXML.documentElement.getElementsByTagName(currentNode);
			var len=x[0].getElementsByTagName("Elem").length;
			var strName;
			var strData;
			for (j=0; j < len; j++) {
				strName=x[0].getElementsByTagName("Elem")[j].getElementsByTagName("Name")[0].childNodes[0].nodeValue;
				if (strName == activityName) {
					strData=x[0].getElementsByTagName("Elem")[j].getElementsByTagName("Data")[0].childNodes[0].nodeValue;
					if (activityName == "SpaceMath") {
						strData = "MathFacts,1";
						hasActivity(strData);
					} else {
						//document.writeln("[Name] " + strName + " [Data] " + strData);
						opObj[strName]=strData;
					}
					break;
				}
			}
			if (activityName != "SpaceMath") {
				linkDatas();
			}
			else {
			alert("Loaded default value");
		}
		
		 
		}
	}
}

function hasActivity(str) {
	str=str.replace(" ","");
	var from=str.indexOf(",");
	var to=str.length;
	var flag=str.substr(from + 1,to);
	if (flag == 1) {
		activiteNode++;
		//document.writeln("Has Activity");
		fetchLevels();
	} else if (flag == 0) {
		//document.writeln("No Activity");
	} else {
	}
};

function fetchLevels() {
	for (j=1; j < mathOperations.length;j++) {
		activityName=mathOperations[j];
		parseXMLDoc();
	}
}

function linkDatas() {
	if (operationIndex == mathOperations.length) {
		parsedNodes++;
		if (parsedNodes == 2) {
		 //alert(parsedNodes + " Finally " + opObj["Division_Facts"] + " > " + mathOperations.length);
			onGameData(opObj);
		}
	}
}
