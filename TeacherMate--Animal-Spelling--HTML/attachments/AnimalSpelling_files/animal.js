// JavaScript Document  
function randomize(from, to){
				var startVal = from;
				var endVal = to;

				var loopCount = endVal - startVal;
				var arr = new Array();
				for (var i=0; i<=loopCount; i++) {
					arr[i] = startVal++;
				}

				for (var i=0; i<=loopCount; i++) {
					var p1 = Math.random(loopCount)*endVal;
					p1 = Math.round(p1);
					var p2 = Math.random(loopCount)*endVal;
					p2 = Math.round(p2);
					tmp_rnd = arr[p1];
					arr[p1] = arr[p2];
					arr[p2] = tmp_rnd;

				}
				if(arr.length == loopCount+1){
				}else
				{	
					for(var i=0;i<arr.length;i++){
						if(arr[i]=="" || arr[i]==undefined){
							arr.splice(i,1);
						}
					}
				}
				return arr;
	}

   function loadImage(tgt,img,wd,ht,x,y){
			Movieclip = document.getElementById(tgt);
			var Graphic = Movieclip.getContext('2d');
			
			

			var FrameContainer = new Image();
			FrameContainer.src = img;
			FrameContainer.onload = function() {
				//Graphic.drawImage(FrameContainer, 0, 0, wd, ht);
				//alert("loaded "+img);
			Graphic.drawImage(FrameContainer, 0, 0);
			}
			Movieclip.style.left = x;
			Movieclip.style.top = y;
	 }
	
	 Array.prototype.gotoAndStop = function(n){
			loadImage(this[0], this[n], 100,100,100,100);
	 }