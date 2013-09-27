
// Javascript Document
//document.location=	redirectToArg(document.URL,redirectArg);
function redirectToArg(e,t){if(e.indexOf("?")!=-1&&e.indexOf("&")==-1){var n=e.split("?");if(n[1].indexOf(t)!=-1){var r=n[1].split("=");if(r[1].indexOf("http://")==-1){arguemnt[1]="http://"+r[1]}return r[1]}else{alert('Argument "'+t+'" not found \n\n Restarting game');return e}}else{alert('"None" or "multiple" argument(s) found \n\n  Restarting Game');return e}}