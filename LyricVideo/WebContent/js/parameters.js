var BACKGROUND_IMAGE_LOCATION = "/images/";
var parameterValues = {};
var parameterSnapshots = {
	"snapshots" : []
};

var parameterInitialiser = {
	"groups" : [ {
		"label" : "Background",
		"id" : "background",
		"parameters" : [ {
			"label" : "Background Image",
			"name" : "backgroundImage",
			"type" : "file",
			"defaultValue" : "",
			"action" : "change"
		}, {
			"label" : "Repeat",
			"name" : "backgroundRepeat",
			"type" : "select",
			"options" : {
				"no-repeat" : "No Repeat",
				"repeat" : "Repeat",
				"repeat-x" : "Repeat X",
				"repeat-y" : "Repeat Y"
			},
			"action" : "input"
		}, {
			"label" : "Background Image Width",
			"name" : "backgroundImageWidth",
			"type" : "range",
			"min" : 0,
			"max" : 2000,
			"step" : 1,
			"defaultValue" : 800,
			"action" : "input"

		}, {
			"label" : "Background Image Height",
			"name" : "backgroundImageHeight",
			"type" : "range",
			"min" : 0,
			"max" : 2000,
			"step" : 1,
			"defaultValue" : 600,
			"action" : "input"

		}, {
			"label" : "Background Position X",
			"name" : "backgroundImagePositionX",
			"type" : "range",
			"min" : 0,
			"max" : 2000,
			"step" : 1,
			"defaultValue" : 800,
			"action" : "input"

		}, {
			"label" : "Background Position Y",
			"name" : "backgroundImagePositionY",
			"type" : "range",
			"min" : 0,
			"max" : 2000,
			"step" : 1,
			"defaultValue" : 800,
			"action" : "input"

		}, {
			"label" : "Container Width",
			"name" : "backgroundContainerWidth",
			"type" : "range",
			"min" : 0,
			"max" : 2000,
			"step" : 1,
			"defaultValue" : 800,
			"action" : "input"

		}, {
			"label" : "Container Height",
			"name" : "backgroundContainerHeight",
			"type" : "range",
			"min" : 0,
			"max" : 2000,
			"step" : 1,
			"defaultValue" : 600,
			"action" : "input"

		}, {
			"label" : "Container Position X",
			"name" : "backgroundContainerPositionX",
			"type" : "range",
			"min" : -2000,
			"max" : 2000,
			"step" : 1,
			"defaultValue" : 0,
			"action" : "input"

		}, {
			"label" : "Container Position Y",
			"name" : "backgroundContainerPositionY",
			"type" : "range",
			"min" : -2000,
			"max" : 2000,
			"step" : 1,
			"defaultValue" : 0,
			"action" : "input"

		}, {
			"label" : "Container Rotation",
			"name" : "backgroundImageRotation",
			"type" : "range",
			"min" : 0,
			"max" : 360,
			"step" : 1,
			"defaultValue" : 0,
			"action" : "input"

		} ]
	}, {
		"label" : "Selected Font Options",
		"id" : "selectedFontOptions",
		"parameters" : [ {
			"label" : "Font Family",
			"name" : "fontFamily",
			"type" : "font",
			"defaultValue" : "Comicate",
			"action" : "input"
		},{
			"label" : "Opacity",
			"name" : "selectedOpacity",
			"type" : "range",
			"min" : 0,
			"max" : 1,
			"step" : 0.1,
			"defaultValue" : 0.9,
			"action" : "input"
		}, {
			"label" : "Font Colour",
			"name" : "selectedFontColour",
			"type" : "color",
			"defaultValue" : "#000000",
			"action" : "input"
		}, {
			"label" : "Line Height",
			"name" : "lineHeight",
			"type" : "range",
			"min" : 0,
			"max" : 100,
			"step" : 1,
			"defaultValue" : 40,
			"action" : "input"
		}, {
			"label" : "Character Spacing",
			"name" : "characterSpacing",
			"type" : "range",
			"min" : 0,
			"max" : 100,
			"step" : 1,
			"defaultValue" : 30,
			"action" : "input"
		}, {
			"label" : "Font Size",
			"name" : "fontSize",
			"type" : "range",
			"min" : 0,
			"max" : 100,
			"step" : 1,
			"defaultValue" : 40,
			"action" : "input"
		}, {
			"label" : "Shadow",
			"name" : "selectedShadowShow",
			"type" : "checkbox",
			"defaultValue" : "checked",
			"action" : "input"
		}, {
			"label" : "Shadow Colour",
			"name" : "selectedShadowColour",
			"type" : "color",
			"defaultValue" : "#000000",
			"action" : "input"
		}, {
			"label" : "Shadow Offset X",
			"name" : "selectedShadowOffsetX",
			"type" : "range",
			"min" : 0,
			"max" : 10,
			"step" : 1,
			"defaultValue" : 5,
			"action" : "input"
		}, {
			"label" : "Shadow Offset Y",
			"name" : "selectedShadowOffsetY",
			"type" : "range",
			"min" : 0,
			"max" : 10,
			"step" : 1,
			"defaultValue" : 5,
			"action" : "input"
		}, {
			"label" : "Shadow Blur",
			"name" : "selectedShadowBlur",
			"type" : "range",
			"min" : 0,
			"max" : 20,
			"step" : 1,
			"defaultValue" : 7,
			"action" : "input"
		} ]
	}, {
		"label" : "Unselected Font Options",
		"id" : "unselectedFontOptions",
		"parameters" : [ {
			"label" : "Font Colour",
			"name" : "unselectedFontColour",
			"type" : "color",
			"defaultValue" : "#ffffff",
			"action" : "input"
		}, {
			"label" : "Shadow",
			"name" : "unselectedShadowShow",
			"type" : "checkbox",
			"defaultValue" : "checked",
			"action" : "input"
		}, {
			"label" : "Shadow Colour",
			"name" : "unselectedShadowColour",
			"type" : "color",
			"defaultValue" : "#000000",
			"action" : "input"
		}, {
			"label" : "Shadow Offset X",
			"name" : "unselectedShadowOffsetX",
			"type" : "range",
			"min" : 0,
			"max" : 10,
			"step" : 1,
			"defaultValue" : 5,
			"action" : "input"
		}, {
			"label" : "Shadow Offset Y",
			"name" : "unselectedShadowOffsetY",
			"type" : "range",
			"min" : 0,
			"max" : 10,
			"step" : 1,
			"defaultValue" : 5,
			"action" : "input"
		}, {
			"label" : "Shadow Blur",
			"name" : "unselectedShadowBlur",
			"type" : "range",
			"min" : 0,
			"max" : 20,
			"step" : 1,
			"defaultValue" : 7,
			"action" : "input"
		}, {
			"label" : "Opacity",
			"name" : "unselectedOpacity",
			"type" : "range",
			"min" : 0,
			"max" : 1,
			"step" : 0.1,
			"defaultValue" : 0.9,
			"action" : "input"
		}]
	}, {
		"label" : "Text Position",
		"id" : "textPosition",
		"parameters" : [ {
			"label" : "Background Colour",
			"name" : "backgroundColour",
			"type" : "color",
			"defaultValue" : "#ffffff",
			"action" : "change"
		}, {
			"label" : "Position X",
			"name" : "textX",
			"type" : "range",
			"min" : 0,
			"max" : 800,
			"step" : 1,
			"defaultValue" : 20,
			"action" : "input"
		}, {
			"label" : "Position Y",
			"name" : "textY",
			"type" : "range",
			"min" : 0,
			"max" : 600,
			"step" : 1,
			"defaultValue" : 60,
			"action" : "input"
		}, {
			"label" : "Width",
			"name" : "textWidth",
			"type" : "range",
			"min" : 0,
			"max" : 800,
			"step" : 1,
			"defaultValue" : 300,
			"action" : "input"
		}, {
			"label" : "Height",
			"name" : "textHeight",
			"type" : "range",
			"min" : 0,
			"max" : 600,
			"step" : 1,
			"defaultValue" : 300,
			"action" : "input"
		}, {
			"label" : "Shadow",
			"name" : "backgroundShadowShow",
			"type" : "checkbox",
			"defaultValue" : "checked",
			"action" : "input"
		}, {
			"label" : "Shadow Colour",
			"name" : "backgroundShadowColour",
			"type" : "color",
			"defaultValue" : "#F8F8FF",
			"action" : "input"
		}, {
			"label" : "Shadow Offset X",
			"name" : "backgroundShadowOffsetX",
			"type" : "range",
			"min" : 0,
			"max" : 10,
			"step" : 1,
			"defaultValue" : 5,
			"action" : "input"
		}, {
			"label" : "Shadow Offset Y",
			"name" : "backgroundOffsetY",
			"type" : "range",
			"min" : 0,
			"max" : 10,
			"step" : 1,
			"defaultValue" : 5,
			"action" : "input"
		}, {
			"label" : "Shadow Blur",
			"name" : "backgroundShadowBlur",
			"type" : "range",
			"min" : 0,
			"max" : 20,
			"step" : 1,
			"defaultValue" : 7,
			"action" : "input"
		}, {
			"label" : "Opacity",
			"name" : "backgroundOpacity",
			"type" : "range",
			"min" : 0,
			"max" : 1,
			"step" : 0.1,
			"defaultValue" : 0.3,
			"action" : "input"
		} ]
	} ]
};

