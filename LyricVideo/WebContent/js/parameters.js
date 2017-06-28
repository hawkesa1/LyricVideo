var fontFamily = "C rial";

// font
var fontSize = 40;
var lineSpacing = 40;

// selected font
var selectedFontColour = "#86fb75";
var selectedOpacity = 1;

// unselected font
var unselectedOpacity = 0.8;
var unselectedFontColour = "#ffffff";

// fontShadow
var shadowOffsetX = 5;
var shadowOffsetY = 5;
var shadowBlur = 7;
var shadowColour = "#000000";

var parameterValues = {}

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
			"label" : "Rotation",
			"name" : "backgroundImageRotation",
			"type" : "range",
			"min" : 0,
			"max" : 360,
			"step" : 1,
			"defaultValue" : 0,
			"action" : "input"

		}, {
			"label" : "Width",
			"name" : "backgroundImageWidth",
			"type" : "range",
			"min" : 0,
			"max" : 800,
			"step" : 1,
			"defaultValue" : 800,
			"action" : "input"

		}, {
			"label" : "Height",
			"name" : "backgroundImageHeight",
			"type" : "range",
			"min" : 0,
			"max" : 600,
			"step" : 1,
			"defaultValue" : 600,
			"action" : "input"

		} ]
	}, {
		"label" : "Selected Font Options",
		"id" : "selectedFontOptions",
		"parameters" : [ {
			"label" : "Font Colour",
			"name" : "selectedFontColour",
			"type" : "color",
			"defaultValue" : "#000000",
			"action" : "change"
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
			"action" : "change"
		}, {
			"label" : "Shadow Colour",
			"name" : "selectedShadowColour",
			"type" : "color",
			"defaultValue" : "#000000",
			"action" : "change"
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
			"action" : "change"
		}, {
			"label" : "Shadow",
			"name" : "unselectedShadowShow",
			"type" : "checkbox",
			"defaultValue" : "checked",
			"action" : "change"
		}, {
			"label" : "Shadow Colour",
			"name" : "unselectedShadowColour",
			"type" : "color",
			"defaultValue" : "#000000",
			"action" : "change"
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
		}, ]
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
			"action" : "change"
		}, {
			"label" : "Shadow Colour",
			"name" : "backgroundShadowColour",
			"type" : "color",
			"defaultValue" : "#F8F8FF",
			"action" : "change"
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
	parameterValues.fontFamily=fontFamily;
	
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
	})
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
				parameters.max, parameters.step);
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
			console.log(parameterName + " set to: " + this.value);
			drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
		})
	} else if (type == "checkbox") {
		$('#' + parameterName).on(action, function() {
			parameterValues[parameterName] = this.checked;
			console.log(parameterName + " set to: " + this.checked);
			drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
		})
	} else if (type == "file") {
		// handled separately
	}
}

function createOtherEventListeners() {
	$('#' + 'backgroundImage').on('change', function() {
		parameterValues['backgroundImage'] = this.value;
		var files = !!this.files ? this.files : [];
		if (!files.length || !window.FileReader)
			return;
		if (/^image/.test(files[0].type)) {
			var reader = new FileReader();
			reader.readAsDataURL(files[0]);
			reader.onloadend = function() {
				setBackgroundImage(this.result, 800, 600);
			}
		}
		console.log(parameterName + " set to: " + this.checked);
		drawIt1(ctx, (frameNumber / fps) * 1000, lyricsObject);
	})

	$('#' + 'printParameters').on('click', function() {
		console.log(parameterValues);
	})
}

function createHtmlObject(parameterLabel, parameterName, parameterType,
		parameterValue, parameterMin, parameterMax, parameterStep) {
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
		html += "<input type='file' id='" + parameterName + "' name='"
				+ parameterName + "' value='" + parameterValue + "' "
				+ parameterValue + " accept='image/*'></input>";
	}

	return html;
}
