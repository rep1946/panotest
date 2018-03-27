console.log('connected!')

// Let's get cooking!

$(document).ready(() => {
	


var imagePos = document.querySelector('#pano_image');
var panContainer = document.querySelector('.panorama');


// $( ".panorama" ).mousemove(function( event ) {
// 	// var x = event.screenX;
// 	// var y = event.screenY;
// 		  // var msg = "Handler for .mousemove() called at ";
// 		  // msg += event.pageX + ", " + event.pageY;
// 		$('#pano_image').css('backgroundPosition', function(e));
// });

	document.addEventListener('mousemove', getMousePosition, false)

		function getMousePosition(e) {
			var panContainerPosition = getPosition(panContainer);
			var x = e.clientX - panContainerPosition.x -(imagePos.offsetWidth /2);
			var y = e.clientY - panContainerPosition.y -(imagePos.offsetHeight /2);

			// imagePos.style.backgroundPosition = x + "px";
			// imagePos.style.backgroundPosition = y + "px";

		var translate3dValue = "translate3d(" + x + "px," + y + "px, 0)";
		panContainer.style.transform = translate3dValue;
				  
			// $(imagePos).css('backgroundPosition', x, y);

			  console.log(e)
			  

		}
		


// Take in to account browser padding, scroll bars, from Kirupa
// https://www.kirupa.com/snippets/move_element_to_click_position.htm

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




	// document.getElementById('pano_image')removeEventListener('click', stopScroll, false)
		// function stopScroll() {
		// 	imagePos.style.backgroundPosition = x + "px";
		// 	imagePos.style.backgroundPosition = y + "px";
		// 	$(imagePos).removeProp('transform');
		// 	$(imagePos).removeProp('transition');
		// }

// closing doc ready tag
})




// $(document).ready(() => {

// console.log('bacon')

// 	var innerBox = document.querySelector('#mainItem');
// 	var container = document.querySelector('#contentContainer');




// 	container.addEventListener('click', getClickPosition, false);

// 	function getClickPosition(e) {
// 		var containerPosition = getPosition(container);
// 		var xPosition = e.clientX -(innerBox.offsetWidth /2);
// 		var yPosition = e.clientY -(innerBox.offsetWidth /2);

// 		var translate3dValue = "translate3d(" + xPosition + "px," + yPosition + "px, 0)";
// 		innerBox.style.transform = translate3dValue;
// 	}



	

