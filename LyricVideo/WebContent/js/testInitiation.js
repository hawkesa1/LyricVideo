function addEventsToFrameInputs() {
	$(function() {
		$("#frameRange").change(function(event) {
			frameNumber = $("#frameRange").val();
			$("#frameValue").val(frameNumber);
			drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
		});
	});

	$(function() {
		$("#frameValue").change(function(event) {
			frameNumber = $("#frameValue").val();
			$("#frameRange").val(frameNumber);
			drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
		});
	});

	initialiseParameters();
	$(function() {
		$("#playPauseButton").click(function(e) {
			e.preventDefault();
			var vid = document.getElementById("audio");
			if (vid.paused) {
				vid.play();
				$('#playPauseButton').text("Pause");
				animate();
			} else {
				vid.pause();
				$('#playPauseButton').text("Play");
			}
		});
	});
}

function animate() {
	requestAnimationFrame(animate);
	draw();
}

function draw() {
	drawIt1(ctx, $("#audio").prop("currentTime") * 1000, lyricsObject);

}


