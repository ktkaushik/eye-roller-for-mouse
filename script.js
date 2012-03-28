document.onmousemove = moveHandler;

function moveHandler(evt) {
	if (!evt) {
		evt = window.event;
	};
	animateEyes( evt.clientX , evt.clientY );
}

function animateEyes ( xPos , yPos ) {
	var rightEye = document.getElementById('reye');
	var leftEye = document.getElementById('leye');
	var rightEyeball = document.getElementById('rdot').style;
	var leftEyeball = document.getElementById('ldot').style;

	leftEyeball.left = newEyeballPos( xPos , leftEye.offsetLeft );
	leftEyeball.top = newEyeballPos( yPos , leftEye.offsetTop );
	rightEyeball.left = newEyeballPos( xPos , rightEye.offsetLeft);
	rightEyeball.top = newEyeballPos( yPos , rightEye.offsetTop);
}

function newEyeballPos ( currentPos , eyePos ) {
	return Math.min(Math.max( currentPos , eyePos + 3 ) , eyePos + 17) + "px";
}