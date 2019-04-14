var btn = document.getElementById('btn');
var content = document.getElementById('content');

var speech = new webkitSpeechRecognition();
var isRun = false;
var isEnable = false;

(function() {

	"use strict";

	speech.lang = "ja";

	navigator.mediaDevices.getUserMedia({
		audio: true,
		video: false
	}).then(_handleSuccess).catch(_handleError);

	function _handleSuccess(stream) {
		btn.addEventListener("click", () => {
			_handleClick(stream);
		}, false);
	}

	function _handleError() {
		alert("Error!");
	}

	function _handleClick(stream) {
		isEnable = true;
	}
})();


btn.addEventListener( 'click' , function() {
	if (!(isEnable)) return;

	if (isRun) {
		speech.stop();
		return;
	}

	isRun = true;
	speech.start();
	document.getElementById('on_se').play();
	document.getElementById("switch").src = "./contents/on.png";
});

speech.addEventListener( 'result' , function( e ) {
	if (!(isEnable)) return;
	
	var text = e.results[0][0].transcript;
	document.getElementById('off_se').play();
	document.getElementById("switch").src = "./contents/off.png";

	if (text) {
		content.innerText += e.results[0][0].transcript;
		content.innerHTML += "<br />";
	}

	isRun = false;

});

speech.addEventListener("end", function() {
	if (!(isEnable)) return;
	
	document.getElementById('off_se').play();
	document.getElementById("switch").src = "./contents/off.png";
	isRun = false;
});
