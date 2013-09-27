/** Object Oriented Javascript Application For Conedraw **/
//Drawing the cone for touch
var drawcone={};
var fall={};
var cream_run={};
var coneArray=new Array();

var conesuf_Obj={};
//Draw A Rect.
drawcone =function(coneId){ 
	this.coneId = coneId;  
	drawcone.conetop = coneId.style.top; 
	drawcone.coneleft = coneId.style.left; 
	
	creamfall = drawcone.creamfallpos(this.coneId);
}

//creamfall pos setup.
drawcone.creamfallpos=function(coneId){ 
	this.creamfall_coneid = coneId;
	this.creamfall_top	= 35;
	this.creamfall_left = 20; 
	cream_fall(this.creamfall_coneid,this.creamfall_top,this.creamfall_left); 
}

//Fall cream.
fall = function(coneId,topfall,leftfal){ 
	clearInterval(coneInterval);
	fall.coneId = coneId;
	fall.topfall = topfall+"%";
	fall.leftfall = leftfal+"%"; 
	
	fall_top_and_left(); 
}

//Fall cream top and left Pos.
var j=0;
var k=0;
var left_pos=0;
var top_pos=0;
var first_cone_cnt = 0;
var second_cone_cnt = 0;
var third_cone_cnt = 0;
var top_down_bottom_up_approach = 0;
fall.pos = function(){  
		
		j=Number(cream_run.run_cream.style.left.split('%')[0]); 
		k=Number(cream_run.run_cream.style.top.split('%')[0]);
		
		 switch(cone_manage_id){
		 case "cone1": 
		left_pos=Number(document.getElementById("first_cone_"+first_cone_cnt).style.left.split('%')[0]);
		top_pos=Number(document.getElementById("first_cone_"+first_cone_cnt).style.top.split('%')[0]); 
		break;
		case "cone2": 
		left_pos=Number(document.getElementById("sec_cone_"+second_cone_cnt).style.left.split('%')[0]);
		top_pos=Number(document.getElementById("sec_cone_"+second_cone_cnt).style.top.split('%')[0]); 
		break;
		 case "cone3": 
		left_pos=Number(document.getElementById("third_cone_"+third_cone_cnt).style.left.split('%')[0]);
		top_pos=Number(document.getElementById("third_cone_"+third_cone_cnt).style.top.split('%')[0]); 
		break;
	 }
		top_down_bottom_up_approach = k; 
		//alert(j+":"+left_pos);
		if(top_down_bottom_up_approach<=top_pos){
		//alert("Smaller : "+top_down_bottom_up_approach);
		if(j<=left_pos ){
		if(j<left_pos){  
			j++; 
		} 
		if(k<top_pos){
			k++;
		}
		if(k>=top_pos && j>=left_pos){ 
			clearInterval(fall_pos_interval);
			document.getElementById('cream_container').style.visibility = "hidden";
			/*document.getElementById('sec_cone').style.visibility = "visible";
			document.getElementById('cone2_0').style.visibility = "visible";
			document.getElementById('sec_cone').style.top = cream_run.run_cream.style.top;
			document.getElementById('sec_cone').style.left =cream_run.run_cream.style.left;
			document.getElementById('cone2_0').src = "images/"+scoop_array[cream_random]+".png";*/
			// alert(cone_manage_id);
			// click_count = 0;
			// tmp =1;
			 //creamfallingloop();
			  if(call_cnt == 0){
			 call_cnt++;
			 eval_part(cone_manage_id,call_cnt);
			 
			 }
		}
		cream_run.run_cream = document.getElementById('cream_container');
	//cream_run.run_cream.style.display = "block"; 
	cream_run.run_cream.style.webkitTransition  = "0.1s ease-in-out";
	cream_run.run_cream.style.webkitTransitionTimingFunction ="linear, ease-in-out";
	cream_run.run_cream.style.top  =  k+"%" ;
	cream_run.run_cream.style.left  =  j+"%" ; 
		}
		  if(j>left_pos){
				if(j>left_pos){  
			j--; 
		} 
		if(k<top_pos){
			k++;
		}
		if(k>=top_pos && j<=left_pos){
			clearInterval(fall_pos_interval);
			document.getElementById('cream_container').style.visibility = "hidden";
			/*document.getElementById('sec_cone').style.visibility = "visible";
			document.getElementById('cone2_0').style.visibility = "visible";
			document.getElementById('sec_cone').style.top = cream_run.run_cream.style.top;
			document.getElementById('sec_cone').style.left =cream_run.run_cream.style.left;
			document.getElementById('cone2_0').src = "images/"+scoop_array[cream_random]+".png";*/
			// alert(cone_manage_id);
			// click_count = 0;
			// tmp =1;
			 //creamfallingloop();
			  if(call_cnt == 0){
			 call_cnt++;
			 eval_part(cone_manage_id,call_cnt);
			 
			  }
		}
		cream_run.run_cream = document.getElementById('cream_container');
		//alert(k +">="+top_pos+" &&"+ j+"<="+left_pos);
	//cream_run.run_cream.style.display = "block"; 
	cream_run.run_cream.style.webkitTransition  = "0.1s ease-in-out";
	cream_run.run_cream.style.webkitTransitionTimingFunction ="linear, ease-in-out";
	cream_run.run_cream.style.top  =  k+"%" ;
	cream_run.run_cream.style.left  =  j+"%" ; 
		}
	}
			else if(top_down_bottom_up_approach>top_pos){
			//alert("Greater : "+top_down_bottom_up_approach+":"+top_pos);
		if(j<=left_pos ){
		if(j<left_pos){  
			j++; 
		} 
		if(k>top_pos){
			k--;
		}
		if(k<=top_pos && j>=left_pos){ 
			clearInterval(fall_pos_interval);
			document.getElementById('cream_container').style.visibility = "hidden";
			/*document.getElementById('sec_cone').style.visibility = "visible";
			document.getElementById('cone2_0').style.visibility = "visible";
			document.getElementById('sec_cone').style.top = cream_run.run_cream.style.top;
			document.getElementById('sec_cone').style.left =cream_run.run_cream.style.left;
			document.getElementById('cone2_0').src = "images/"+scoop_array[cream_random]+".png";*/
			// alert(cone_manage_id);
			// click_count = 0;
			// tmp =1;
			 //creamfallingloop();
			  if(call_cnt == 0){
			 call_cnt++;
			 eval_part(cone_manage_id,call_cnt);
			 
			  }
		}
		cream_run.run_cream = document.getElementById('cream_container');
	//cream_run.run_cream.style.display = "block"; 
	cream_run.run_cream.style.webkitTransition  = "0.1s ease-in-out";
	cream_run.run_cream.style.webkitTransitionTimingFunction ="linear, ease-in-out";
	cream_run.run_cream.style.top  =  k+"%" ;
	cream_run.run_cream.style.left  =  j+"%" ; 
		}
		  if(j>left_pos){
				if(j>left_pos){  
			j--; 
		} 
		if(k>top_pos){
			k--;
		}
		if(k<=top_pos && j<=left_pos){
			clearInterval(fall_pos_interval);
			document.getElementById('cream_container').style.visibility = "hidden";
			/*document.getElementById('sec_cone').style.visibility = "visible";
			document.getElementById('cone2_0').style.visibility = "visible";
			document.getElementById('sec_cone').style.top = cream_run.run_cream.style.top;
			document.getElementById('sec_cone').style.left =cream_run.run_cream.style.left;
			document.getElementById('cone2_0').src = "images/"+scoop_array[cream_random]+".png";*/
			// alert(cone_manage_id);
			// click_count = 0;
			// tmp =1;
			 //creamfallingloop();
			  if(call_cnt == 0){
			 call_cnt++;
			 eval_part(cone_manage_id,call_cnt);
			 
			 }
		}
		cream_run.run_cream = document.getElementById('cream_container');
		//alert(k +">="+top_pos+" &&"+ j+"<="+left_pos);
	//cream_run.run_cream.style.display = "block"; 
	cream_run.run_cream.style.webkitTransition  = "0.1s ease-in-out";
	cream_run.run_cream.style.webkitTransitionTimingFunction ="linear, ease-in-out";
	cream_run.run_cream.style.top  =  k+"%" ;
	cream_run.run_cream.style.left  =  j+"%" ; 
		}
	}
}

