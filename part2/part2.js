// PART II
$(document).on('ready', function() {
	$("p").on('mouseover', function(){
		$("p").css('color', 'pink');
	})
	$("h1").append('!');
	$("a").on('click', function() {
		var r = confirm('Are sure you want to go down this road?');
		if (r===false){
			$(this).remove();
			return false;
		}
	})
});
