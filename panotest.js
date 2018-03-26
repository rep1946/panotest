console.log('connected!')




$( ".panorama" ).mousemove(function( event ) {
	// var x = event.screenX;
	// var y = event.screenY;
		  // var msg = "Handler for .mousemove() called at ";
		  // msg += event.pageX + ", " + event.pageY;
		$('#pano_image').css('backgroundPosition', function(e));
});

document.addEventListener('mousemove', function(e) {
// var imagePos = document.querySelector('#pano_image');
// var panContainer = document.querySelector('.panorama')
	var x = event.screenX;
	var y = event.screenY;

	  
$imagePos.css('backgroundPosition', (e));

  console.log(e)
  

})