function initialiseParameters() {
	var groups = parameterInitialiser.groups;

	var html = "";

	// Create the html objects
	for (var i = 0; i < groups.length; i++) {
		html += createParameterGroup(groups[i]);
	}
	$('#controls').html($('#controls').html() + html);

	// Bind the events
	for (var i = 0; i < groups.length; i++) {
		createParameterGroupEvents(groups[i]);
	}
	createOtherEventListeners();

	// Collapse to start
	for (var i = 0; i < groups.length; i++) {
		$('#' + groups[i].id + '_content').hide();
	}

	$('#fontSelect').on('change', function() {
		parameterValues.fontFamily = this.value;
		drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
	});

	loadParametersFromFile();
}

function createParameterGroup(parameterGroup) {
	var parameters;
	var html = ""
	html += "<div>";
	html += "<p id='" + parameterGroup.id
			+ "_title' class='parameterGroupLabel'>" + parameterGroup.label
			+ "</p>";
	html += "<div id='" + parameterGroup.id + "_content'>";
	for (var i = 0; i < parameterGroup.parameters.length; i++) {
		parameters = parameterGroup.parameters[i];
		html += "<div>";
		html += createHtmlObject(parameters.label, parameters.name,
				parameters.type, parameters.defaultValue, parameters.min,
				parameters.max, parameters.step, parameters.options);
		html += "</div>";

		// Set the default value
		parameterValues[parameters.name] = parameters.defaultValue;
	}
	html += "</div>";
	html += "</div>";
	return html;
}

