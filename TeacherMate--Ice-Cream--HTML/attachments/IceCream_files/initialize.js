/** Object Oriented Javascript Application For IceCream **/
var coneInterval;
var fall_pos_interval;
var start_pos_left = 15;
var scoop_array = ['brown_scoop','green_scoop','maroon_scoop','orange_scoop','rose_scoop','violet_scoop','white_scoop','yellow_scoop','brown_scoop'];
var cream_random;
var audio_from_xml;
var randam_audio_no;
var randam_audio_array_for_cone1;
var randam_audio_array_for_cone2;
var randam_audio_array_for_cone3;
var falling_cream_word;
var random_word;
var word_from_xml;
var click_count = 0;
var score = 0;
var timeInterval;
var scoreinterval;
var agent;
var isIntrosnd="false";

//Initial call Funtion When window is loaded. 
function scoreInit(){
	isIntrosnd = "false";
	 resetflag=false;
	// document.getElementById("scoop").style.visibility="visible";
	//document.getElementById("containword").style.visibility="visible";
	//loadXml('../../Config.xml');
	timeInterval=setInterval("timeData()",1000);
	scoreinterval=setInterval("scrintrvl()",1000);
	clrtime=setTimeout("loadIceXML(initialize)",1000);
	//document.getElementById("skipIcon").style.visibility="hidden";
	document.getElementById("homeaudio").style.visibility = "hidden";
	document.getElementById("mainBg").style.visibility="visible";
	
	
		//Audio_Instruct();
}
 function skipAudio(){
 				init_Audios.pause();
				init_Audios.src="";
				scoreInit();
	   }
	   
 //var init_Audios  = new Audio(); 
	   
function Audio_Instruct(){ 
          if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1) || (agent.indexOf("iPod") != -1)) {
					//playGameAudiosFinalCustom("icecreamdemo","wordxml");
					playGameAudiosFinalCustom(0, 1, "icecreamdemo","scoreInit")
		   }
		   else { 
		   if (isIntrosnd == "false"){
					isIntrosnd = "true";
					if(playIntro){
			init_Audios  = new Audio();
				 init_Audios.src = demoaudiopath+"icecreamdemo"+audio_compatible;
				 
				init_Audios.load();
				init_Audios.play(); 
				init_Audios.addEventListener('error',function(){scoreInit();});  
				init_Audios.addEventListener('ended',scoreInit,false);
						}
						else{
							scoreInit();
						}
				//scoreInit();
				}
		  }
}

function initialize(){
clearTimeout(clrtime); 
	audio_from_xml = getIceAudio();
	word_collection = getWordCollection();
	//alert(audio_from_xml);
	randam_audio_no = randomize(0,(audio_from_xml.length-1));
	 randam_audio_array_for_cone1 = audio_from_xml[randam_audio_no[0]];
	 randam_audio_array_for_cone2 = audio_from_xml[randam_audio_no[1]];
	 randam_audio_array_for_cone3 = audio_from_xml[randam_audio_no[2]];
	 //alert(randam_audio_array_for_cone1+":"+randam_audio_array_for_cone2+":"+randam_audio_array_for_cone3);
	 cone_suf = new conesuf_Obj(randam_audio_array_for_cone1,randam_audio_array_for_cone2,randam_audio_array_for_cone3);
	 get_the_answers_call = new get_the_answers(word_collection);
	// creamfallingloop();
	
	first_prefix_audio();
	 //activity();
	
}

