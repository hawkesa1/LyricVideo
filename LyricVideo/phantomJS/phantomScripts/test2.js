var webPage = require('webpage');
var page = webPage.create();

page.onConsoleMessage = function(msg) {
	console.log('The web page said: ' + msg);
};

page
		.open(
				'http://localhost:8080/LyricVideo/test1.html?frameNumber=1000&fps=60&pageWidth=800&pageHeight=600',
				function(status) {
					var t0 = performance.now();
					var script1 = "function(){alex();}";
					var j = 0;
					while (j < 100) {
						page.evaluateJavaScript(script1)
						{
							// page.render('screenshot' + j +'.png');

							page.render('screenshot' + j + '.jpg', {
								format : 'jpg',
								quality : '90'
							});

						}
						j++;
					}

					var t1 = performance.now();
					console.log("Call to doSomething took " + ((t1 - t0)/1000)
							+ " seconds.")
					phantom.exit();
				});