$(document).ready(() => {

console.log('bacon')

	var innerBox = document.querySelector('#mainItem');
	var container = document.querySelector('#contentContainer');




	container.addEventListener('click', getClickPosition, false);

	function getClickPosition(e) {
		var xPosition = e.clientX -(innerBox.offsetWidth /2);
		var yPosition = e.clientY -(innerBox.offsetWidth /2);

		var translate3dValue = "translate3d(" + xPosition + "px," + yPosition + "px, 0)";
		innerBox.style.transform = translate3dValue;
	}

})



	