//Resizing the window
function resize(){
	
	var swidth1= window.innerWidth;
	var swidth2= document.body.clientWidth; 
	var sheight1= window.innerHeight;
	var sheight2= document.body.clientHeight;
	var fon_size = (swidth1/50+sheight1/50);   
	if (window.innerHeight){  
		document.body.style.width    = swidth1 + "px";
		document.body.style.height   = sheight1 + "px";
		document.body.style.fontSize = swidth1/40+"px"; 
		document.body.style.fontSize = sheight1/40+"px"; 
		
	}

}

//Randomize. 
function random(to){ 
	var scoop=Math.random()*(to);
	 var scoop_round = Math.round(scoop); 
	 return scoop_round; 
}
