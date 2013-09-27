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

