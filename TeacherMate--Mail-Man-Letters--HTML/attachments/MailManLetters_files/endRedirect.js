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
			alert('Argument "'+ argname+'" not found in the URL');
		}	
	}
	else
	{
			alert('No valid URL found');
			document.location.href = url;
	}
	
}