function createParameterGroupEvents(parameterGroup) {
	$('#' + parameterGroup.id + '_title').on('click', function() {
		$('#' + parameterGroup.id + '_content').toggle("slow", function() {
			// Animation complete.
		});
		console.log("Hid: " + parameterGroup.id + '_content');
	})

	var parameters;
	for (var i = 0; i < parameterGroup.parameters.length; i++) {
		parameters = parameterGroup.parameters[i];
		createEventListener(parameters.name, parameters.action, parameters.type);
	}
}

function createEventListener(parameterName, action, type) {
	if (type == "range" || type == "color") {
		$('#' + parameterName).on(action, function() {
			parameterValues[parameterName] = this.value;
			drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
		})
	} else if (type == "checkbox") {
		$('#' + parameterName).on(action, function() {
			parameterValues[parameterName] = this.checked;
			drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
		})
	} else if (type == "file") {
		// handled separately
	} else if (type == "select") {

		$('#' + parameterName).on(action, function() {
			console.log("Changed to:" + this.value);
			parameterValues[parameterName] = this.value;
			drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
		})

	}
}

function createOtherEventListeners() {
	$('#' + 'backgroundImage').on('change', function() {

		var files = !!this.files ? this.files : [];
		if (!files.length || !window.FileReader)
			return;
		if (/^image/.test(files[0].type)) {
			var reader = new FileReader();
			reader.readAsDataURL(files[0]);
			parameterValues['backgroundImage'] = files[0].name;
			reader.onloadend = function() {
				setBackgroundImage(this.result, 800, 600);
			}
		}

		uploadFile();

		drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
	})

	$('#' + 'printParameters').on('click', function() {
		console.log(parameterValues);
	})
	$('#' + 'recordParameters').on('click', function() {
		createParameterSnapshot();
	})
	$('#' + 'applyParameters').on('click', function() {
		var parameterSnapshot = parameterSnapshots.snapshots[0];
		loadParameterSnapshot(parameterSnapshot);
	})
	$('#' + 'loadParameters').on('click', function() {
		loadParametersFromFile();
	})
}

