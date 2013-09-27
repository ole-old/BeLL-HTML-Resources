var ChangeCnt = 0;
//TotalScore = 0;
	function post_score_details(params){ 
	// alert(params);
 	if (window.XMLHttpRequest) { 
		xmlhttp=new XMLHttpRequest;
	} else { 
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = response_post_score_details;  
	if(ChangeCnt == 0){
	 
		xmlhttp.open("POST",base_url+"games/GetStudentContentsByIds", true);  
	}
	else if(ChangeCnt == 1){
		xmlhttp.open("POST",base_url+"games/PostGameResultForStudent", true);
	}
	else if(ChangeCnt == 2){
		xmlhttp.open("POST",base_url+"games/PostGameResultForStudentAtExit", true);
	}
	else if(ChangeCnt == 3){
		xmlhttp.open("POST",base_url+"games/PostGameResultForStudentAtIdeal", true);
	}
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.setRequestHeader("Content-length", params.length); 
	xmlhttp.send(params); 
}
function response_post_score_details(){
if (xmlhttp.readyState == 4) {
	if(ChangeCnt == 0){
 //alert(xmlhttp.responseText);
		ChangeCnt = 1;
		post_score_details(xmlstr);
	}
	else if(ChangeCnt == 1){
		 //alert(xmlhttp.responseText);
		postGame();
	}
	else if(ChangeCnt == 2){
		 // alert("Hi"+xmlhttp.responseText);
		postGame();
	}
	else if(ChangeCnt == 3){
		 // alert("Hi"+xmlhttp.responseText);
		PostOneMinTimeExit();
	}
}
}
function exit(){
 //alert("Hi"+s_id);
	ChangeCnt = 2; 
	if(localStorage.pagecount){
    localStorage.pagecount=""; 
	//alert("Set");
	}
	// alert(""+xmlstr);
			//alert("Score : "+xmlstr2);
	var posr_var = "student_id="+s_id+"&category_id="+category+"&subcategory="+currentSubCategory+"&seconds="+timeOffset+"&total_score="+TotalScore;
	 // alert(posr_var);
	post_score_details(posr_var);
}
function OneMinTimeExit(){
	ChangeCnt = 3;
	var posr_var = "student_id="+s_id+"&total_score="+TotalScore;
	post_score_details(posr_var);
}
function splaudio(_pause , _callback){
//alert("Ear");
		document.getElementById("homeaudio").style.visibility = "hidden";
	 	_pause.pause();
		_callback();
}
function postGame()
{ 
	if(localStorage.pagecount){
     localStorage.pagecount=""; 
	 }
     //alert('URL : ' + base_url+'games/games_listing/'+category+'/'+currentSubCategory+'/'+ timeOffset);
	 document.location =base_url+'games/games_listing/'+category+'/'+currentSubCategory+'/'+ timeOffset;
}
function PostOneMinTimeExit()
{ 
	if(localStorage.pagecount){
     localStorage.pagecount="";
	 }
	 document.location =base_url+'student/student_list';
}