function addEventsToFrameInputs() {
	$(function() {
		$("#frameRange").change(function(event) {
			frameNumber=$("#frameRange").val();
			$("#frameValue").val(frameNumber);
			drawIt(ctx, (frameNumber / fps) * 1000, lyricsObject);
		});
	});
	
	$(function() {
		$("#frameValue").change(function(event) {
			frameNumber=$("#frameValue").val();
			$("#frameRange").val(frameNumber);
			drawIt(ctx, (frameNumber / fps) * 1000, lyricsObject);
		});
	});
}

function step(timestamp) {
	if (tempFrame < 600) {
		window.requestAnimationFrame(step);
		drawIt(ctx, (tempFrame++ / 60) * 1000, lyricsObject);
	}
}