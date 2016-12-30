var maxTimes = 1000;
var numberTimes = 0;

var video = new Whammy.Video(30, 0.2);
var progress = document.getElementById('progress');

function startAnimation() {
	(function() {
		var requestAnimationFrame = window.requestAnimationFrame
				|| window.mozRequestAnimationFrame
				|| window.webkitRequestAnimationFrame
				|| window.msRequestAnimationFrame;
		window.requestAnimationFrame = requestAnimationFrame;
	})();

	nextFrame();
}

var vidTime=0;

function nextFrame() {
	
	var audio = document.getElementById('audio');
	var currentAudioTime = audio.currentTime * 1000;
	
	vidTime+=(1000/30);
	
	var context = clock(vidTime);
	
	console.log("Add Context");
	video.add(context);
	if (numberTimes++ < maxTimes) {
		//requestAnimationFrame(nextFrame);
		nextFrame();
		document.getElementById('status').innerHTML = "Drawing Frames";
	} else {
		document.getElementById('status').innerHTML = "Compiling Video";
		finalizeVideo();
	}

}

function finalizeVideo() {
	var start_time = +new Date;
	video.compile(false, function(output) {
		var end_time = +new Date;
		var url = URL.createObjectURL(output);
		document.getElementById('awesome').src = url;
		document.getElementById('download').style.display = '';
		document.getElementById('download').href = url;
		document.getElementById('status').innerHTML = "Compiled Video in "
				+ (end_time - start_time) + "ms, file size: "
				+ Math.ceil(output.size / 1024) + "KB";
		exportSomething(output);
	});
}

function exportSomething(blob) {

	var url = (window.URL || window.webkitURL).createObjectURL(blob);
	console.log(url);

	var filename = "test.webm";
	var data = new FormData();
	data.append('file', blob);

	$.ajax({
		url : "./FileUpload",
		type : 'POST',
		data : data,
		contentType : false,
		processData : false,
		success : function(data) {
			alert("boa!");
		},
		error : function() {
			alert("not so boa!");
		}
	});
}
