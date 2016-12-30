var frameLocation = 'frames/image_';
var fs = require('fs');
var system = require('system');
var args = system.args;
var frameNumber = system.args[1];
var maxFrames = system.args[2];
var fps=30;
var page = require('webpage').create();

page.viewportSize = {
	width : 800,
	height : 600
};

helloAlex(frameNumber);

function helloAlex(frameNumber) {
	var theUrl='http://localhost:8080/LyricVideo/test1.html?frameNumber='
		+ frameNumber + '&fps='+fps;
	console.log(theUrl);
	page.open(theUrl, function() {

	});
	page.onLoadFinished = function(status) {
		page.render(frameLocation + frameNumber + '.png', {
			format : 'png',
			quality : '100'
		});
		console.log("Rendetred:" + frameNumber);
		if (frameNumber < maxFrames) {
			helloAlex(++frameNumber);
		} else {
			phantom.exit();
		}
	};
}
