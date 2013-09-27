agent = navigator.userAgent;
// main path - Either resource OR Current game folder
var gameAudiosMainPathArr =["resource", "games"];
// sub path - under main path the audio file is located
var gameAudiosSubPathArr =["rime/","activity/circus/","onset/","activity/common/sounds/","activity/common/sounds/"];

function playGameAudiosFinalCustom1(subPathIndex,newaudioName, callbackMethod)
{
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
	    document.location = "iflgameAudioPlayCallBackFinal~"
		+callbackMethod+"~"
        +gameAudiosMainPathArr[mainPathIndex]+"~" 
        +gameAudiosSubPathArr[subPathIndex]+"~" 
        +newaudioName+".mp3";
    }
	 if (subPathIndex == 2)
    {
	    document.location = "iflgameAudioPlayCallBackFinal~"
		+callbackMethod+"~"
        +gameAudiosMainPathArr[mainPathIndex]+"~" 
        +gameAudiosSubPathArr[subPathIndex]+"~" 
        +newaudioName+".mp3";
    }
	if (subPathIndex == 3)
    {
	    document.location = "iflgameAudioPlayCallBackFinal~"
		+callbackMethod+"~"
        +gameAudiosMainPathArr[mainPathIndex]+"~" 
        +gameAudiosSubPathArr[subPathIndex]+"~" 
        +newaudioName+".mp3";
    }
	if (subPathIndex == 4)
    {
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
