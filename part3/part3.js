$(document).on('ready', function() {
  $(".button-giant").on('click', function(){
  	$('.container').append('<div class="popup">This is a Popup!</div>');
  	$('.popup').append('<div class="close-popup">X</div>');
  	$('.close-popup').on('click', function(){
  		$('.popup').remove();
  	})
  });
});