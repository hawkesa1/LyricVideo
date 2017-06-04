
var linesToDisplay=7;

function drawIt(ctx, currentAudioTime, lines) {
	
	//console.log(lines);
	
	var CURRENT_TIME_POSITION=200;
	var ZOOM_LEVEL=6;
	var BACKGROUND_COLOUR='black';
	var TEXT_COLOUR='#8B0000';
	var BOX_FILL_COLOUR='white';
	var BOX_OUTLINE_COLOUR='#7FFF00';
	
	// draw the background
	//ctx.save();
	//ctx.globalAlpha = 1;
	//ctx.fillStyle = BACKGROUND_COLOUR;
	//ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	//ctx.restore();
	
	//ctx.save();
	//ctx.globalAlpha = 0;
	//ctx.fillStyle = BACKGROUND_COLOUR;
	//ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	//ctx.restore();
	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	var aLine;
	var aWord;
	var xPosition;
	var yPosition=0;
	var wordWidth=0;

	
	for(var i=0; i<lines.length; i++)
	{
		aLine=lines[i];
		if((aLine.startTime < (currentAudioTime +(10*1000))) && (aLine.endTime > (currentAudioTime -(2*1000))))
		{
			for(var j=0; j<aLine.words.length;j++)
			{
				if(j==0)
				{
					yPosition=10;
				}	
				if(j%15==0)
				{
					yPosition=10;
				}	
				
				aWord=aLine.words[j];
				xPosition=((aWord.startTime-currentAudioTime)/ZOOM_LEVEL)+CURRENT_TIME_POSITION;
				yPosition=yPosition+60;
				wordWidth=(aWord.endTime-aWord.startTime)/ZOOM_LEVEL;

				 ctx.beginPath();
				 ctx.globalAlpha = 0.2;
				 ctx.fillStyle = BOX_FILL_COLOUR;
				 ctx.strokeStyle = BOX_OUTLINE_COLOUR;
				 ctx.rect(xPosition, yPosition, wordWidth, 60);
				 ctx.fill();
				 ctx.lineWidth = 2;
				 ctx.stroke();
				 
				 ctx.globalAlpha = 1;
				 
				 ctx.font = "small-caps 40px Arial";
				 ctx.fillStyle = TEXT_COLOUR;
				 ctx.fillText(aWord.word, xPosition-5, yPosition-16);

			}	
		}
		
		
		//console.log(aLine);
		
	}	
	
	//Current time Line
	 ctx.beginPath();
	 ctx.fillStyle = BOX_FILL_COLOUR;
	 ctx.strokeStyle = BOX_OUTLINE_COLOUR;
	 ctx.rect(CURRENT_TIME_POSITION, 0, 10, ctx.canvas.height);
	 
	 ctx.fill();
	 ctx.lineWidth = 1;
	 ctx.strokeStyle = TEXT_COLOUR;
	 ctx.stroke();

	 

	 
	 
	
	 
	 ctx.stroke();
	 
	
	return ctx;
}

