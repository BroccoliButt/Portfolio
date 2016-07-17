var main = function() {
	
	/* Get tumblr feed */

	for (var i=0;i<tumblr_api_read.posts.length;i++) {
	    var thisPost = tumblr_api_read.posts[i];
		
	/* Show date numbers only */
		var dateFull = thisPost["date-gmt"];
		var date = "<div class='date'>" + dateFull.slice(5,7) + " . " + dateFull.slice(8,10) + " . " + dateFull.slice(2,4) + "</div>";
		
	/* Add styles to caption */		
		var postCaption = "<div class='post-caption col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2'>" + thisPost["photo-caption"] + "<hr>" + "</div>";

	/* Show post photo + date + caption */
	    $('#tumblog').append("<img src='" + thisPost["photo-url-1280"] + "'>" + date + postCaption);

	/* Make post photos responsive */
		$('img').addClass('img-responsive');

	};
	
};
	


$(document).ready(main);


