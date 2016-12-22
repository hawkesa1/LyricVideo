//stolen wholesale off mozilla's wiki
function clock(time){
	var now = new Date();
	//now.setTime(time);
	var ctx = document.getElementById('canvas').getContext('2d');
	ctx.save();
	ctx.fillStyle = 'black'
	ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height); // videos cant handle transprency
	
	var sec = now.getSeconds();
	ctx.font="100px Georgia";
	ctx.fillStyle = "red";
	ctx.fillText(sec,10,90);
	
	

	ctx.restore();

	
	//images.push(canvas.toDataURL('image/webp', this.quality));
	
	return ctx;
}