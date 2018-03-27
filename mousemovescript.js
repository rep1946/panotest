$(document).ready(() => {

console.log('bacon')

	var innerBox = document.querySelector('#mainItem');
	var container = document.querySelector('#contentContainer');




	container.addEventListener('click', getClickPosition, false);

	function getClickPosition(e) {
		var containerPosition = getPosition(container);
		var xPosition = e.clientX -(innerBox.offsetWidth /2);
		var yPosition = e.clientY -(innerBox.offsetHeight /2);

		var translate3dValue = "translate3d(" + xPosition + "px," + yPosition + "px, 0)";
		innerBox.style.transform = translate3dValue;
	}



	function getPosition(el) {
	  var xPos = 0;
	  var yPos = 0;
	 
	  while (el) {
	    if (el.tagName == "BODY") {
	      // deal with browser quirks with body/window/document and page scroll
	      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
	      var yScroll = el.scrollTop || document.documentElement.scrollTop;
	 
	      xPos += (el.offsetLeft - xScroll + el.clientLeft);
	      yPos += (el.offsetTop - yScroll + el.clientTop);
	    } else {
	      // for all other non-BODY elements
	      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
	      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
	    }
	 
	    el = el.offsetParent;
	  }
	  return {
	    x: xPos,
	    y: yPos
	  };
	}

})



	