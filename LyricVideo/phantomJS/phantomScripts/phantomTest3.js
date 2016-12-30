var page = require('webpage').create();
var frameLocation = 'frames/image_';

page.open('http://localhost:8080/LyricVideo/test1.html', function() {

});

page.onCallback = function(data) {
	var page1 = require('webpage').create();
	page1.viewportSize = {
		width : 400,
		height : 300
	};

	var frameNumber = data[0];
	var frameData = data[1];
	var totalFrames=data[2];
	
	if (frameNumber==totalFrames)
	{
		console.log(frameNumber+"/"+totalFrames);
		console.log("Finished generating: "+ totalFrames);
	}	
	else if (frameNumber % 10 == 0) {
		console.log(frameNumber+"/"+totalFrames);
	}
	
	page1.open(frameData, function() {
		page1.render(frameLocation + frameNumber + '.png', {
			format : 'png',
			quality : '100'
		});
		if (frameNumber==totalFrames)
		{
			console.log(frameNumber+"/"+totalFrames);
			console.log("Finished rendering: "+ totalFrames);
			phantom.exit();
		}	
		else if (frameNumber % 10 == 0) {
			console.log(frameNumber+"/"+totalFrames);
		}
	});
};
