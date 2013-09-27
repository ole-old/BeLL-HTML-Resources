// JavaScript Document

lastEventOccurredTimeDifference = 0;

setTimeout(function(){startTimer();},60000);

function startTimer() {
	//alert('------------ TIME ------------  :  ' + lastEventOccurredTimeDifference);
	console.log('------------ TIME ------------   :  ' + lastEventOccurredTimeDifference);
	lastEventOccurredTimeDifference++;
	if(lastEventOccurredTimeDifference <= 60) {
		setTimeout(startTimer,1000);
	} else {
		//document.location =base_url+'student/student_list';
		//postGame();
		//document.location = 'http://google.com';
		OneMinTimeExit();
	}
}

function unsetTimer() {
	lastEventOccurredTimeDifference = 0;
	 //alert("Hi");
	//console.log('unset');
}

if (window.addEventListener) {  // all browsers except IE before version 9
	//alert('INSIDE IF');
	//console.log('INSIDE IF');
	//document.body.addEventListener ("load", startTimer, true);
	document.body.addEventListener ("click", unsetTimer, true);
	document.addEventListener("keypress", unsetTimer, true);
	//alert('INSIDE IF');
}
else {
	if (window.attachEvent) {   // IE before version 9
		//alert('INSIDE ELSE');
		//console.log('INSIDE ELSE');
		document.body.attachEvent ("load", startTimer);
		document.body.attachEvent ("click", unsetTimer);
		document.body.attachEvent ("keypress", unsetTimer);
		//alert('INSIDE ELSE');
	}
}