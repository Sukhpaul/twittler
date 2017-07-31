$(document).ready(function(){

function genTweetFromObject(tweet) {
  var $tweet = $('<div class="tweet"></div>');
  $($tweet).html('@<a href="#userTimeline" class="showTimeline ' + tweet.user + '">' + tweet.user + '</a>: ' + tweet.message + '<br><span class="createdAt">' + tweet.created_at + '</span>');
  return $tweet;
}

streams.users.you = [];

$("#sendTweet").click(function(){
	$("#newestTweets").html('');
	var yourTweets = {};
	yourTweets.user = 'you';
	yourTweets.message = $("#yourtext").val();
	yourTweets.created_at = new Date();
	streams.users.you.push(yourTweets);
	$(genTweetFromObject(streams.users.shawndrost[streams.users.shawndrost.length - 1])).appendTo("#newestTweets");
	$(genTweetFromObject(streams.users.sharksforcheap[streams.users.sharksforcheap.length - 1])).appendTo("#newestTweets");
	$(genTweetFromObject(streams.users.mracus[streams.users.mracus.length - 1])).appendTo("#newestTweets");
	$(genTweetFromObject(streams.users.douglascalhoun[streams.users.douglascalhoun.length - 1])).appendTo("#newestTweets");
	$(genTweetFromObject(streams.users.you[streams.users.you.length - 1])).prependTo("#newestTweets");
});

$('#genTweetBtn').click(function() {
  $("#newestTweets").html('');
  $(genTweetFromObject(streams.users.shawndrost[streams.users.shawndrost.length - 1])).appendTo("#newestTweets");
  $(genTweetFromObject(streams.users.sharksforcheap[streams.users.sharksforcheap.length - 1])).appendTo("#newestTweets");
  $(genTweetFromObject(streams.users.mracus[streams.users.mracus.length - 1])).appendTo("#newestTweets");
  $(genTweetFromObject(streams.users.douglascalhoun[streams.users.douglascalhoun.length - 1])).appendTo("#newestTweets");
  if(streams.users.you[streams.users.you.length - 1] !== undefined) {
    $(genTweetFromObject(streams.users.you[streams.users.you.length - 1])).prependTo("#newestTweets");
  }
});

$("#newestTweets").on('click', ".showTimeline", function() {
  $("#userTimeline").html("");
  $("#userTimeline").removeClass("hidden");
  var username = $(this).attr('class').split(' ')[1];
  streams.users[username].forEach(function(tweet) {
    genTweetFromObject(tweet).prependTo("#userTimeline");
  });
  var position = $(this).position().top + 60;
  console.log(position);
  $("#userTimeline").css("top", '' + position + 'px');
});

  $("body").on("dblclick", function() {
    if($("#userTimeline").attr('class') !== "hidden") {
      $("#userTimeline").attr("class", "hidden");
    }
  });

});