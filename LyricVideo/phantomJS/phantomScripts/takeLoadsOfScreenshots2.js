var fs = require('fs');
var system = require('system');
var args = system.args;
var frameNumber = parseInt(system.args[1]);
var maxFrames = parseInt(system.args[2]);
var frameLocation = system.args[3];
var fps = parseInt(system.args[4]);
var pageWidth=parseInt(system.args[5]);
var pageHeight=parseInt(system.args[6]);
var videoScript=system.args[7];
var page = require('webpage').create();

var theUrl = 'http://localhost:8080/lyricrecorder/frameGenerator.html?frameNumber='
			+ frameNumber + '&fps=' + fps +'&pageWidth='+pageWidth+'&pageHeight='+pageHeight+'&videoScript='+videoScript;

console.log(theUrl);
helloAlex(frameNumber);

function helloAlex(frameNumber) {
	
	page.open(theUrl, function (status) {
    if (status !== 'success') {
        console.log('Unable to load the address!');
        phantom.exit();
    } else {
        window.setTimeout(function () {
			captureFrames(page);
        }, 300); // Change timeout as required to allow sufficient time 
    }
});
}

function captureFrames(page)
{
	console.log("Done");
	page.clipRect = {
		    top:    0,
		    left:   0,
		    width:  pageWidth,
		    height: pageHeight
	};
    
	var start = new Date().getTime();
	var now;
	var split= new Date().getTime();

	console.log("Start generating frames: "+ frameNumber +" " + maxFrames);
	console.log(theUrl);
	var location="";
	var script1 = "function(){alex();}";
	var j = 0;
	
	while (frameNumber < maxFrames) {
		location=frameLocation + "image_" + pad(frameNumber, 5) + '.jpg';
		page.evaluateJavaScript(script1)
		{
			page.render(location, {
				format : 'jpg',
				quality : '100'
			});
		}
		frameNumber++;
		j++;
		if(j%100==0)
		{
			now = new Date().getTime();
			console.log("Completed frame: "+j+ " in " + (now-split)/1000 + " secs.  "+100/((now-split)/1000) +" fps.  Total time: "+ (now-start)/1000 +" secs.");
			split= new Date().getTime();
		}
};
          
          
          
          
          
          
          
          
            phantom.exit();

}

function pad(num, size) {
	var s = num + "";
	while (s.length < size)
		s = "0" + s;
	return s;
}
