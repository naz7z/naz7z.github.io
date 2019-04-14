var btn = document.getElementById('btn');
var content = document.getElementById('content');

//音声認識APIの使用
var speech = new webkitSpeechRecognition();
var isRun = false;

//言語を日本語に設定
speech.lang = "ja";


(function() {

	"use strict";

	const btn = document.getElementById("btn");

	navigator.mediaDevices.getUserMedia({
		audio: true,
		video: false
	}).then(_handleSuccess).catch(_handleError);

	function _handleSuccess(stream) {
		btn.addEventListener( 'click' , function() {
			if (isRun) {
				speech.stop();
				return;
			}

			isRun = true;
			speech.start();
			document.getElementById('on_se').play();
			document.getElementById("switch").src = "./contents/on.png";
		});
	}

	function _handleError() {
		alert("マイク入力を許可して下さい!");
	}

})();

speech.addEventListener( 'result' , function( e ) {

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
	document.getElementById('off_se').play();
	document.getElementById("switch").src = "./contents/off.png";
	isRun = false;
});