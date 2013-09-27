/*****************Letter Animation.******************/
var letter_anim_interval;
var pos_interval;
var next_start_time;
var img = new Array();
var load_cnt = 0;
var call_ypos_cnt = 0;
var testcnt = 0;
var capture_anim_top = 0;
var final_top_pos = 0;
var powder_cnt = 1;
var upinterval ;
var animate_cnt = 1; 
var rightmov = 0;
var screenexitcnt = 0;
var score = 0;
var leftAdjust = 0;
var splicecnt=0;
var placeddownpos = 0;
var clickflag = false; 
	var Letters_image_Array3 = [["Alligator","a",10,10,15,0,60],["Bee","b",4,5,15,4,70],["Birds","n",6,7,15,2,60],["Camel","c",9,10,20,2,60],["Duck","d",11,3,15,4,60],
	["Elephant","e",8,10,20,2,60],["Fox","f",8,10,20,0,60],["Goose","g",8,5,20,4,60],["Hippo","h",9,10,20,2,60],["Inchworm","i",10,5,10,4,60],["Jaguar","j",8,8,15,2,60],["Lion","l",11,6,17,2,60],
	["Monkey","m",14,8,15,2,60],["Ostrich","o",15,5,25,4,60],["Pig","p",5,10,25,2,60],["Rabbit","r",14,5,25,4,60],["Snake","s",15,5,25,4,60],["Tiger","t",10,5,25,4,60],["Umbrellabird","u",14,5,25,4,60],
	["Vulture","v",7,5,25,4,60],["Wolf","w",9,10,25,0,60],["Zebra","z",8,10,25,0,60]]; 
var Alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];							
var letter_anim = {
	startX: 0,
	startY: 0,
	EndX:   0,
	EndY:  100, 
	Random	: function(){ 
		 clearTimeout(pos_interval); 
		 clearTimeout(pos_interval);
		 nextStageCnt ++;
		 clearTimeout(next_start_time);
		 var random_letters_img = randomize(0,(Letters_image_Array.length-1));
		  var random_letters_img = randomize(0,(Letters_image_Array.length-1));
		 var random_letters_custom = randomize(0,(w.length-1));
		 
		 for(var j=0;j<Letters_image_Array3.length;j++){  
		
			if(Letters_image_Array3[j][1] == w[random_letters_custom[w.length-1]]){
			 // alert(j+":"+Letters_image_Array3[j][1]+" ==="+ w[random_letters_custom[w.length-1]]);
				random_letters_img[0] = j;
				//break;
			 }
		 }
		 //splicecnt = random_letters_img[0]; 
		 final_animate_letter  	  =  Letters_image_Array[random_letters_img[0]][0];
		 final_animate_audio 	  = Letters_image_Array[random_letters_img[0]][7];
		 correct_answer 	 	  = Letters_image_Array[random_letters_img[0]][1];
		 
		 gameQuestion			  = correct_answer; 
		 frames					  =	Letters_image_Array[random_letters_img[0]][2];
		 AlphaRandom			  = randomize(0,(Alphabet.length-1));
		 document.getElementById("letter_anim").style.visibility = "hidden"; 
		 document.getElementById("letter_anim").style.left=Letters_image_Array[random_letters_img[0]][5]+"%";
		 document.getElementById("right_answer_img_1").src = base_url+"images/circus/table01.png";
		 document.getElementById("right_answer_img_2").src = base_url+"images/circus/table02.png";
		 document.getElementById("right_answer_img_3").src = base_url+"images/circus/table03.png";
		 leftAdjust = parseInt(document.getElementById("letter_anim").style.left);
		 document.getElementById("letter_anim").style.width=Letters_image_Array[random_letters_img[0]][3]+"%";
		 document.getElementById("letter_anim").style.height=Letters_image_Array[random_letters_img[0]][4]+"%";		 
		 capture_anim_top = parseInt(document.getElementById("letter_anim").style.height); 
		 placeddownpos = Letters_image_Array[random_letters_img[0]][6];
		 var activity = randomize(0,1); 
		 if(activity[0] == 0){
			
			 letterplace.left_side();
		 }
		 else if(activity[0] == 1){
			
			letterplace.right_side();
		 }
		 
	},
	Animate : function(){   
		clearTimeout(letter_anim_interval);  
		document.getElementById("letter_anim").src = "";
		document.getElementById("letter_anim").style.visibility = "visible";	
		document.getElementById("letter_anim").style.display = "block"; 
		document.getElementById("letter_anim").src = final_animate_letter; 
		document.getElementById("letter_anim").style.webkitTransition  = "0.01s ease-in"; 
	},
	movey : function(){
		clickflag = true;
		if(click_count == 1){ 
			 final_top_pos =  parseInt(document.getElementById(reposid).style.top) - capture_anim_top + 10; 
			if(letter_anim.startY<final_top_pos){  
				clearInterval(pos_interval);
				letter_anim.startY +=1;
				document.getElementById("letter_anim").style.webkitTransition  = "0.00001s ease-in"; 
				document.getElementById("letter_anim").style.top = letter_anim.startY+"%"; 
				document.getElementById("letter_anim").style.visibility = "visible"; 
				document.getElementById("letter_anim").style.display = "block"; 
				pos_interval = setTimeout("letter_anim.movey()",50);
			}
			else if(letter_anim.startY>=final_top_pos){ 
				if(document.getElementById("right_answer_text_"+click_id_letter).innerHTML == correct_answer){
					score ++;
					UnixTimeStamp = Math.round(new Date().getTime() / 1000);
					document.getElementById("scorecard").innerHTML = score;
					gameResult = 1;
					upinterval = setInterval("letter_anim.up()",50);
					showScore(score);
				}
				else{
				
					document.getElementById("right_answer_img_"+click_id_letter).src = base_url+"images/circus/tablebroken.png";
					UnixTimeStamp = Math.round(new Date().getTime() / 1000);
					document.getElementById("scorecard").innerHTML = score;
					gameResult = 0;
					pos_interval = setTimeout("letter_anim.wrong()",3000);
					showScore(score);
				}
				
			}
			
		}
		else{
			if(letter_anim.startY<placeddownpos){  
				clearInterval(pos_interval);
				letter_anim.startY +=1;
				document.getElementById("letter_anim").style.webkitTransition  = "0.00001s ease-in"; 
				document.getElementById("letter_anim").style.top = letter_anim.startY+"%"; 
				document.getElementById("letter_anim").style.visibility = "visible"; 
				document.getElementById("letter_anim").style.display = "block"; 
				pos_interval = setTimeout("letter_anim.movey()",50);
			}
			else if(letter_anim.startY>=placeddownpos){
				clearTimeout(pos_interval);
				clearTimeout(letter_anim_interval);
				letter_anim.startY = 0;  
				powder_cnt = 1;
				clickflag = false;
				document.getElementById("powder").src = pre_load_powder_images[powder_cnt];
				document.getElementById("powder").style.left = document.getElementById("letter_anim").style.left;
				document.getElementById("powder").style.visibility = "visible";
				UnixTimeStamp = Math.round(new Date().getTime() / 1000);
				document.getElementById("scorecard").innerHTML = score;
				gameResult = 0;
				next_start_time = setInterval("letter_anim.powder();",100);
				showScore(score);
			}
		}
	},
	moveyleft : function(){
		clickflag = true;
		if(click_count == 1){ 
			 final_top_pos =  parseInt(document.getElementById(reposid).style.top) - capture_anim_top + 10; 
			if(letter_anim.startY<final_top_pos){  
				clearInterval(pos_interval);
				letter_anim.startY +=1;
				document.getElementById("letter_anim").style.webkitTransition  = "0.00001s ease-in"; 
				document.getElementById("letter_anim").style.top = letter_anim.startY+"%"; 
				document.getElementById("letter_anim").style.visibility = "visible"; 
				document.getElementById("letter_anim").style.display = "block"; 
				pos_interval = setTimeout("letter_anim.movey()",50);
			}
			else if(letter_anim.startY>=final_top_pos){ 
				if(document.getElementById("right_answer_text_"+click_id_letter).innerHTML == correct_answer){
					score ++;
					UnixTimeStamp = Math.round(new Date().getTime() / 1000);
					document.getElementById("scorecard").innerHTML = score;
					gameResult = 1;
					upinterval = setInterval("letter_anim.up()",50);
					showScore(score);
				}
				else{
					document.getElementById("right_answer_img_"+click_id_letter).src = base_url+"images/tablebroken.png";
					UnixTimeStamp = Math.round(new Date().getTime() / 1000);
					document.getElementById("scorecard").innerHTML = score;
					gameResult = 0;
					pos_interval = setTimeout("letter_anim.wrong()",3000);
					showScore(score);
				}
				
			}
		}
		else{
			if(letter_anim.startY<placeddownpos){  
				clearInterval(pos_interval);
				letter_anim.startY +=1;
				document.getElementById("letter_anim").style.webkitTransition  = "0.00001s ease-in"; 
				document.getElementById("letter_anim").style.top = letter_anim.startY+"%"; 
				document.getElementById("letter_anim").style.visibility = "visible"; 
				document.getElementById("letter_anim").style.display = "block"; 
				pos_interval = setTimeout("letter_anim.movey()",50);
			}
			else if(letter_anim.startY>=placeddownpos){
				clearTimeout(pos_interval);
				clearTimeout(letter_anim_interval);
				letter_anim.startY = 0;  
				powder_cnt = 0;
				clickflag = false;
				document.getElementById("powder").src = pre_load_powder_images[powder_cnt];
				document.getElementById("powder").style.left = document.getElementById("letter_anim").style.left;
				document.getElementById("powder").style.visibility = "visible";
				UnixTimeStamp = Math.round(new Date().getTime() / 1000);
				document.getElementById("scorecard").innerHTML = score;
				gameResult = 0;
				next_start_time = setInterval("letter_anim.powder();",100);
				showScore(score);
			}
		}
	},
	powder : function(){
		if(powder_cnt<16){
			powder_cnt++;
			document.getElementById("powder").src = pre_load_powder_images[powder_cnt];
		}
		else if(powder_cnt>=16){
			clearInterval(next_start_time);
			document.getElementById("powder").style.visibility = "hidden"; 
			letter_anim.after_powder_audio();
		}
	},
	up : function(){
		clearTimeout(pos_interval);
		if(letter_anim.startY>20){
			letter_anim.startY--;
			document.getElementById("letter_anim").style.webkitTransition  = "0.00001s ease-in"; 
			document.getElementById("letter_anim").style.top = letter_anim.startY+"%"; 
			document.getElementById("letter_anim").style.left =(rightmov+=0.1)+"%";
			document.getElementById("letter_anim").style.visibility = "visible"; 
			document.getElementById("letter_anim").style.display = "block";
		}	
		else{
			clearInterval(upinterval);
			letter_anim.startY = 0;
			//Letters_image_Array.splice(splicecnt,1); 
			if(nextStageCnt==7){
				screenexitcnt ++;
				nextscreeninterval = setInterval("letter_anim.nextscreen()",1);
			}
			else{
			next_start_time = setTimeout("letter_anim.Random();",1000);
			}
		}
	},
	nextscreen : function(){ 
		if(xscreen>nextscreenval){
			switch(screenexitcnt){
				case 1:
					document.getElementById("boy_anim_2").style.visibility = "hidden";
					document.getElementById("lighting1").style.visibility = "hidden";
					document.getElementById("lighting2").style.visibility = "hidden";
					document.getElementById("boy_anim_2").style.width = "4%";
					document.getElementById("boy_anim_2").style.height = "15%";
					document.getElementById("boy_anim_2").style.left = "20%";
					document.getElementById("boy_anim_2").style.top = "57%";
					document.getElementById("boy_anim_1").style.visibility = "hidden";
					
				break;
				case 2: 
					clearInterval(stage2interval);
					document.getElementById("lighting1").style.visibility = "hidden";
					document.getElementById("lighting2").style.visibility = "hidden";
					document.getElementById("boy_anim_2").style.visibility = "hidden";
				break;
				case 3:
					postGameOverMessageToApp();
				break;
			}
			xscreen-=6;
			document.getElementById("letter_anim").style.visibility = "hidden";
			document.getElementById("right_answer_field_1").style.visibility = "hidden";
			document.getElementById("right_answer_field_2").style.visibility = "hidden";
			document.getElementById("right_answer_field_3").style.visibility = "hidden";
			document.getElementById("bg").style.marginLeft = xscreen+"%";
		}
		else if(xscreen<=nextscreenval){
			clearInterval(nextscreeninterval);
			xscreen = nextscreenval;
			nextscreenval = -69;
			nextStageCnt=0;
			document.getElementById("bg").style.marginLeft = xscreen+"%";
			switch(screenexitcnt){
				case 1: 
					next_start_time = setTimeout("stage2();",1000);
				break;
				case 2: 
					next_start_time = setTimeout("letter_anim.Random();",1000);
				break;
				case 3:
					postGameOverMessageToApp();
				break;
			}
		}
	},
	wrong : function(){
		clearTimeout(pos_interval);
		
		document.getElementById(reposid).style.visibility = "hidden";
		letter_anim.startY = 0;
		click_count = 0;
		afterpowder = new Audio();
				afterpowder.src = soundsDirPath+final_animate_audio+audio_compatible;
				afterpowder.load();
				afterpowder.play();
		letter_anim.movey();
	},
	start_audio : function(){
	},
	powder_audio : function(){
	 
		if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1)|| (agent.indexOf("iPod") != -1)){
			playGameAudiosFinalCustom1(1,"circusdemo","letter_anim.after_powder_audio");
		}
		else{
			var powder = new Audio();
			powder.src = soundsDirPath+"circusdemo"+audio_compatible;
			powder.load();
			powder.play();
			powder.addEventListener('ended',letter_anim.after_powder_audio,false);
		}
	},
	after_powder_audio : function(){
	 
		document.getElementById("letter_anim").style.visibility = "hidden"; 
		if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1)|| (agent.indexOf("iPod") != -1)){
			playGameAudiosFinalCustom1(1,final_animate_letter,"letter_anim.movey");
		}
		else{
			afterpowder = new Audio();
				afterpowder.src = soundsDirPath+final_animate_audio+audio_compatible;
				//alert(afterpowder.src);
				//afterpowder.load();
				afterpowder.addEventListener("canplaythrough",function(){afterpowder.play();});
			setTimeout(function(){letter_anim.movey();},2000);
		}
	},
	correct_audio : function(){
		if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1)|| (agent.indexOf("iPod") != -1)){
			playGameAudiosFinalCustom1(1,"circusdemo","playGameAudiosFinalCallBackDummy");
		}
		else{
			var correctaudio = new Audio();
			correctaudio.src = soundsDirPath+"circusdemo"+audio_compatible;
			correctaudio.load();
			correctaudio.play();
			}
	},
	wrong_audio : function(){
		if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1)|| (agent.indexOf("iPod") != -1)){
			playGameAudiosFinalCustom1(1,"circusdemo","playGameAudiosFinalCallBackDummy");
		}
		else{
			var wrongaudio = new Audio();
			wrongaudio.src = soundsDirPath+"circusdemo"+audio_compatible;
			wrongaudio.load();
			wrongaudio.play();
			}
	}
};
function postGameOverMessageToApp() { 
    ajax_call();
}
var nextscreenval = -35;
var nextscreeninterval;
var xscreen=0;

