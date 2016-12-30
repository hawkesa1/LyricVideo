function animation1(ctx, i, lineText) {
	ctx.save();
	ctx.fillStyle = 'black'
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	ctx.font = "40px Georgia";
	ctx.fillStyle = "red";
	ctx.fillText(lineText, i, 90);
	ctx.fillText('Alex', 10, 190);
	ctx.restore();
	return ctx;
}


function clock(ctx, currentAudioTime, lines) {
	var nextLine = -1;
	var playingLine = -1;
	var line;

	if (currentAudioTime < lines[0].startTime)// before first line
	{
		nextLine = 0;
		playingLine = -1;
	} else if (currentAudioTime > lines[lines.length - 1].endTime) // after
	// last line
	{
		nextLine = -1;
		playingLine = -1;
	} else {
		for (var i = 0; i < lines.length; i++) {
			line = lines[i];
			if (currentAudioTime > line.endTime) // if currentTime is greater
			// than this line's endTime
			{
				// keep going
			} else {
				if (currentAudioTime >= line.startTime) // line is playing
				{
					playingLine = i;
					nextLine = i + 1;
				} else // line is next to play
				{
					playingLine = -1;
					nextLine = i;
				}
				break;
			}
		}

	}

	var lineInfo = '';
	lineInfo = 'Playing Line: ' + playingLine + " Next Line: " + nextLine;

	var lineText = ''

	// console.log(lines);
	// console.log(audio.currentTime);
	// var lineText = '';
	if (playingLine > -1) {
		var words = lines[playingLine].words;
		for (var i = 0; i < words.length; i++) {
			lineText += words[i].word + ' ';
		}
	}

	
	ctx.save();
	ctx.fillStyle = 'black'
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	ctx.font = "40px Georgia";
	ctx.fillStyle = "red";
	ctx.fillText(lineInfo, 10, 90);
	ctx.fillText(lineText, 10, 190);
	ctx.restore();

	return ctx;
}