//top to bottom cream run.
var call_cnt = 0;
var i=-20;
var fall_word_suf="";
var fall_word_pre="";
var last_word_suf_1="";
var last_word_pre_1="";
var last_word_suf_2="";
var last_word_pre_2="";
var last_word_suf_3="";
var last_word_pre_3="";
var full_word_cone1="";
var full_word_cone2="";
var full_word_cone3="";
var calling_loop;
var no_of_cnt = 0

 

var whole_word="";
var last_wordSuff="";
var last_wordPre="";



eval_part = function(cone_manage_id){ 
	// alert("cone_manage_id ="+cone_manage_id);
	 //alert(resetflag);
	 if(!resetflag){
	switch(cone_manage_id){
		case "cone1":  
			document.getElementById("first_cone_"+first_cone_cnt).style.visibility="visible"; 
			document.getElementById("cone1_"+first_cone_cnt).src =  base_img+"images/"+scoop_array[cream_random]+".png";
			document.getElementById("cone1_ans_"+first_cone_cnt).innerHTML = falling_cream_word;
			//alert(document.getElementById("first_cone_"+first_cone_cnt).childNodes[3].nodeName);
			//first_cone_cnt++;
			//click_count = 0; 
			 //creamfallingloop();
			 full_word_cone1 = falling_cream_word;
			 for(var suf=0;suf<3;suf++){
				if(falling_cream_word.search(audio_from_xml[randam_audio_no[suf]])!=-1){
					 fall_word_pre = falling_cream_word.substr(0,(falling_cream_word.length-audio_from_xml[randam_audio_no[suf]].length));
					 fall_word_suf = audio_from_xml[randam_audio_no[suf]]; 
					 last_word_suf_1 = fall_word_suf;
					 last_word_pre_1 = fall_word_pre;
				} 
			 }
					if(fall_word_suf == audio_from_xml[randam_audio_no[0]]){ 
						no_of_cnt++;
						first_cone_cnt++;
						CONE1LIMIT++;
						get_the_answers_call.splice(random_word[0],1);
						scoop_array.splice(cream_random,1);
						//audio_from_xml.splice(randam_audio_no[0],1);
						runflag = false;
						click_count = 0;
						score++;
						document.getElementById("score").innerHTML = score;
						//calling_loop = setTimeout("activity()",1000);
						timestamp = Math.round((new Date()).getTime() / 1000);
						gameQuestion = fall_word_suf;
						gameResult = 1; 
						showScore(score);
						if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1)|| (agent.indexOf("iPod") != -1)){
									playGameAudiosFinalCustom1(1,"ding","activity");
							}
							else{
								 ding = new Audio();
									ding.src = soundsWordPath+"ding"+audio_compatible;
									ding.load();
									ding.play();
									ding.addEventListener('error',function(){activity();});
									ding.addEventListener('ended',activity);
								}
					}
					else{
					  //alert("wrong");
							var anshigh1 = fall_word_pre+fall_word_suf.fontcolor("red");
							 
							document.getElementById("containword").innerHTML = fall_word_pre+fall_word_suf.fontcolor("red");
						
						 
							 if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1)|| (agent.indexOf("iPod") != -1)){
									playGameAudiosFinalCustom1(0,fall_word_suf,"cone1_Obj");
							}
							else{
								var audio1 = new Audio();
								audio1.src = soundsPath+fall_word_suf+audio_compatible;
								audio1.load();
								audio1.play();
								audio1.addEventListener('error',function() {setTimeout(function(){cone1_Obj();},1000);});
								audio1.addEventListener('ended',function() {setTimeout(function(){cone1_Obj();},1000);});
							}
								timestamp = Math.round((new Date()).getTime() / 1000);
								gameQuestion = fall_word_suf;
								gameResult = 0;
								delaynegtime=setTimeout("showScore('"+score+"')",500); 
							//cone1_Obj();
					}
		break;
		case "cone2": 
			document.getElementById("sec_cone_"+second_cone_cnt).style.visibility="visible";
			document.getElementById("cone2_"+second_cone_cnt).src =  base_img+"images/"+scoop_array[cream_random]+".png";
			document.getElementById("cone2_ans_"+second_cone_cnt).innerHTML = falling_cream_word;
			full_word_cone2 = falling_cream_word;
			//third_cone_cnt++;
			//click_count = 0; 
			 //creamfallingloop();
			  for(var suf=0;suf<3;suf++){
				if(falling_cream_word.search(audio_from_xml[randam_audio_no[suf]])!=-1){
					 fall_word_pre = falling_cream_word.substr(0,(falling_cream_word.length-audio_from_xml[randam_audio_no[suf]].length));
					 fall_word_suf = audio_from_xml[randam_audio_no[suf]]; 
					 last_word_suf_2 = fall_word_suf;
					 last_word_pre_2 = fall_word_pre;
				} 
			 }
					if(fall_word_suf == audio_from_xml[randam_audio_no[1]]){
						no_of_cnt++;
						second_cone_cnt++;
						CONE2LIMIT++;
						runflag = false; 
						get_the_answers_call.splice(random_word[0],1);
						scoop_array.splice(cream_random,1);
						//audio_from_xml.splice(randam_audio_no[1],1);
						click_count = 0;
						score++; 
						document.getElementById("score").innerHTML = score;
						//calling_loop = setTimeout("activity()",1000);
						timestamp = Math.round((new Date()).getTime() / 1000);
						gameQuestion = fall_word_suf;
						gameResult = 1;
						showScore(score);
						if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1)|| (agent.indexOf("iPod") != -1)){
									playGameAudiosFinalCustom1(1,"ding","activity");
							}
							else{
								  ding = new Audio();
									ding.src = soundsWordPath+"ding"+audio_compatible;
									ding.load();
									ding.play();	
									ding.addEventListener('error',function(){activity();});
									ding.addEventListener('ended',activity);
								}
					}
					else{
					   // alert("wrong2");
						var anshigh2 = fall_word_pre+fall_word_suf.fontcolor("red");
						document.getElementById("containword").innerHTML = anshigh2;
						if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1)|| (agent.indexOf("iPod") != -1)){
									playGameAudiosFinalCustom1(0,fall_word_suf,"cone2_Obj");
							}
							else{
								var audio2 = new Audio();
									audio2.src = soundsPath+fall_word_suf+audio_compatible;
									audio2.load();
									audio2.play();
									audio2.addEventListener('error',function() {setTimeout(function(){cone2_Obj();},1000);});
									audio2.addEventListener('ended',function() {setTimeout(function(){cone2_Obj();},1000);});
								}
								timestamp = Math.round((new Date()).getTime() / 1000);
								gameQuestion = fall_word_suf;
								gameResult = 0;
								delaynegtime=setTimeout("showScore('"+score+"')",500);
					}
		break;
		 case "cone3":  
			document.getElementById("third_cone_"+third_cone_cnt).style.visibility="visible";
			document.getElementById("cone3_"+third_cone_cnt).src =  base_img+"images/"+scoop_array[cream_random]+".png";
			document.getElementById("cone3_ans_"+third_cone_cnt).innerHTML = falling_cream_word;
			full_word_cone3 = falling_cream_word;
			//third_cone_cnt++;
			//click_count = 0; 
			 //creamfallingloop();
			  for(var suf=0;suf<3;suf++){
				if(falling_cream_word.search(audio_from_xml[randam_audio_no[suf]])!=-1){
					 fall_word_pre = falling_cream_word.substr(0,(falling_cream_word.length-audio_from_xml[randam_audio_no[suf]].length));
					 fall_word_suf = audio_from_xml[randam_audio_no[suf]];
					 last_word_suf_3 = fall_word_suf;
					 last_word_pre_3 = fall_word_pre;					 
				} 
			 }
					if(fall_word_suf == audio_from_xml[randam_audio_no[2]]){
						no_of_cnt++;
						third_cone_cnt++;
						CONE3LIMIT++;
						runflag = false; 
						get_the_answers_call.splice(random_word[0],1);
						scoop_array.splice(cream_random,1);
						//audio_from_xml.splice(randam_audio_no[2],1);
						click_count = 0;
						score++; 
						document.getElementById("score").innerHTML = score;
						//calling_loop = setTimeout("activity()",1000);
						timestamp = Math.round((new Date()).getTime() / 1000);
						gameQuestion = fall_word_suf;
						gameResult = 1;
						showScore(score);
						if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1)|| (agent.indexOf("iPod") != -1)){
									playGameAudiosFinalCustom1(1,"ding","activity");
							}
							else{
								 ding = new Audio();
									ding.src = soundsWordPath+"ding"+audio_compatible;
									ding.load();
									ding.play();
									ding.addEventListener('error',function(){activity();});
									ding.addEventListener('ended',activity);
								}
					}
					else{
					//alert("wrong3");
					var anshigh3 = fall_word_pre+fall_word_suf.fontcolor("red");
						document.getElementById("containword").innerHTML = anshigh3;
						if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1)|| (agent.indexOf("iPod") != -1)){
									playGameAudiosFinalCustom1(0,fall_word_suf,"cone3_Obj");
							}
							else{
								var audio3 = new Audio();
									audio3.src = soundsPath+fall_word_suf+audio_compatible;
									audio3.load();
									audio3.play();	
									audio3.addEventListener('error',function() {setTimeout(function(){cone3_Obj();},1000);});
									audio3.addEventListener('ended',function() {setTimeout(function(){cone3_Obj();},1000);});
								}
								timestamp = Math.round((new Date()).getTime() / 1000);
								gameQuestion = fall_word_suf;
								gameResult = 0;
								delaynegtime=setTimeout("showScore('"+score+"')",500);
					}
		break;
	}
	 }
	 else{
	 }
	
}
var delaynegtime;
var runflag = false;
cream_run = function(){  
	//if(i<100){
		//alert('hai');
	i++;
	runflag = true;
	cream_run.run_cream = document.getElementById('cream_container'); 
	cream_run.run_cream.style.display = "block"; 
	cream_run.run_cream.style.visibility = "visible";
	cream_run.run_cream.style.webkitTransition  = "all 0.1s ease-in-out";
	cream_run.run_cream.style.webkitTransitionTimingFunction ="linear, ease-in-out";
	cream_run.run_cream.style.top  =  i+"%";
	//}
	 if(i>100){
			i=-20;
			
			random_word = randomize(0,get_the_answers_call.length-1);
			falling_cream_word = get_the_answers_call[random_word[0]]; 
			left_random = randomize(0,left_picker_array.length-1);
			final_left  = left_picker_array[left_random[0]];
			document.getElementById('cream_container').style.left = final_left+"%";
			cream_random = random(scoop_array.length-1); 
			document.getElementById('scoop').src = base_img+"images/"+scoop_array[cream_random]+".png";
			document.getElementById('containword').innerHTML = falling_cream_word; 
			cream_run.run_cream.style.display="none";
			cream_run.run_cream.style.top  = "0%";
			 timestamp = Math.round((new Date()).getTime() / 1000);
			 gameQuestion = minus_suffix;
			 gameResult = -1;
			//activity();
			showScore(score);
		}
}
//cone suffix
conesuf_Obj = function(randam_audio_array_for_cone1,randam_audio_array_for_cone2,randam_audio_array_for_cone3){ 
if(randam_audio_array_for_cone1==undefined){  
		document.getElementById('cone1_suffix').innerHTML ="";	 
		document.getElementById('cone2_suffix').innerHTML ="";	 
		document.getElementById('cone3_suffix').innerHTML ="";	 
	 }
	 else{
	document.getElementById('cone1_suffix').innerHTML = randam_audio_array_for_cone1;
	document.getElementById('cone2_suffix').innerHTML = randam_audio_array_for_cone2;
	document.getElementById('cone3_suffix').innerHTML = randam_audio_array_for_cone3;
	}
	 //alert(document.getElementById('cone1_suffix').innerHTML+":"+document.getElementById('cone2_suffix').innerHTML+":"+document.getElementById('cone3_suffix').innerHTML);
}
var allowThreeWords=0;
var word_array = new Array();
get_the_answers = function(word_collection){
	for(var j=0;j<3;j++){
		allowThreeWords=0;
		for(var i=0;i<word_collection.length;i++){
			if(word_collection[i].search(audio_from_xml[randam_audio_no[j]])!=-1){
				if(allowThreeWords<3){ 
					word_array.push(word_collection[i]); 
					allowThreeWords++;
				}
			}
		}
	}
	return word_array;
}
//cone1
function cone1_Obj(){  
//alert('hi');
 if(!resetflag){
	HightlightText();
	if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1)|| (agent.indexOf("iPod") != -1)){
									playGameAudiosFinalCustom1(0,audio_from_xml[randam_audio_no[0]],"cone1_activity");
							}
							else{
	var audio1 = new Audio();
		audio1.src = soundsPath+audio_from_xml[randam_audio_no[0]]+audio_compatible;
		audio1.load();
		audio1.play();
		audio1.addEventListener('error',function(){setTimeout(function(){cone1_activity();},1000);});	
		 audio1.addEventListener('ended',function(){setTimeout(function(){cone1_activity();},1000);});	
}	
}	 
}
//cone2
function cone2_Obj(){ 
 if(!resetflag){ 
HightlightText();
	if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1)|| (agent.indexOf("iPod") != -1)){
									playGameAudiosFinalCustom1(0,audio_from_xml[randam_audio_no[1]],"cone2_activity");
							}
							else{
	var audio2 = new Audio();
		audio2.src =soundsPath+audio_from_xml[randam_audio_no[1]]+audio_compatible;
		audio2.load();
		audio2.play();
		 audio2.addEventListener('error',function(){setTimeout(function(){cone2_activity();},1000);});
		 audio2.addEventListener('ended',function(){setTimeout(function(){cone2_activity();},1000);});	
		 }
		 }
}
//cone3
function cone3_Obj(){ 
 if(!resetflag){
HightlightText();
	if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1)|| (agent.indexOf("iPod") != -1)){
									playGameAudiosFinalCustom1(0,audio_from_xml[randam_audio_no[2]],"cone3_activity");
							}
							else{ 
	var audio3 = new Audio();
		audio3.src = soundsPath+audio_from_xml[randam_audio_no[2]]+audio_compatible;
		audio3.load();
		audio3.play();
		audio3.addEventListener('error',function(){setTimeout(function(){cone3_activity();},1000);});	
		 audio3.addEventListener('ended',function(){setTimeout(function(){cone3_activity();},1000);});	
		 }
		 }
}



