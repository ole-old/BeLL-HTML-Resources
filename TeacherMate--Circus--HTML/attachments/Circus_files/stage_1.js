/** Stage 1 **/
 var cnt=0;
 var flag = false;
 var nextStageCnt = 0;
 var agent="";
 var homeaudioflag = "true";
 var isIntrosnd="false";
 agent = navigator.userAgent;
function demoaudio(){
 	agent = navigator.userAgent;
	document.getElementById("load").style.visibility="hidden";
    document.getElementById("bg").style.visibility="visible";
    document.getElementById("scorecard").style.visibility="visible"; 
    document.getElementById("lighting1").style.visibility="visible"; 
    document.getElementById("lighting2").style.visibility="visible"; 	
	document.getElementById("boy_anim_1").style.visibility="visible";
	document.getElementById("boy_anim_2").style.visibility="visible";
	document.getElementById("scorebox").style.visibility="visible";
	document.getElementById("home").style.visibility="visible";
	if(homeaudioflag == "true"){
	document.getElementById("homeaudio").style.visibility="visible";
	homeaudioflag = "false";
	}
	if (isIntrosnd == "false"){
		isIntrosnd = "true";
		if(playIntro){
	ding = new Audio();
	ding.src = demoaudiopath+"circusdemo"+audio_compatible;
	ding.load();
	ding.play();
	ding.addEventListener('ended',initialize,false);
	}
	else{
		initialize();
	}
}	
}

function stage1(){ 
	 clearInterval(startinterval);
	 stage_1.boy_animate(); 
}
//Stage 1
var stage_1 = { 
		 x:1,
		_skewX:-1,
		boy_animate:function(){   
			letter_anim.Random();
			document.getElementById("boy_anim_2").src = base_url+"images/circus/ballboy1.gif";
		},
		skew:function(){  
			document.getElementById("boy_anim_1").src = base_url+"images/circus/animationgboy.png";
			document.getElementById("boy_anim_1").style.webkitTransition  = "1s ease-in"; 
			document.getElementById("boy_anim_1").style.webkitTransform  = "skew("+this._skewX+"deg )"; 
			  if(cnt >= -5){
				if(flag == true){
					cnt--;
				}
				else{
					cnt++; 
				}
			 }
			 if(cnt <= -5){ 
				this._skewX = 50; 
				flag = false;
			 }
			 if(cnt >= 0){ 
				this._skewX = -50; 
				flag = true;
			 } 
		}
};

//Stage 2
var stage2interval;
function stage2(){
	stage2interval = setInterval("stage_2.wheel_animate()",25);
	letter_anim.Random();	
}
var stage_2 = { 
		 x:1,
		_skewX:-1,
		wheel_animate:function(){   
			stage_2.x++;		
			document.getElementById("boy_anim_2").style.visibility = "visible";
			document.getElementById("lighting1").style.visibility = "visible";
			document.getElementById("lighting2").style.visibility = "visible";
			document.getElementById("boy_anim_2").src = base_url+"images/circus/ball.png";
			document.getElementById("boy_anim_2").style.webkitTransform ="rotate("+stage_2.x+"deg)"; 
		},
		skew2:function(){  
			 
		}
};
