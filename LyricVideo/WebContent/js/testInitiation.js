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
		drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
	})
	$('#selectedFontColour').on('change', function() {
		selectedFontColour = this.value;
		drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
	})
	$('#unselectedFontColour').on('change', function() {
		unselectedFontColour = this.value;
		drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
	})
	$('#shadowColour').on('input', function() {
		shadowColour = this.value;
		drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
	})

	$('#shadowOffsetX').on('input', function() {
		shadowOffsetX = this.value;
		drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
	})
	$('#shadowOffsetY').on('input', function() {
		shadowOffsetY = this.value;
		drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
	})
	$('#fontSize').on('input', function() {
		fontSize = this.value;
		drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
	})
	$('#shadowBlur').on('input', function() {
		shadowBlur = this.value;
		drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
	})
	$('#selectedOpacity').on('input', function() {
		selectedOpacity = this.value;
		drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
	})
	$('#unselectedOpacity').on('input', function() {
		unselectedOpacity = this.value;
		drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
	})

	$('#textX').on('input', function() {
		textX = this.value;
		drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
	})
	$('#texty').on('input', function() {
		texty = this.value;
		drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
	})
	$('#textWidth').on('input', function() {
		textWidth = this.value;
		drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
	})
	$('#textHeight').on('input', function() {
		textHeight = this.value;
		drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
	})

	$('#backgroundColour').on('input', function() {
		backgroundColour = this.value;
		drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
	})
	$('#backgroundOpacity').on('input', function() {
		backgroundOpacity = this.value;
		drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
	})
	$('#backgroundShadowColour').on('input', function() {
		backgroundShadowColour = this.value;
		drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
	})
	$('#backgroundShadowOffsetX').on('input', function() {
		backgroundShadowOffsetX = this.value;
		drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
	})
	$('#backgroundShadowOffsetY').on('input', function() {
		backgroundShadowOffsetY = this.value;
		drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
	})
	$('#backgroundShadowBlur').on('input', function() {
		backgroundShadowBlur = this.value;
		drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
	})
	$('#lineSpacing').on('input', function() {
		lineSpacing = this.value;
		drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
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
