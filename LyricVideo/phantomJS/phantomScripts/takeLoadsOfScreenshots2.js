var fs = require('fs');
var system = require('system');
var args = system.args;
var frameNumber = system.args[1];
var maxFrames = system.args[2];
var frameLocation = system.args[3];
var fps = system.args[4];
var pageWidth=system.args[5];
var pageHeight=system.args[6];

var page = require('webpage').create();


helloAlex(frameNumber);

function helloAlex(frameNumber) {
	var theUrl = 'http://localhost:8080/LyricVideo/test1.html?frameNumber='
			+ frameNumber + '&fps=' + fps +'&pageWidth='+pageWidth+'&pageHeight='+pageHeight;
	page.open(theUrl, function() {

	});
	
	var start = new Date().getTime();
	var now;
	var split= new Date().getTime();

	page.onLoadFinished = function(status) {
	
		page.clipRect = {
		    top:    0,
		    left:   0,
		    width:  pageWidth,
		    height: pageHeight
		};
	
	console.log("Start generating frames.");
	var location="";
	var script1 = "function(){alex();}";
	var j = 0;
	while (frameNumber < maxFrames) {
			location=frameLocation + "image_" + pad(frameNumber, 5) + '.jpg';
			page.evaluateJavaScript(script1)
			{
						page.render(location, {
							format : 'jpg',
							quality : '90'
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
		}
		phantom.exit();
	};
}

function pad(num, size) {
	var s = num + "";
	while (s.length < size)
		s = "0" + s;
	return s;
}
