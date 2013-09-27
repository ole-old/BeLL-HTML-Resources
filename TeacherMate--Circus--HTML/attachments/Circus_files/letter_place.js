/**Place Letter**/
var left_mov_cnt = 0; 
var origin_pos = 0;
var click_count = 0;
var reposid = "";
var click_id_letter = "";
var leftanswerflag =false ;
var rightanswerflag = false;
var letterplace = {
	left_x : 8,
	right_x : 20,
	right_side : function(){ 
		leftanswerflag =false;
		rightanswerflag = true;
		if(click_count == 1){
			document.getElementById(reposid).style.left = origin_pos+"%";
			click_count = 0;
		}
		animate_cnt = 1; 
		if(correct_answer == Alphabet[AlphaRandom[0]]){
			Alphabet[AlphaRandom[0]] = Alphabet[AlphaRandom[2]];
		}
		if(correct_answer == Alphabet[AlphaRandom[1]] ){
			Alphabet[AlphaRandom[1]] = Alphabet[AlphaRandom[3]];
		}
		var place_array = [correct_answer,Alphabet[AlphaRandom[0]],Alphabet[AlphaRandom[1]]];
		place_random = randomize(0,(place_array.length-1)); 
		document.getElementById("right_answer_text_1").innerHTML = place_array[place_random[0]];
		document.getElementById("right_answer_text_2").innerHTML = place_array[place_random[1]];
		document.getElementById("right_answer_text_3").innerHTML = place_array[place_random[2]];
		call_ypos_cnt =0; 
		document.getElementById("letter_anim").style.visibility = "hidden";	
		document.getElementById("letter_anim").style.display = "none"; 
		document.getElementById("letter_anim").style.left = (2+leftAdjust)+"%";
		rightmov =(2+leftAdjust); 
		document.getElementById("right_answer_field_1").style.visibility = "visible";
		document.getElementById("right_answer_field_1").style.left = 11.5+"%";
		document.getElementById("right_answer_field_2").style.visibility = "visible";
		document.getElementById("right_answer_field_2").style.left = 16.7+"%";
		document.getElementById("right_answer_field_3").style.visibility = "visible";
		document.getElementById("right_answer_field_3").style.left = 21.9+"%";
		letter_anim_interval = setTimeout("letter_anim.Animate()",1000);  
		pos_interval = setInterval("letter_anim.movey()",1000);
		//alert(final_animate_audio);
		if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1)|| (agent.indexOf("iPod") != -1)){
				playGameAudiosFinalCustom1(1,final_animate_letter,"playGameAudiosFinalCallBackDummy");
			}
			else{
				afterpowder = new Audio();
				afterpowder.src = soundsDirPath+final_animate_audio+audio_compatible;
				//alert(afterpowder.src);
				//afterpowder.load();
				afterpowder.addEventListener("canplaythrough",function(){afterpowder.play();});
				
				//afterpowder.addEventListener('ended',letterplace.right_side,false);
			}
	}, 
	left_side:function(){
		leftanswerflag =true;
		rightanswerflag = false;
		if(click_count == 1){
			document.getElementById(reposid).style.left = origin_pos+"%";
			click_count = 0;
		}
		animate_cnt = 1; 
		if(correct_answer == Alphabet[AlphaRandom[0]]){
			Alphabet[AlphaRandom[0]] = Alphabet[AlphaRandom[2]];
		}
		if(correct_answer == Alphabet[AlphaRandom[1]] ){
			Alphabet[AlphaRandom[1]] = Alphabet[AlphaRandom[3]];
		}
		var place_array = [correct_answer,Alphabet[AlphaRandom[0]],Alphabet[AlphaRandom[1]]];
		place_random = randomize(0,(place_array.length-1)); 
		document.getElementById("right_answer_text_1").innerHTML = place_array[place_random[0]];
		document.getElementById("right_answer_text_2").innerHTML = place_array[place_random[1]];
		document.getElementById("right_answer_text_3").innerHTML = place_array[place_random[2]];
		call_ypos_cnt =0; 
		document.getElementById("letter_anim").style.visibility = "hidden";	
		document.getElementById("letter_anim").style.display = "none"; 
		document.getElementById("letter_anim").style.left = (17+leftAdjust)+"%";
		rightmov = (17+leftAdjust); 
		document.getElementById("right_answer_field_1").style.visibility = "visible";
		document.getElementById("right_answer_field_1").style.left = 2+"%";
		document.getElementById("right_answer_field_2").style.visibility = "visible";
		document.getElementById("right_answer_field_2").style.left = 8+"%";
		document.getElementById("right_answer_field_3").style.visibility = "visible";
		document.getElementById("right_answer_field_3").style.left = 14+"%";
		letter_anim_interval = setTimeout("letter_anim.Animate()",1000);  
		pos_interval = setInterval("letter_anim.moveyleft()",1000);
		if((agent.indexOf("iPad") != -1) || (agent.indexOf("iPhone") != -1)|| (agent.indexOf("iPod") != -1)){
				playGameAudiosFinalCustom1(1,final_animate_letter,"playGameAudiosFinalCallBackDummy");
			}
			else{
				afterpowder = new Audio();
				afterpowder.src = soundsDirPath+final_animate_audio+audio_compatible;
				//alert(afterpowder.src);
				//afterpowder.load();
				afterpowder.addEventListener("canplaythrough",function(){afterpowder.play();});
			}
	},
	anim : function(cid){ 
		clearInterval(eval_int);
		m = parseInt(document.getElementById(cid).style.left); 
		if(rightanswerflag){
			if(m>(letterplace.left_x-3)){ 
				m-=1; 
				document.getElementById(cid).webkitTransition ="5s, ease-in-out";
				document.getElementById(cid).style.left = m+"%"; 
				eval_int = setInterval("letterplace.anim('"+cid+"')",0.01);
			}
		}
		else if(leftanswerflag){
			if(m<letterplace.right_x){ 
				m+=1; 
				document.getElementById(cid).webkitTransition ="5s, ease-in-out";
				document.getElementById(cid).style.left = m+"%"; 
				eval_int = setInterval("letterplace.anim('"+cid+"')",0.01);
			}
		}		
	}
	
};

/**Evaluation Part.**/
var eval_int;
var Evaluation = function(cid){
	if(clickflag==true){
	 if(click_count == 0){ 
		 reposid = cid;
		 click_id_letter = reposid.substr((reposid.length-1),(reposid.length-1))
		 origin_pos = parseInt(document.getElementById(cid).style.left);  
		 letterplace.anim(cid);
		 click_count = 1;
	 }
	}
}

