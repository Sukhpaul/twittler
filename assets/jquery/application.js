$(document).ready(function(){
 var $body = $('section .grid');
 $body.html('');

 var index = streams.home.length - 1;
  while(index >= 0){
   var tweet = streams.home[index];
   var $tweet = $('<div></div>');
   $tweet.text('@' + tweet.user + ': ' + tweet.message);
   $tweet.appendTo($body);
   index -= 1;
 }

});

$(document).ready(function() {
	$('row .grid').on('click', 'button', function() {
	$(this).find('tweet').slidedown();
	});

});