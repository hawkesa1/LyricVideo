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

	$(function() {
		$("#frameBackgroundFile").on('change', function() {
			// Get a reference to the fileList
			var files = !!this.files ? this.files : [];

			// If no files were selected, or no FileReader support,
			// return
			if (!files.length || !window.FileReader)
				return;

			// Only proceed if the selected file is an image
			if (/^image/.test(files[0].type)) {

				// Create a new instance of the FileReader
				var reader = new FileReader();

				// Read the local file as a DataURL
				reader.readAsDataURL(files[0]);

				// When loaded, set image data as background of page
				reader.onloadend = function() {

					setBackgroundImage(this.result, 800, 600);

				}

			}
		});
	});

	$('#fontSelect').on('change', function() {
		fontFamily = this.value;
		console.log("fontFamily:"+ fontFamily);
	})
	
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

function setBackgroundImage(imageUrl, width, height) {
	$("#backgroundImageContainer").css("background-image",
			"url(" + imageUrl + ")");
	$("#backgroundImageContainer").css("background-repeat", "no-repeat");
	$("#backgroundImageContainer").css("background-size",
			width + "px " + height + "px");
}

function step(timestamp) {
	if (tempFrame < 600) {
		window.requestAnimationFrame(step);
		drawIt(ctx, (tempFrame++ / 60) * 1000, lyricsObject);
	}
}