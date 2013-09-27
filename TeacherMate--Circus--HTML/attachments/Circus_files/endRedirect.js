
// Javascript Document
//document.location=	redirectToArg(document.URL,redirectArg);
function redirectToArg(url,argname)
{
	if (url.indexOf("?")!=-1&&url.indexOf("&")==-1)
	{
		var args=url.split('?');
		if (args[1].indexOf(argname)!=-1)
		{
			var argument=args[1].split('=');
				return argument[1];	
		}
		else
		{
			alert('Argument "'+ argname+'" not found');
			return url;
		}	
	}
	else
	{
			alert('"None" or "multiple" argument(s) found \n\n  Restarting Game');
			return url;
	}
	
}