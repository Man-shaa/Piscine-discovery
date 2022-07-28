function random_bg_color() {
	var x = Math.floor(Math.random() * 256);
	var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);
	var bgColor = "rgb(" + x + ", " + y + ", " + z + ")";
	console.log(bgColor);
	document.body.style.background = bgColor;
}

function addListener(element, eventName, handler) {
	if (element.addEventListener) {
	  element.addEventListener(eventName, handler, false);
	}
	else if (element.attachEvent) {
	  element.attachEvent('on' + eventName, handler);
	}
	else {
	  element['on' + eventName] = handler;
	}
}

window.onload=function() {
	addListener(document.getElementById('button'), 'click', random_bg_color);
}