//
function first_prefix_audio(){
 if(!resetflag){
	document.getElementById('cone1_suffix').innerHTML = randam_audio_array_for_cone1.fontcolor("red");
	
		if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1)|| (agent.indexOf("iPod") != -1)){
									playGameAudiosFinalCustom1(0,randam_audio_array_for_cone1,"second_prefix_audio");
							}
							else{
	  audio1 = new Audio();
		audio1.src = soundsPath+randam_audio_array_for_cone1+audio_compatible;
	
		audio1.load();
		audio1.play();	
		audio1.addEventListener('error',function(){second_prefix_audio();});	
		audio1.addEventListener('ended',second_prefix_audio,false);	
}
}
}
function second_prefix_audio(){
 if(!resetflag){
document.getElementById('cone1_suffix').innerHTML = randam_audio_array_for_cone1.fontcolor("black");
document.getElementById('cone1_suffix').innerHTML = randam_audio_array_for_cone1;
 
document.getElementById('cone2_suffix').style.color = "red";
	
		if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1)|| (agent.indexOf("iPod") != -1)){
									playGameAudiosFinalCustom1(0,randam_audio_array_for_cone2,"third_prefix_audio");
							}
							else{
	 audio1 = new Audio();
		audio1.src = soundsPath+randam_audio_array_for_cone2+audio_compatible;
		audio1.load();
		audio1.play();
		audio1.addEventListener('error',function(){third_prefix_audio();});
		audio1.addEventListener('ended',third_prefix_audio,false);	
}
}
}
function third_prefix_audio(){
 if(!resetflag){
document.getElementById('cone2_suffix').style.color = "black";
 
//document.getElementById('cone3_suffix').innerHTML = randam_audio_array_for_cone3.fontcolor("red");
document.getElementById('cone3_suffix').style.color = "red";
		if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1)|| (agent.indexOf("iPod") != -1)){
									playGameAudiosFinalCustom1(0,randam_audio_array_for_cone3,"activity");
							}
							else{
	 audio1 = new Audio();
		audio1.src = soundsPath+randam_audio_array_for_cone3+audio_compatible;
		audio1.load();
		audio1.play();
		audio1.addEventListener('error',function(){activity();});	
		audio1.addEventListener('ended',activity,false);	
}
}
}
var tmp = 0;
var left_picker_array = [15,41,67];
var left_random;
var final_left;
var ActivityChange = ["Empty","Non-Empty"];
var random_activity;
var finalActivity;
//For score updates
var gamedata={};
var gameAttempt=[];
var xmlstr="";
var xmlstr2="";
var timeOffset=0;
var timeInterval=0;
var scoreinterval=0;
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// For Thermometer Game - Support audio placy back 
var mainPathIndex = 0;
var subPathIndex = 0;
var audioIndex=0;
var tmpxmlstr="";
var gameQuestion="";
var gameResult="";
var timestamp="";

// HR
var UnixTimeStamp;
var gametimestamp=[];
function scrintrvl(){
        document.getElementById("Repeat").style.visibility = "visible";
		 clearInterval(scoreinterval);
		 score = TotalScore;//getScore();
		 showScore(score);
	}
    function timeData(){
		timeOffset++;
	}
function showScore(m){
clearTimeout(delaynegtime);
	//alert('hjdgj');
	 TotalScore = m;
		       document.getElementById("score").innerHTML=m;
			   gamedata.scorevalue=m;
			   gamedata.timeOffset=timeOffset;
			   gamedata.attempts=gameAttempt;
			   // HR
		gamedata.timestamp=gametimestamp;
		// HR
			   writeXML(gamedata);
	}
	
	function writeXML(obj){
		if(gameQuestion != "")
{
tmpxmlstr+='<Elem><Name>'+gameQuestion+'</Name><Timestamp>'+timestamp+'</Timestamp><Data>'+gameResult+'</Data></Elem>';
xmlstr='<PostGameResultForStudent>'
                               +'<gameid>'+game_id+'</gameid>'+
                               '<studentid>'+s_id+'</studentid>' +
                               '<GameResult><student><Usage><Elem><Name>IceCream</Name><Data>'+obj.timeOffset+'</Data></Elem></Usage><Word_And_Word_Parts>'+tmpxmlstr+'</Word_And_Word_Parts></student></GameResult>'+
 '</PostGameResultForStudent>';
		 
			xmlstr2='<GetStudentContentsByIds>' 
   +'<studentids>'+s_id+'</studentids><initialscore>'+InitialScore+'</initialscore><finalscore>'+obj.scorevalue+'</finalscore>'
+'</GetStudentContentsByIds>';
 
		// alert("xml output "+xmlstr);
}
	}
	var minus_suffix;
	
