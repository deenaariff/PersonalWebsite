// NAVIGATION ANIMATED SCROLL

console.log("Navigation Scroll initialized")

$(document).ready(function(){
	$('a').click(function(){
   		$('html, body').animate({
    		scrollTop: $( $(this).attr('href') ).offset().top - $('#nav').height()
    	}, 1000);
    	return false;
	});
});