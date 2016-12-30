var FileUploader = function(container) {
	this.bindEvents(container, this);
};

FileUploader.prototype.bindEvents = function(container, theFileUploader) {
	container.ondragover = function(e) {
		e.preventDefault();
		this.className = 'hover';
		return false;
	};
	container.ondragend = function(e) {
		e.preventDefault();
		this.className = '';
		return false;
	};
	container.ondragleave = function(e) {
		e.preventDefault();
		this.className = '';
		return false;
	};
	container.ondrop = function(e) {
		e.preventDefault();
		container.className = '';
		theFileUploader.readFiles(e.dataTransfer.files);
	}
}

FileUploader.prototype.readFiles = function(files) {
	clearConsole();
	var formData = new FormData();
	var file;
	for (var i = 0; i < files.length; i++) {
		file = files[i]
		if (i == 0) { // only allow 1 file at a time
			if (file.type.split("/")[0] === "audio") {
				if (file.size < (20 * 1024 * 1024)) {
					formData.append('file', file);
					updateConsole('<p>* Reading file: ' + file.name + '</p>');
					extractTags(file, formData);
				} else {
					updateConsole("<p class='bad'>* The maximum file size is 15 Mb.  This file is: '+ parseFloat((file.size / 1024 / 1024)).toFixed(2) + ' Mb</p>");
				}
			} else {
				updateConsole("<p class='bad'>* This is not an audio file: <i>"
						+ file.name + "</i>.  Please try again..</p>");
			}
		}
	}
	function extractTags(file, formData) {
		var url = file.urn || file.name;
		var tXxxDescription;
		var tXxxWavPointsDescription = "LYRICRECORDER.COM_WAVPOINTS_0.0.1";
		var tXxxLyricsDescription = "LYRICRECORDER.COM_LYRICS_0.0.1";
		var tXxxSongId = "LYRICRECORDER.COM_SONG_ID";
		var tXxxWavPointsValue;
		var tXxxLyricsValue;
		var tXxxSongIdValue;
		var tXxxWavPointsValid = false;
		var tXxxLyricsValid = false;

		updateConsole('<p>* Checking for existing tags</p>');

		ID3.loadTags(url, function() {
			var tags = ID3.getAllTags(url);
			if (tags.TXXX) {
				for (var i = 0; i < tags.TXXX.length; i++) {
					tXxxDescription = tags.TXXX[i].data.description;
					if (tXxxDescription == tXxxWavPointsDescription) {
						tXxxWavPointsValue = tags.TXXX[i].data.text;
						tXxxWavPointsValid = true;
					} else if (tXxxDescription == tXxxLyricsDescription) {
						tXxxLyricsValue = tags.TXXX[i].data.text;
						tXxxLyricsValid = true;
					} else if (tXxxDescription == tXxxSongId) {
						tXxxSongIdValue = tags.TXXX[i].data.text;
					}
				}
			}
			var results = {
				album : tags.album,
				artist : tags.artist,
				title : tags.title,
				tXxxWavPointsValue : tXxxWavPointsValue,
				tXxxLyricsValue : tXxxLyricsValue,
				tXxxSongIdValue : tXxxSongIdValue,
				tXxxWavPointsValid : tXxxWavPointsValid,
				tXxxLyricsValid : tXxxLyricsValid
			};
			functionToCallWhenID3TagRead(results, formData, file)
		}, {
			dataReader : ID3.FileAPIReader(file)
		});
		function functionToCallWhenID3TagRead(tags, formData, file) {
			if (tags.tXxxLyricsValid && tags.tXxxWavPointsValid) {
				updateConsole("<p class='good'>* Found valid tags</p>");
				// var file=formData.get('file');
				updateConsole("<p>* Loading track</p>");
				var blob = window.URL || window.webkitURL;
				fileURL = blob.createObjectURL(file);
				document.getElementById('audio').src = fileURL;
				updateConsole("<p>* Loaded track</p>");
				// updatePageDetails(tags);
				fileUploadComplete(tags);
			} else {
				updateConsole('<p>* No valid tags found</p>');
				performUpload(formData);
			}

			function fileUploadComplete(tags) {

				extractedTags=JSON.parse(tags.tXxxLyricsValue);
				console.log(extractedTags);
				startAnimation();

			}

		}
	}
}

var extractedTags;

var updateConsole = function(text) {
	var holder = document.getElementById('fileUploadHolder');
	holder.innerHTML += text;
	$('#fileUploadHolder').scrollTop($('#fileUploadHolder')[0].scrollHeight);
}
var clearConsole = function(text) {
	var holder = document.getElementById('fileUploadHolder');
	holder.innerHTML = "";
}