function loadParametersFromFile() {
	$.getJSON("resources/videoScripts/test.json", function(data) {
		console.log(data);
		loadParameterSnapshot(data.snapshots[0]);
	});
}

var parameterSnapshotId = 0;

function loadParameterSnapshot(parameterSnapshot) {
	for ( var key in parameterSnapshot.parameterValues) {
		if (key == "backgroundImage") {
			setBackgroundImage('./images/'
					+ parameterSnapshot.parameterValues[key], 800, 600);
		} else {
			$('#' + key).val(parameterSnapshot.parameterValues[key]);
			$('#' + key).trigger('input');
		}
	}
}

function setBackgroundImage(imageUrl) {

	imageURL = BACKGROUND_IMAGE_LOCATION + imageUrl;
	$("#backgroundImageContainer").css("background-image",
			"url(" + imageUrl + ")");

}

function createParameterSnapshot() {
	var newSnapshot = {};
	for ( var key in parameterValues) {
		console.log("Settingz: " + key + " to " + parameterValues[key]);
		newSnapshot[key] = parameterValues[key];
	}
	parameterSnapshots.snapshots.push({
		id : parameterSnapshotId,
		parameterValues : newSnapshot
	});
	console.log(parameterSnapshots);
	download(JSON.stringify(parameterSnapshots), 'test.json',
			'application/json');
	parameterSnapshotId++;
}

function download(text, name, type) {
	var a = document.createElement("a");
	var file = new Blob([ text ], {
		type : type
	});
	a.href = URL.createObjectURL(file);
	a.download = name;
	a.click();
}

function createHtmlObject(parameterLabel, parameterName, parameterType,
		parameterValue, parameterMin, parameterMax, parameterStep,
		parameterOptions) {
	var html = "";
	html += parameterLabel + " ";
	if (parameterType == "color") {
		html += "<input type='color' id='" + parameterName + "' name='"
				+ parameterName + "' value='" + parameterValue + "'></input>";
	} else if (parameterType == "range") {
		html += "<input type='range' id='" + parameterName + "' name='"
				+ parameterName + "' value='" + parameterValue + "' min='"
				+ parameterMin + "' max='" + parameterMax + "' step='"
				+ parameterStep + "'></input>";
	} else if (parameterType == "checkbox") {
		html += "<input type='checkbox' id='" + parameterName + "' name='"
				+ parameterName + "' value='" + parameterValue + "' "
				+ parameterValue + "></input>";
	} else if (parameterType == "file") {

		html += "<form enctype='multipart/form-data'>"
		html += "<input type='file' id='" + parameterName + "' name='"
				+ parameterName + "' value='" + parameterValue + "' "
				+ parameterValue + " accept='image/*'></input>";
		html += "</form>"
	} else if (parameterType == "select") {
		html += "<select id='" + parameterName + "' name='" + parameterName
				+ "'>";
		for ( var key in parameterOptions) {
			html += "<option value='" + key + "'>" + parameterOptions[key]
					+ "</option>";
		}
		html += "</select>";
	}
	return html;
}

function uploadFile() {
	var xhr = new XMLHttpRequest();
	xhr.open('POST', './FileReceiver');
	xhr.onload = function(progressEvent) {
		if (progressEvent.target.response == "ERROR") {
			console.log("Some sort of error occurred");
		} else {
			console.log(progressEvent.target.response);
			parameterValues['backgroundImage'] = progressEvent.target.response;
		}
	};
	xhr.onerror = function(event) {
		console.log("Ahh");
	};
	xhr.upload.onprogress = function(event) {
		if (event.lengthComputable) {
			var complete = (event.loaded / event.total * 100 | 0);
			console.log(complete);
		}
	}
	xhr.send(new FormData($('form')[0]));
}
