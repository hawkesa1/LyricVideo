var linesToDisplay = 7;
var transform = 0;
var transformDirection = 1;
var trandformLimit = 50;

var CURRENT_TIME_POSITION = 400;
var ZOOM_LEVEL = 6;
var BACKGROUND_COLOUR = 'black';
var selectedFontColour = "#86fb75";
var unselectedFontColour = "#ffffff";
var shadowColour = "#000000";

var selectedFontSize;

var BOX_FILL_COLOUR = 'blue';
var BOX_OUTLINE_COLOUR = 'white';

function drawIt1(ctx, currentAudioTime, lines) {

	// console.log(lines);

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

	// $('#textX').val(textX);
	// $('#texty').val(texty);
	// $('#textWidth').val(textWidth);
	// $('#textHeight').val(textHeight);

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	
	ctx.save();
	ctx.globalAlpha = backgroundOpacity;
	ctx.fillStyle=backgroundColour;
	ctx.shadowColor = backgroundShadowColour;
	ctx.shadowOffsetX = backgroundShadowOffsetX;
	ctx.shadowOffsetY = backgroundShadowOffsetY;
	ctx.shadowBlur = backgroundShadowBlur;
	ctx.fillRect(textX, texty - 40, textWidth, textHeight);
	ctx.restore();

	var aLine;
	var aWord;
	var xPosition = textX-0+10;
	var yPosition = texty-0;

	var wordWidth = 0;
	var wordSpace = 0;
	var wordWidth1 = 0;
	
	var currentLineWidth=0;

	
	for (var i = 0; i < lines.length; i++) {
		aLine = lines[i];
		if ((aLine.startTime < (currentAudioTime + (0 * 1000)))
				&& (aLine.endTime > (currentAudioTime - (0 * 1000)))) {

			for (var j = 0; j < aLine.words.length; j++) {
				aWord = aLine.words[j];
				console.log(aWord.word)
				ctx.font = fontSize + "px " + fontFamily;
				
				currentLineWidth+=ctx.measureText(aWord.word).width;
				
				console.log("CurrentLineWidth:"+currentLineWidth);
				console.log("TextWidth:"+textWidth);
				console.log(textX);
				
				if (currentLineWidth >= (textWidth)) {
					currentLineWidth=ctx.measureText(aWord.word).width+30;
					xPosition = (textX-0+10);
					yPosition = yPosition + (lineSpacing-0);
				}
				else
				{
					currentLineWidth+=30;
				}	

				ctx.save();
				ctx.shadowColor = shadowColour;
				ctx.shadowOffsetX = shadowOffsetX;
				ctx.shadowOffsetY = shadowOffsetY;
				ctx.shadowBlur = shadowBlur;
				ctx.font = fontSize + "px " + fontFamily;
				ctx.textBaseline = 'alphabetic';

				wordWidth = ctx.measureText(aWord.word).width;
				if ((aWord.startTime < (currentAudioTime + (0 * 1000)))
						&& (aWord.endTime > (currentAudioTime - (0 * 1000)))) {
					ctx.globalAlpha = selectedOpacity;
					ctx.fillStyle = selectedFontColour;

					selectedFontSize = parseInt(fontSize) + 0;
					console.log("fontFamily:" + fontFamily);
					ctx.font = selectedFontSize + "px " + fontFamily;
					wordSpace = ctx.measureText(aWord.word).width - wordWidth;
					ctx.fillText(aWord.word, xPosition, yPosition - 5);
					xPosition = xPosition + ctx.measureText(aWord.word).width
							+ (30 - wordSpace);
					console.log();
				} else {
					ctx.globalAlpha = unselectedOpacity;
					ctx.fillStyle = unselectedFontColour;
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