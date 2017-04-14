
var linesToDisplay=7;

function drawIt(ctx, currentAudioTime, lines) {
	
	//console.log(lines);
	
	var CURRENT_TIME_POSITION=200;
	var ZOOM_LEVEL=6;
	
	var lookAheadTime=5;
	
	var pixelsPerSecond=(ctx.canvas.width/2)/5;
	
	ctx.save();
	ctx.fillStyle = 'yellow'
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	ctx.font = "20px Arial";
	ctx.fillStyle = "red";
	ctx.fillText(currentAudioTime/1000, 10, 550);
	ctx.restore();
	
	var aLine;
	var aWord;
	var xPosition;
	var yPosition;
	var wordWidth=0;

	
	for(var i=0; i<lines.length; i++)
	{
		aLine=lines[i];
		if((aLine.startTime < (currentAudioTime +(ZOOM_LEVEL*1000))) && (aLine.endTime > (currentAudioTime)))
		{
			console.log("Current Line="+i);
			for(var j=0; j<aLine.words.length;j++)
			{
				aWord=aLine.words[j];
				console.log(aWord.word);
				
				xPosition=((aWord.startTime-currentAudioTime)/ZOOM_LEVEL)+CURRENT_TIME_POSITION;
				yPosition=(200 + (j*20));
				wordWidth=(aWord.endTime-aWord.startTime)/ZOOM_LEVEL;
				
				console.log(wordWidth)
				 ctx.beginPath();
				 ctx.rect(xPosition, yPosition, wordWidth, 10);
				 ctx.font = "20px Arial";
				 ctx.fillText(aWord.word, xPosition, yPosition-10);
				 ctx.fillStyle = 'red';
				 ctx.fill();
				 ctx.lineWidth = 7;
				 ctx.strokeStyle = 'black';
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
	 ctx.lineWidth = 7;
	 ctx.strokeStyle = 'black';
	 ctx.stroke();

	 
	 
	 ctx.beginPath();
	 ctx.rect(0, 0, ctx.canvas.width, 100);
	 ctx.fillStyle = 'red';
	 ctx.fill();
	 ctx.lineWidth = 7;
	 ctx.strokeStyle = 'black';
	 ctx.stroke();
	
	
	
	return ctx;
}