function activity(){

 if(!resetflag){
	document.getElementById("scoop").style.visibility="visible";
	document.getElementById("containword").style.visibility="visible";
	document.getElementById('cone3_suffix').style.color = "black";
	document.getElementById('cone3_suffix').innerHTML = randam_audio_array_for_cone3;
	clearInterval(coneInterval);
	clearTimeout(calling_loop);
	random_activity = random(ActivityChange.length-1);
	if(no_of_cnt<6){ 
	finalActivity = ActivityChange[random_activity]; 
	}
	else{ 
		finalActivity = ActivityChange[1];
	}
	random_word = randomize(0,get_the_answers_call.length-1);
	falling_cream_word = get_the_answers_call[random_word[0]];
	document.getElementById("cone1blur").style.visibility = "hidden";
	document.getElementById("cone2blur").style.visibility = "hidden";
	document.getElementById("cone3blur").style.visibility = "hidden";
	//alert('h '+falling_cream_word);

		  
		if(no_of_cnt<9){
		 for(var suf=0;suf<3;suf++){
				if(falling_cream_word.search(audio_from_xml[randam_audio_no[suf]])!=-1){ 
					 minus_suffix = audio_from_xml[randam_audio_no[suf]];
				} 
			 }
		//alert('wrd '+falling_cream_word+'kl  '+minus_suffix);	 
		 
	if(finalActivity == "Empty"){
		
		//alert('hi'+falling_cream_word);
		if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1)|| (agent.indexOf("iPod") != -1)){
			playGameAudiosFinalCustom1(1,falling_cream_word,"creamfallingloop");
		}
		else{
		 empty_audio = new Audio();
		empty_audio.src = soundsWordPath+falling_cream_word+audio_compatible;
		empty_audio.load();
		empty_audio.play();
		empty_audio.addEventListener("error",function(){ creamfallingloop();});
		empty_audio.addEventListener("ended",function(){document.getElementById('containword').innerHTML = "&nbsp&nbsp&nbsp?";creamfallingloop();},false);
		}
	}
	else{
		
		document.getElementById('containword').innerHTML = falling_cream_word;
		creamfallingloop();
	}
	}
	else if(no_of_cnt===9){
		document.onclick = "return false";
		runflag = false;
		click_count = 1;
		youGotAudio();
	}
	}
}
function creamfallingloop(){
	call_cnt = 0;
	left_random = randomize(0,left_picker_array.length-1);
	final_left  = left_picker_array[left_random[0]];
	
	//alert(get_the_answers_call);
	i=-20; 
	document.getElementById('cream_container').style.left = final_left+"%";
	//alert(document.getElementById('cream_container').style.left);
	 document.getElementById('cream_container').style.display = "none";
	//document.getElementById('cream_container').style.visibility = "hidden";
	
	cream_random = random(scoop_array.length-1);  
	document.getElementById('scoop').src = base_img+"images/"+scoop_array[cream_random]+".png";
	cone1 = document.getElementById('cone1');
	cone2 = document.getElementById('cone2');
	cone3 = document.getElementById('cone3'); 
	if(no_of_cnt<9){
	coneInterval = setInterval("cream_run()",100); 
	}
	else{
		youGotAudio();
	}
}
//when user click the cone.
 var cone_manage_id=0;
  var cone_Count=0;
  var CONE1LIMIT = 0;
  var CONE2LIMIT = 0;
  var CONE3LIMIT = 0;
  var id=0;
  function before_render(id,event){
  //test.innerHTML=CONE1LIMIT+":"+CONE2LIMIT+":"+CONE3LIMIT+":"+id;
	id=id;
	if(id == 0 && CONE1LIMIT<=2 || id == 1 && CONE2LIMIT<=2 || id == 2 && CONE3LIMIT<=2 ){
	cone_id(id,event);
	}
  }
function cone_id(id,event){  
	if(runflag == true){
	if(click_count == 0){
	cone_manage_id = event.target.id;
	//alert(cone_manage_id);
	showFocusImg(); 
	//var tmp=cone_manage_id.substr(4,1);
	//alert('tmp '+tmp);
	//alert(" gbhfg "+document.getElementById("cone3_suffix").innerHTML);
	//document.getElementById(event.target.id+"blur").style.visibility = "visible";

	this.id = id; 
	//document.onclick = "return false";
	coneArray = [cone1,cone2,cone3]; 
	cone_rect = new drawcone(coneArray[this.id]);
	click_count++;
	}
	}
	
}

function showFocusImg(){
	if(cone_manage_id=="cone1" && minus_suffix==document.getElementById("cone1_suffix").innerHTML) {
		document.getElementById("cone1blur").style.visibility = "visible";
	}
	if(cone_manage_id=="cone2" && minus_suffix==document.getElementById("cone2_suffix").innerHTML) {
		document.getElementById("cone2blur").style.visibility = "visible";
	}
	if(cone_manage_id=="cone3" && minus_suffix==document.getElementById("cone3_suffix").innerHTML) {
		document.getElementById("cone3blur").style.visibility = "visible";
	}
	//alert(falling_cream_word+'::::::: '+minus_suffix);	 
}

//after click the cream will fall.
function cream_fall(id,topfall,leftfall){ 
	
	fall_cream = new fall(id,topfall,leftfall);
}
//get the position.
function fall_top_and_left(){ 
	fall_pos_interval = setInterval("fall.pos()",100);
}