function HightlightText(){
	if(cone_manage_id=="cone1" && minus_suffix!=document.getElementById("cone1_suffix").innerHTML) {
		document.getElementById('cone1_suffix').style.color = "red";
	}
	if(cone_manage_id=="cone2" && minus_suffix!=document.getElementById("cone2_suffix").innerHTML) {
		document.getElementById('cone2_suffix').style.color = "red";
	}
	if(cone_manage_id=="cone3" && minus_suffix!=document.getElementById("cone3_suffix").innerHTML) {
		document.getElementById('cone3_suffix').style.color = "red";
	}
	
}

function dehightlight(){
	if(cone_manage_id=="cone1") {
		document.getElementById('cone1_suffix').style.color = "black";
	}
	if(cone_manage_id=="cone2") {
	document.getElementById('cone2_suffix').style.color = "black";
	}
	if(cone_manage_id=="cone3") {
		document.getElementById('cone3_suffix').style.color = "black";
	}
}
//repeat the activity
function cone1_activity(){
	runflag = true;
	click_count = 0;
	document.getElementById("first_cone_"+first_cone_cnt).style.visibility="hidden"; 
	dehightlight();
	//document.getElementById("cone1_ans_"+first_cone_cnt).innerHTML = fall_word_pre+fall_word_suf.fontcolor("red");
	calling_loop = setTimeout("activity()",1000);
}
function cone2_activity(){
	runflag = true;
	click_count = 0;
	document.getElementById("sec_cone_"+second_cone_cnt).style.visibility="hidden";dehightlight();
	//document.getElementById("cone1_ans_"+second_cone_cnt).innerHTML = fall_word_pre+fall_word_suf.fontcolor("red");
	calling_loop = setTimeout("activity()",1000);
}
function cone3_activity(){
	runflag = true;
	click_count = 0;
	document.getElementById("third_cone_"+third_cone_cnt).style.visibility="hidden";dehightlight();
	//document.getElementById("cone1_ans_"+third_cone_cnt).innerHTML = fall_word_pre+fall_word_suf.fontcolor("red");
	calling_loop = setTimeout("activity()",1000);
}

