function clock(ctx, currentAudioTime, lines) {

	var lineResults = determineCurrentLineAndNextLine(currentAudioTime, lines)
	var nextLine = lineResults[0];
	var playingLine = lineResults[1];

	
	var lineDisplay = $('#lyrics');
	var lineDisplay1 = $('#lyrics1');
	
	lineDisplay.html("");
	lineDisplay1.html("");
	var lineDisplayText = "";

	
	if (playingLine > -1) {

		var playingWordIndex = determineCurrentWord(currentAudioTime,
				lines[playingLine]);
		console.log(playingWordIndex);

		var words = lines[playingLine].words;
		lineDisplayText += "<div id='line_" + playingLine + "' class='line'>";

		
		for (var i = 0; i < words.length; i++) {
			if (i == playingWordIndex) {
				lineDisplayText += "<div id='line_" + playingLine + "_word_"
						+ i + "' class='word playing'>" + words[i].word + "</div>";
			}
			else
			{
				lineDisplayText += "<div id='line_" + playingLine + "_word_"
				+ i + "' class='word'>" + words[i].word + "</div>";
			}	
		}
		lineDisplay.html(lineDisplayText);
		
		
	
	}

	ctx.save();
	ctx.fillStyle = 'yellow'
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	ctx.font = "20px Arial";
	ctx.fillStyle = "red";
	ctx.fillText((currentAudioTime / 1000).toFixed(2), 10, 550);
	ctx.restore();
	return ctx;
}

function determineCurrentWord(currentAudioTime, line) {
	var playingWord;
	var words = line.words;

	if (currentAudioTime < words[0].startTime)// before first word
	{

		playingWord = -1;
	} else if (currentAudioTime > words[words.length - 1].endTime) // after
	// last word
	{

		playingWord = -1;
	} else {
		for (var i = 0; i < words.length; i++) {
			word = words[i];
			if (currentAudioTime > word.endTime) // if currentTime is greater
			// than this words's endTime
			{
				// keep going
			} else {
				if (currentAudioTime >= word.startTime) // word is playing
				{
					playingWord = i;

				} else // line is next to play
				{
					playingWord = -1;

				}
				break;
			}
		}
	}
	return playingWord;

}

function determineCurrentLineAndNextLine(currentAudioTime, lines) {
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
	return [ nextLine, playingLine ];
}