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

	page.onLoadFinished = function(status) {
		var location = frameLocation + "image_" + pad(frameNumber, 5) + '.jpg';

		
		page.clipRect = {
		    top:    0,
		    left:   0,
		    width:  pageWidth,
		    height: pageHeight
		};
		page.render(location, {
			format : 'jpg',
			quality : '100'
		});
		if (frameNumber % 100 == 0) {
			console.log("Rendered:" + frameNumber + "/" + maxFrames);
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