//For score updates
var gamedata={};
var gameAttempt=[];
var xmlstr="";
var xmlstr2="";
 
var timeInterval=0;
var scoreinterval=0;

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
		 clearInterval(scoreinterval);
		 score = TotalScore;//getScore(); 
		 showScore(score);
	}
    function timeData(){
		timeOffset++;
	}
function showScore(m){ 

 TotalScore = m;
 
	document.getElementById("scorecard").innerHTML=m;
	gamedata.scorevalue=m;
	gamedata.timeOffset=timeOffset;
	gamedata.attempts=gameAttempt;
	gamedata.timestamp=UnixTimeStamp;
	writeXML(gamedata);
}

 

function writeXML(obj){
 	if(gameQuestion != ""){
	 tmpxmlstr+='<Elem><Name>'+gameQuestion+'</Name><Timestamp>'+obj.timestamp+'</Timestamp><Data>'+gameResult+'</Data></Elem>';
	
		xmlstr='<PostGameResultForStudent>'
                               +'<gameid>'+game_id+'</gameid>'+
                               '<studentid>'+s_id+'</studentid>' +
                               '<GameResult><student><Usage><Elem><Name>Circus</Name><Data>'+obj.timeOffset+'</Data></Elem></Usage><Initial_Letter_Sounds>'+tmpxmlstr+'</Initial_Letter_Sounds></student></GameResult>'+
 '</PostGameResultForStudent>';
		   
			xmlstr2='<GetStudentContentsByIds>' 
   +'<studentids>'+s_id+'</studentids><initialscore>'+InitialScore+'</initialscore><finalscore>'+obj.scorevalue+'</finalscore>'
+'</GetStudentContentsByIds>';
}
}

 