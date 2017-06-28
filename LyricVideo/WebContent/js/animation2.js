var linesToDisplay = 7;
var transform = 0;
var transformDirection = 1;
var trandformLimit = 50;

var CURRENT_TIME_POSITION = 400;
var ZOOM_LEVEL = 6;

var selectedFontSize;

var BOX_FILL_COLOUR = 'blue';
var BOX_OUTLINE_COLOUR = 'white';

function drawIt1(ctx, currentAudioTime, lines) {

	setBackgroundImageRotation(parameterValues.backgroundImageRotation);
	setBackgroundImageSize(parameterValues.backgroundImageHeight,
			parameterValues.backgroundImageWidth)

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.save();
	ctx.globalAlpha = parameterValues.backgroundOpacity;
	ctx.fillStyle = parameterValues.backgroundColour;

	if (parameterValues.backgroundShadowShow) {
		ctx.shadowColor = parameterValues.backgroundShadowColour;
		ctx.shadowOffsetX = parameterValues.backgroundShadowOffsetX;
		ctx.shadowOffsetY = parameterValues.backgroundShadowOffsetY;
		ctx.shadowBlur = parameterValues.backgroundShadowBlur;
	}
	ctx.fillRect(parameterValues.textX, parameterValues.textY - 40,
			parameterValues.textWidth, parameterValues.textHeight);
	ctx.restore();

	var aLine;
	var aWord;
	var xPosition = parameterValues.textX - 0 + 10;
	var yPosition = parameterValues.textY - 0;

	var wordWidth = 0;
	var wordSpace = 0;
	var wordWidth1 = 0;

	var currentLineWidth = 0;

	for (var i = 0; i < lines.length; i++) {
		aLine = lines[i];
		if ((aLine.startTime < (currentAudioTime + (0 * 1000)))
				&& (aLine.endTime > (currentAudioTime - (0 * 1000)))) {

			for (var j = 0; j < aLine.words.length; j++) {
				aWord = aLine.words[j];

				ctx.font = parameterValues.fontSize + "px "
						+ parameterValues.fontFamily;

				currentLineWidth += ctx.measureText(aWord.word).width;

				if (currentLineWidth >= (parameterValues.textWidth)) {
					currentLineWidth = ctx.measureText(aWord.word).width
							+ (parameterValues.characterSpacing - 0);
					xPosition = (parameterValues.textX - 0 + 10);
					yPosition = yPosition + (parameterValues.lineHeight - 0);
				} else {
					currentLineWidth += (parameterValues.characterSpacing - 0);
				}

				wordWidth = ctx.measureText(aWord.word).width;
				if ((aWord.startTime < (currentAudioTime + (0 * 1000)))
						&& (aWord.endTime > (currentAudioTime - (0 * 1000)))) {

					ctx.save();

					if (parameterValues.selectedShadowShow) {
						ctx.shadowColor = parameterValues.selectedShadowColour;
						ctx.shadowOffsetX = parameterValues.selectedShadowOffsetX;
						ctx.shadowOffsetY = parameterValues.selectedShadowOffsetY;
						ctx.shadowBlur = parameterValues.selectedShadowBlur;
					}
					ctx.font = parameterValues.fontSize + "px " + parameterValues.fontFamily;
					ctx.textBaseline = 'alphabetic';

					ctx.globalAlpha = selectedOpacity;
					ctx.fillStyle = parameterValues.selectedFontColour;
					selectedFontSize = parseInt(parameterValues.fontSize) + 0;
					console.log("fontFamily:" + parameterValues.fontFamily);
					ctx.font = selectedFontSize + "px "
							+ parameterValues.fontFamily;
					wordSpace = ctx.measureText(aWord.word).width - wordWidth;
					ctx.fillText(aWord.word, xPosition, yPosition - 5);
					ctx.restore();

					xPosition = xPosition
							+ ctx.measureText(aWord.word).width
							+ ((parameterValues.characterSpacing - 0) - wordSpace);
					console.log();
				} else {
					ctx.save();
					if (parameterValues.unselectedShadowShow) {
						ctx.shadowColor = parameterValues.unselectedShadowColour;
						ctx.shadowOffsetX = parameterValues.unselectedShadowOffsetX;
						ctx.shadowOffsetY = parameterValues.unselectedShadowOffsetY;
						ctx.shadowBlur = parameterValues.unselectedShadowBlur;
					}
					ctx.font = parameterValues.fontSize + "px "
							+ parameterValues.fontFamily;
					ctx.textBaseline = 'alphabetic';
					ctx.globalAlpha = unselectedOpacity;
					ctx.fillStyle = parameterValues.unselectedFontColour;
					ctx.fillText(aWord.word, xPosition, yPosition);
					ctx.restore();
					xPosition = xPosition + ctx.measureText(aWord.word).width
							+ (parameterValues.characterSpacing - 0);
				}

				ctx.restore();

			}
		}
	}
	return ctx;
}

function setBackgroundImageSize(width, height) {
	$("#backgroundImageContainer").css("background-size",
			height + "px " + width + "px");
}

function setBackgroundImage(imageUrl, width, height) {
	$("#backgroundImageContainer").css("background-image",
			"url(" + imageUrl + ")");
	$("#backgroundImageContainer").css("background-repeat", "no-repeat");
	$("#backgroundImageContainer").css("background-size",
			height + "px " + width + "px");
}

function setBackgroundImageRotation(rotiationInDegrees) {
	$('#backgroundImageContainer').css({
		'-webkit-transform' : 'rotate(' + rotiationInDegrees + 'deg)',
		'-moz-transform' : 'rotate(' + rotiationInDegrees + 'deg)',
		'-ms-transform' : 'rotate(' + rotiationInDegrees + 'deg)',
		'transform' : 'rotate(' + rotiationInDegrees + 'deg)'
	});
}
