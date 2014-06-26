$(document).on('ready', function() {
  $("#button1").on('click', function(){
  	// console.log("You clicked the wrong damn button!");
  	$("body").append("<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>");
  })  
  $("#button2").on('click', function(){
  	$("body").append("<ul><li>Lorem ipsum dolor sit amet</li><li>consectetur adipisicing elit.</li><li>NO MORE LATIN</li></ul>");
  })
});