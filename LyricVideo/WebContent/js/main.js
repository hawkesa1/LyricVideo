var lyrics = "[{\"words\":[{\"word\":\"Lyric\",\"wordIndex\":0,\"id\":\"word_0_0\",\"startTime\":1409.707,\"endTime\":1757.155},{\"word\":\"Recorder\",\"wordIndex\":1,\"id\":\"word_0_1\",\"startTime\":1769.376,\"endTime\":2280.215},{\"word\":\"dot\",\"wordIndex\":2,\"id\":\"word_0_2\",\"startTime\":2587.96,\"endTime\":2814.304},{\"word\":\"com\",\"wordIndex\":3,\"id\":\"word_0_3\",\"startTime\":2934.739,\"endTime\":3201.363}],\"startTime\":1449.729,\"endTime\":3166.404},{\"words\":[{\"word\":\"Is\",\"wordIndex\":4,\"id\":\"word_1_0\",\"startTime\":3693.007,\"endTime\":3806.765},{\"word\":\"a\",\"wordIndex\":5,\"id\":\"word_1_1\",\"startTime\":3817.667,\"endTime\":3920.425},{\"word\":\"useful\",\"wordIndex\":6,\"id\":\"word_1_2\",\"startTime\":3932.208,\"endTime\":4233.314},{\"word\":\"tool\",\"wordIndex\":7,\"id\":\"word_1_3\",\"startTime\":4245.361,\"endTime\":4535.4710000000005}],\"startTime\":3693.01,\"endTime\":4575.535000000001},{\"words\":[{\"word\":\"For\",\"wordIndex\":8,\"id\":\"word_2_0\",\"startTime\":4804.155,\"endTime\":4928.602},{\"word\":\"syncing\",\"wordIndex\":9,\"id\":\"word_2_1\",\"startTime\":4939.615,\"endTime\":5455.826999999999},{\"word\":\"lyrics\",\"wordIndex\":10,\"id\":\"word_2_2\",\"startTime\":5543.734,\"endTime\":6063.594},{\"word\":\"to\",\"wordIndex\":11,\"id\":\"word_2_3\",\"startTime\":6399.3060000000005,\"endTime\":6639.014999999999},{\"word\":\"audio\",\"wordIndex\":12,\"id\":\"word_2_4\",\"startTime\":6650.2339999999995,\"endTime\":7120.531}],\"startTime\":4769.157,\"endTime\":7140.572}]"
var canvas;
var ctx;
var dataURL;
var totalFrames = 100;
var a;
var lyricsObject;
var frameNumber;
var fps;
var tempFrame = 1;
var start = null;

$(document).ready(function() {
	console.log("ready!");
	

});

function step(timestamp) {
	if (tempFrame < 600) {
		window.requestAnimationFrame(step);
		clock(ctx, (tempFrame++ / 60) * 1000, lyricsObject);
	}
}

var QueryString = function() {
	// This function is anonymous, is executed immediately and
	// the return value is assigned to QueryString!
	var query_string = {};
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		// If first entry with this name
		if (typeof query_string[pair[0]] === "undefined") {
			query_string[pair[0]] = decodeURIComponent(pair[1]);
			// If second entry with this name
		} else if (typeof query_string[pair[0]] === "string") {
			var arr = [ query_string[pair[0]], decodeURIComponent(pair[1]) ];
			query_string[pair[0]] = arr;
			// If third or later entry with this name
		} else {
			query_string[pair[0]].push(decodeURIComponent(pair[1]));
		}
	}
	return query_string;
}();
