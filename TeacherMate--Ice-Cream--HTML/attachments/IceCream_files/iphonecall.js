
agent = navigator.userAgent;

// main path - Either resource OR Current game folder
var gameAudiosMainPathArr =["resource", "games"];

// sub path - under main path the audio file is located
//var gameAudiosSubPathArr =["activity/common/sounds/","activity/common/sounds/"];
//var gameAudiosSubPathArr = [];
var gameAudiosSubPathArr =["rime/","word/","onset/","activity/common/sounds/","activity/common/sounds/"];
//playGameAudiosFinalCustom(0,1, "10", "callbackMethod");
//playGameAudiosFinalCustom(0,1, "0", "callbackMethod");

//var numAudio=["10","../../resource/common/20.mp3","../../resource/common/30.mp3","../../resource/common/40.mp3","../../resource/common/50.mp3","../../resource/common/60.mp3","../../resource/common/70.mp3","../../resource/common/80.mp3","../../resource/common/90.mp3"];
//var numAudioDegree=["","../../resource /common/0.mp3","../../resource/common/10.mp3","../../resource/common/20.mp3","../../resource/common/30.mp3","../../resource/common/40.mp3"];


function playGameAudiosFinalCustom1(subPathIndex,newaudioName, callbackMethod)
{
//alert(newaudioName);
	//alert(gameAudiosSubPathArr[subPathIndex]+">>"+newaudioName);
	playGameAudiosFinalCustom(0,subPathIndex, newaudioName, callbackMethod);
}

function playGameAudiosFinalCustom(mainPathIndex, subPathIndex, newaudioName, callbackMethod){
	audioIndex = -1;
    if (subPathIndex == 0)
    {
        document.location = "iflgameAudioPlayCallBackFinal~"
		+callbackMethod+"~"
        +gameAudiosMainPathArr[mainPathIndex]+"~" 
        +gameAudiosSubPathArr[subPathIndex]+"~" 
        +newaudioName+".mp3";
    }
	 if (subPathIndex == 1)
    {
	//alert(subPathIndex+">>"+newaudioName);
        document.location = "iflgameAudioPlayCallBackFinal~"
		+callbackMethod+"~"
        +gameAudiosMainPathArr[mainPathIndex]+"~" 
        +gameAudiosSubPathArr[subPathIndex]+"~" 
        +newaudioName+".mp3";
    }
	 if (subPathIndex == 2)
    {
	//alert(subPathIndex+">>"+newaudioName);
        document.location = "iflgameAudioPlayCallBackFinal~"
		+callbackMethod+"~"
        +gameAudiosMainPathArr[mainPathIndex]+"~" 
        +gameAudiosSubPathArr[subPathIndex]+"~" 
        +newaudioName+".mp3";
    }
	if (subPathIndex == 3)
    {
	//alert(gameAudiosSubPathArr[subPathIndex]+">>"+newaudioName);
        document.location = "iflgameAudioPlayCallBackFinal~"
		+callbackMethod+"~"
        +gameAudiosMainPathArr[mainPathIndex]+"~" 
        +gameAudiosSubPathArr[subPathIndex]+"~" 
        +newaudioName+".mp3";
    }
	if (subPathIndex == 4)
    {
	//alert(gameAudiosSubPathArr[subPathIndex]+">>"+newaudioName);
        document.location = "iflgameAudioPlayCallBackFinal~"
		+callbackMethod+"~"
        +gameAudiosMainPathArr[mainPathIndex]+"~" 
        +gameAudiosSubPathArr[subPathIndex]+"~" 
        +newaudioName+".wav";
    }
}

function playGameAudiosFinalCallBackDummy()
{

}