//Final Audio.
function youGotAudio(){
 if(!resetflag){
		if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1)|| (agent.indexOf("iPod") != -1)){
			playGameAudiosFinalCustom1(1,"yougotthemall","final_audio_cone1_pre");
		}
		else{
		
			got.src =soundsWordPath+"yougotthemall"+audio_compatible;
			got.load();
			got.play();
			got.addEventListener("error",final_audio_cone1_pre); 
			got.addEventListener("ended",final_audio_cone1_pre); 
		}
		}
}
function final_audio_cone1_pre(){ 
 if(!resetflag){
	if(last_word_pre_1 == ""){
		final_audio_cone1_full();
	}
	else{
		document.getElementById("cone1_ans_2").innerHTML = last_word_pre_1.fontcolor("red")+last_word_suf_1;
		if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1)|| (agent.indexOf("iPod") != -1)){
									playGameAudiosFinalCustom1(2,last_word_pre_1,"final_audio_cone1_suf");
							}
							else{
		pre1 = new Audio();
		pre1.src = on_set+last_word_pre_1+audio_compatible;
		pre1.load();
		pre1.play();
		pre1.addEventListener("error",function(){final_audio_cone1_suf();}); 
		pre1.addEventListener("ended",final_audio_cone1_suf); 
		}
	}
	}
}
function final_audio_cone1_suf(){
 if(!resetflag){
	 document.getElementById("cone1_ans_2").innerHTML = last_word_pre_1.fontcolor("black")+last_word_suf_1.fontcolor("red");
	 if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1)|| (agent.indexOf("iPod") != -1)){
									playGameAudiosFinalCustom1(0,last_word_suf_1,"final_audio_cone1_full");
							}
							else{
	suf1 = new Audio();
		suf1.src = soundsPath+last_word_suf_1+audio_compatible;
		suf1.load();
		suf1.play();
		suf1.addEventListener("error",function() {final_audio_cone1_full();});
		suf1.addEventListener("ended",final_audio_cone1_full);
		}
	}
}
function final_audio_cone1_full(){
 if(!resetflag){
	document.getElementById("cone1_ans_2").innerHTML = full_word_cone1.fontcolor("red");
	 if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1)|| (agent.indexOf("iPod") != -1)){
									playGameAudiosFinalCustom1(1,full_word_cone1,"final_audio_cone2_pre");
							}
							else{
	full1 = new Audio();
		full1.src = soundsWordPath+full_word_cone1+audio_compatible;
		full1.load();
		full1.play();
		full1.addEventListener("error",function(){ final_audio_cone2_pre();});
		full1.addEventListener("ended",final_audio_cone2_pre);
		}
		}
}
function final_audio_cone2_pre(){ 
 if(!resetflag){
	if(last_word_pre_2 == ""){
		final_audio_cone2_full();
	}
	else{
		document.getElementById("cone2_ans_2").innerHTML = last_word_pre_2.fontcolor("red")+last_word_suf_2;
		if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1)|| (agent.indexOf("iPod") != -1)){
									playGameAudiosFinalCustom1(2,last_word_pre_2,"final_audio_cone2_suf");
							}
							else{
		 pre1 = new Audio();
		pre1.src = on_set+last_word_pre_2+audio_compatible;
		pre1.load();
		pre1.play();
		pre1.addEventListener("error",function(){final_audio_cone2_suf();});
		pre1.addEventListener("ended",final_audio_cone2_suf);
		}
	}
	}
}
function final_audio_cone2_suf(){
 if(!resetflag){
	document.getElementById("cone2_ans_2").innerHTML = last_word_pre_2.fontcolor("black")+last_word_suf_2.fontcolor("red");
	if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1)|| (agent.indexOf("iPod") != -1)){
									playGameAudiosFinalCustom1(0,last_word_suf_2,"final_audio_cone2_full");
							}
							else{
	 suf1 = new Audio();
		suf1.src = soundsPath+last_word_suf_2+audio_compatible;
		suf1.load();
		suf1.play();
		suf1.addEventListener("error",function(){final_audio_cone2_full();});
		suf1.addEventListener("ended",final_audio_cone2_full);
		}
		}
}
function final_audio_cone2_full(){
 if(!resetflag){
	document.getElementById("cone2_ans_2").innerHTML = full_word_cone2.fontcolor("red");
	 if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1)|| (agent.indexOf("iPod") != -1)){
									playGameAudiosFinalCustom1(1,full_word_cone2,"final_audio_cone3_pre");
							}
							else{
	 full1 = new Audio();
		full1.src = soundsWordPath+full_word_cone2+audio_compatible;
		full1.load();
		full1.play();
		full1.addEventListener("error",function(){final_audio_cone3_pre();});
		full1.addEventListener("ended",final_audio_cone3_pre);
		}
	}
}
function final_audio_cone3_pre(){ 
  if(!resetflag){
	if(last_word_pre_3 == ""){
		final_audio_cone3_full();
	}
	else{
		document.getElementById("cone3_ans_2").innerHTML = last_word_pre_3.fontcolor("red")+last_word_suf_3;
		if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1)|| (agent.indexOf("iPod") != -1)){
									playGameAudiosFinalCustom1(2,last_word_pre_3,"final_audio_cone3_suf");
							}
							else{
		 pre1 = new Audio();
		pre1.src = on_set+last_word_pre_3+audio_compatible;
		pre1.load();
		pre1.play();
		pre1.addEventListener("error",function(){ final_audio_cone3_suf();});
		pre1.addEventListener("ended",final_audio_cone3_suf);
	}
	}
	}
}
function final_audio_cone3_suf(){
 if(!resetflag){
	document.getElementById("cone3_ans_2").innerHTML = last_word_pre_3.fontcolor("black")+last_word_suf_3.fontcolor("red");
	if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1)|| (agent.indexOf("iPod") != -1)){
									playGameAudiosFinalCustom1(0,last_word_suf_3,"final_audio_cone3_full");
							}
							else{
	 suf1 = new Audio();
		suf1.src = soundsPath+last_word_suf_3+audio_compatible;
		suf1.load();
		suf1.play();
		suf1.addEventListener("error",function(){final_audio_cone3_full();});
		suf1.addEventListener("ended",final_audio_cone3_full);
		}
		}
}
function final_audio_cone3_full(){
 if(!resetflag){
document.getElementById("cone3_ans_2").innerHTML = full_word_cone3.fontcolor("red");
	 if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1)|| (agent.indexOf("iPod") != -1)){
									playGameAudiosFinalCustom1(1,full_word_cone3,"delay");
							}
							else{
	 full1 = new Audio();
		full1.src = soundsWordPath+full_word_cone3+audio_compatible;
		full1.load();
		full1.play();
		full1.addEventListener("error",function(){delay();});
		full1.addEventListener("ended",delay);
		}
		} 
}


function postGameOverMessageToApp() { 
    //document.location = 'iflgameover/'; 
}

function delay() {  
//postGameOverMessageToApp();
window.location = redirect;
ajax_call();

}





