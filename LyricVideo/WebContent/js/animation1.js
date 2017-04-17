
var linesToDisplay=7;

function drawIt(ctx, currentAudioTime, lines) {
	
	//console.log(lines);
	
	var CURRENT_TIME_POSITION=200;
	var ZOOM_LEVEL=6;
	var BACKGROUND_COLOUR='black';
	var TEXT_COLOUR='white';
	
	
	// draw the background
	ctx.save();
	ctx.fillStyle = BACKGROUND_COLOUR;
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	ctx.restore();
	
	var aLine;
	var aWord;
	var xPosition;
	var yPosition;
	var wordWidth=0;

	
	for(var i=0; i<lines.length; i++)
	{
		aLine=lines[i];
		if((aLine.startTime < (currentAudioTime +(10*1000))) && (aLine.endTime > (currentAudioTime -(2*1000))))
		{
			for(var j=0; j<aLine.words.length;j++)
			{
				aWord=aLine.words[j];
				xPosition=((aWord.startTime-currentAudioTime)/ZOOM_LEVEL)+CURRENT_TIME_POSITION;
				yPosition=(200 + (j*60));
				wordWidth=(aWord.endTime-aWord.startTime)/ZOOM_LEVEL;

				 ctx.beginPath();
				 ctx.rect(xPosition, yPosition, wordWidth, 60);
				 ctx.font = "small-caps 60px Arial";
				 ctx.strokeStyle = TEXT_COLOUR;
				 ctx.fillStyle = TEXT_COLOUR;
				 ctx.fillText(aWord.word, xPosition-5, yPosition-12);
				 ctx.fillStyle = 'red';
				 ctx.fill();
				 ctx.lineWidth = 1;
				 ctx.strokeStyle = TEXT_COLOUR;
				 ctx.stroke();

			}	
		}
		
		
		//console.log(aLine);
		
	}	
	
	//Current time Line
	 ctx.beginPath();
	 ctx.rect(CURRENT_TIME_POSITION, 0, 10, ctx.canvas.height);
	 ctx.fillStyle = 'red';
	 ctx.fill();
	 ctx.lineWidth = 1;
	 ctx.strokeStyle = TEXT_COLOUR;
	 ctx.stroke();

	 
	 
	 ctx.beginPath();
	 ctx.rect(0, 0, ctx.canvas.width, 100);
	 ctx.fillStyle = 'white';
	 ctx.fill();
	 ctx.lineWidth = 1;
	 ctx.strokeStyle = TEXT_COLOUR;
	 ctx.stroke();
	
	 ctx.beginPath();
	 ctx.rect(0, ctx.canvas.height-100, ctx.canvas.width, 100);
	 ctx.fillStyle = 'white';
	 ctx.fill(); 
	 ctx.lineWidth = 1;
	 ctx.strokeStyle = TEXT_COLOUR;
	 
	 
	 ctx.font = "small-caps 40px Arial";
	 ctx.strokeStyle = TEXT_COLOUR;
	 ctx.fillStyle = TEXT_COLOUR;
	 ctx.fillText("The shit that you promote", 100, ctx.canvas.height-25);
	 
	 ctx.stroke();
	 
	
	return ctx;
}

