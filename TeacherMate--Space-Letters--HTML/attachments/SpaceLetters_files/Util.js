function rand(n) {
		var r=Math.random()*n;
		return Math.floor(r);
}

function randRange(n, n2) {
		var rR=Math.random()*(n2-n+1);
		return Math.floor(rR)+n;
}

function genWronganswer(from, to, ans){
	/*var arr = [];
	var arr2 = [];
	var k=0;
	var r=0;
	for (j=from; j<=to; j++) {
		arr[k] = j;
		k++;
	}
	k=to-from;

	for (j=0; j<3; j++) {
		r=Math.random()*(to);
		var p1 = Math.floor(r)+3;
		var p2 = Math.floor(r)+3;
		if(p1==answer || p2==answer){
			j++;
		}else{
			arr2.push(p1);
		}
	}*/
	arr2 = randomize(from, to);
	return arr2;
}

function randomize(from, to){
				var startVal = from;
				var endVal = to;

				var loopCount = endVal - startVal;
				var arr = new Array();
				for (var i=0; i<=loopCount; i++) {
					arr[i] = startVal++;
				}

				for (var i=0; i<=loopCount; i++) {
					var n1 = Math.random(loopCount)*endVal;
					n1 = Math.round(n1);
					var n2 = Math.random(loopCount)*endVal;
					n2 = Math.round(n2);
					tmp_rnd = arr[n1];
					arr[n1] = arr[n2];
					arr[n2] = tmp_rnd;
				}
				if(arr.length == loopCount+1){
					//document.writeln("ok->"+arr+" len "+arr.length);
					//return arr;
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


