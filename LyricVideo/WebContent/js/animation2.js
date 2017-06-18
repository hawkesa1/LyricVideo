var linesToDisplay = 7;
var transform = 0;
var transformDirection = 1;
var trandformLimit = 50;

function drawIt1(ctx, currentAudioTime, lines) {

	// console.log(lines);
	var CURRENT_TIME_POSITION = 400;
	var ZOOM_LEVEL = 6;
	var BACKGROUND_COLOUR = 'black';
	var TEXT_COLOUR = '#8B0000';
	var BOX_FILL_COLOUR = 'blue';
	var BOX_OUTLINE_COLOUR = 'white';

	// draw the background
	// ctx.save();
	// ctx.globalAlpha = 1;
	// ctx.fillStyle = BACKGROUND_COLOUR;
	// ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	// ctx.restore();
	// ctx.save();
	// ctx.globalAlpha = 0;
	// ctx.fillStyle = BACKGROUND_COLOUR;
	// ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	// ctx.restore();

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	var aLine;
	var aWord;
	var xPosition = 20;
	var xPosition1 = 20;
	var yPosition = 100;
	var wordWidth = 0;
	var wordSpace = 0;
	var wordWidth1 = 0;

	for (var i = 0; i < lines.length; i++) {

		aLine = lines[i];
		for (var j = 0; j < aLine.words.length; j++) {
			aWord = aLine.words[j];
			xPosition1 = ((aWord.startTime - currentAudioTime) / ZOOM_LEVEL)
					+ CURRENT_TIME_POSITION;

			if (aWord.endTime > currentAudioTime) {
				wordWidth1 = (aWord.endTime - aWord.startTime) / ZOOM_LEVEL;
				ctx.globalAlpha = 0.3;
				ctx.beginPath();
				ctx.fillStyle = BOX_FILL_COLOUR;
				ctx.strokeStyle = BOX_OUTLINE_COLOUR;
				ctx.rect(xPosition1, 500, wordWidth1, 30);
				ctx.fill();
				ctx.lineWidth = 2;
				ctx.stroke();
			} else {
			
			}
		}

		if ((aLine.startTime < (currentAudioTime + (0 * 1000)))
				&& (aLine.endTime > (currentAudioTime - (0 * 1000)))) {
			for (var j = 0; j < aLine.words.length; j++) {
				aWord = aLine.words[j];

				if (xPosition > 600) {
					yPosition = yPosition + 80;
					xPosition = 20;
				}

				ctx.save();
				ctx.shadowColor = "black";
				ctx.shadowOffsetX = 5;
				ctx.shadowOffsetY = 5;
				ctx.shadowBlur = 7;
				ctx.font = "60px " + fontFamily;
				ctx.textBaseline = 'alphabetic';

				wordWidth = ctx.measureText(aWord.word).width;
				if ((aWord.startTime < (currentAudioTime + (0 * 1000)))
						&& (aWord.endTime > (currentAudioTime - (0 * 1000)))) {
					ctx.globalAlpha = 1;
					ctx.fillStyle = "orange";
					ctx.font = "65px " + fontFamily;
					wordSpace = ctx.measureText(aWord.word).width - wordWidth;
					ctx.fillText(aWord.word, xPosition, yPosition - 5);
					xPosition = xPosition + ctx.measureText(aWord.word).width
							+ (30 - wordSpace);
					console.log();
				} else {
					ctx.globalAlpha = 0.8;
					ctx.fillStyle = "white";
					ctx.fillText(aWord.word, xPosition, yPosition);
					xPosition = xPosition + ctx.measureText(aWord.word).width
							+ 30;
				}

				ctx.restore();

			}
		}
	}

	return ctx;
}