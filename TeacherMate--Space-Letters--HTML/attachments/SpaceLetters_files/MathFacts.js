var MATH_FACTS = [];
var LEVELS = {
												  Multiplication_Facts:[0,
																				 {min:1,max:4},
																				 {min:1,max:9},
																				 {min:1,max:12},
																				 {min:1,max:20}
																				 ],
												  Division_Facts:[0,
																				 {min:1,max:3},
																				 {min:1,max:6},
																				 {min:1,max:9},
																				 {min:1,max:12}
																				 ],
												  Addition_Facts:[0,
																				 {min:1,max:9},
																				 {min:1,max:9},
																				 {min:1,max:99},
																				 {min:1,max:999}
																				 ],
												  Subtraction_Facts:[0,
																				 {min:1,max:9},
																				 {min:1,max:20},
																				 {min:1,max:99},
																				 {min:1,max:999}
																				 ]
	};
var level;
var answer=0;
var ans;
var op = {};
var TemSend = "" ;
var TemSendFact = "" ;

function sendLevel(lv){
	//level = lv;
	for(j in lv){
		if(lv[j] != 0){
			//var upp = j.toUpperCase();
			MATH_FACTS.push(j);
			
		}
	}
	var op_index=randRange(0, MATH_FACTS.length-1);
	// alert(MATH_FACTS.length+":"+MATH_FACTS);
	//op = {operator:MATH_FACTS[op_index], range:LEVELS[MATH_FACTS[op_index]][level]};
	
	for (j in lv) { 
	
	   if(MATH_FACTS[op_index] == j){
	     //alert(MATH_FACTS[op_index]+":"+j+":"+lv[j]);
		 TemSend = lv[j];
		 TemSendFact =j;
	   //document.writeln(MATH_FACTS[op_index]+" > "+i+':'+lv[i]+', '); 
		level = lv[j];
	    op = {operator:MATH_FACTS[op_index], range:LEVELS[MATH_FACTS[op_index]][level]};
	   }
	};
}

function getProblem(maxWrong){
	//alert("rand "+rand(10)+" randRange "+randRange(2,6)+" act "+op.range.max);
	p1 = randRange(op.range.min, op.range.max);
	p2 = randRange(op.range.min, op.range.max);
	// alert("operator "+op.operator+" p1 "+p1+" p2 "+p2);

	var wanswer = new Array();
	var symbol='';
	//op.operator="Division_Facts";
	switch (op.operator)
	{
		case ADDITION_FACTS:
		 // alert("add"+p1+":"+p2);
		 
		  //document.writeln("ADDITION_FACTS");
		  if(level==1){
		  if(p1<10){
			//alert("Hi"+level);
			 answer = getAddAnswer();
			 answer = p1+p2;
			 //alert(answer+":" );
		  if(answer >9){
		 // alert("answer"+answer);
		  	answer = getAddAnswer();
			}
			 
		  }
		  }
		  else{
		  
		  answer = p1+p2;
		  }
		  wanswer = genWronganswer(op.range.min, op.range.max, answer);
		  symbol="+";
		  /*for(i=0; i<=maxWrong;i++){
			if(wans==answer){
				i++;
			}else{
				wanswer.push(wans);
			}
		  }*/
		  
		  break;
		case SUBTRACTION_FACTS:
		  //document.writeln("SUBTRACTION_FACTS");
		  var p3 = Math.max(p1, p2);
		  p2 = Math.min(p1, p2);
		  p1 = p3;
		  answer = p1-p2;
		  wanswer = genWronganswer(op.range.min, op.range.max, answer);
		  symbol="-";
		  /*for(i=0; i<=maxWrong;i++){
			if(wans==answer){
				i++;
			}else{
				wanswer.push(wans);
			}
		  }*/
		  
		  break;
		case MULTIPLICATION_FACTS:
		  //document.writeln("MULTIPLICATION_FACTS");
		  answer = p1*p2;
		  wanswer = genWronganswer(op.range.min, op.range.max, answer);
		  symbol="*";
		  break;
		 
		case DIVISION_FACTS:
		//alert(answer+":"+p1+":"+p2);
			if(TemSend == 1){
				var tem = [[{w1:1},{w2:1}],[{w1:2},{w2:2}],[{w1:3},{w2:3}],[{w1:2},{w2:1}],[{w1:3},{w2:1}]];
				 var randIndex = randomize(0,tem.length-1); 
			 var quesindex = randIndex[0];
				p1 = tem[quesindex][0].w1;
				p2 = tem[quesindex][1].w2;
				 answer = p1 / p2;
				
				 wanswer = genWronganswer(1, 9, answer);
				 symbol="/";
				  
				  //alert( wanswer);
			}
			else{
		  answer = getDivAnswer();
		  if(answer==undefined){
			answer = getDivAnswer();
		  }
		  wanswer = genWronganswer(op.range.min, op.range.max, answer);
		  symbol="/";
		  }
		  break;
	}
	//document.writeln(" p1 = "+p1+" p2 = "+p2+" ans = "+answer);

	problem = {};
	problem.p1 = p1;
	problem.p2 = p2;
	problem.answer = answer;
	problem.wrongAnswer = wanswer;
	problem.symbol = symbol;
	return problem;
}

function getAddAnswer()
{
    if((p1+p2)<10)
	{
	var ans1=p1+p2;
	 //alert("ans"+ans1);
	return ans1;
	}
	else
	{
		p1 = randRange(op.range.min, op.range.max);
		p2 = randRange(op.range.min, op.range.max);
		getAddAnswer();
	}
}

function getDivAnswer()
{
    if(p1%p2==0)
	{
	//alert(p1+"%"+p2);
	var ans=p1/p2;
	return ans;
	}
	else
	{
		p1 = randRange(op.range.min, op.range.max);
		p2 = randRange(op.range.min, op.range.max);
		getDivAnswer();
	}
}







