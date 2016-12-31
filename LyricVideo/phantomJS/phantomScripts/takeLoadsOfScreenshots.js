
var fs = require('fs');
var system = require('system');
var args = system.args;
var frameNumber = system.args[1];
var maxFrames = system.args[2];
var frameLocation = system.args[3];
var fps = 25;
var page = require('webpage').create();

page.viewportSize = {
	width : 800,
	height : 600
};

helloAlex(frameNumber);

function helloAlex(frameNumber) {
	var theUrl = 'http://localhost:8080/LyricVideo/test1.html?frameNumber='
			+ frameNumber + '&fps=' + fps;
	page.open(theUrl, function() {

	});
	page.onLoadFinished = function(status) {
		var location=frameLocation +"image_"+ pad(frameNumber, 5) + '.png';
		
		page.render(location, {
			format : 'png',
			quality : '100'
		});
		if (frameNumber % 100 == 0) {
			console.log("Rendered:" + frameNumber+ "/"+maxFrames);
		}
		if (frameNumber < maxFrames) {
			helloAlex(++frameNumber);
		} else {
			phantom.exit();
		}
	};
}

function pad(num, size) {
	var s = num + "";
	while (s.length < size)
		s = "0" + s;
	return s;
}
