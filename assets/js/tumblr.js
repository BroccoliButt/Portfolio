var main = function() {
	
	/* Get tumblr feed */

	for (var i=0;i<tumblr_api_read.posts.length;i++) {
	    var thisPost = tumblr_api_read.posts[i];
		
	/* Show short date only */
		var dateTime = thisPost["date"];
		var date = "<div class='date'>" + dateTime.slice(5,13) + "</div>";
		var postCaption = "<div class='post-caption col-sm-6 col-sm-offset-3'>" + thisPost["photo-caption"] + "</div>"

	/* Show post photo + date + caption */
	    $('#tumblog').append("<img src='" + thisPost["photo-url-1280"] + "'>" + date + postCaption);

	/* Make post photos responsive */
		$('img').addClass('img-responsive');

	};
	
};
	


$(document).ready(main);


