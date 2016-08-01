var main = function() {


	if(window.location.href.indexOf("page") > -1) {
		var currentPage = 0;
		var k = currentpage + 3;
    };
	

	var tumblrURL = "https://broccolibutt.tumblr.com/api/read/json?num=3&start=" + k;
	
	
	/* Link tumblr JSON file */
	$.getScript(tumblrURL, function(jd) {      
   
		/* Read JSON file and loop through posts */
		for (var i=0;i<tumblr_api_read.posts.length;i++) {
		    var thisPost = tumblr_api_read.posts[i];
		
			/* Show date numbers only */
			var dateFull = thisPost["date-gmt"];
			var date = "<div class='date'>" + dateFull.slice(5,7) + " . " + dateFull.slice(8,10) + " . " + dateFull.slice(2,4) + "</div>";
		
			/* Add styles to caption */		
			var postCaption = "<div class='post-caption col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2'>" + thisPost["photo-caption"] + "<hr>" + "</div>";

			/* Show post photo */
		    $('#tumblrFeed').append("<img src='" + thisPost["photo-url-1280"] + "'>");

			/* For posts with multiple photos */
			for (var j=1;j<thisPost.photos.length;j++){
				var photoSet=thisPost.photos[j];
			    $('#tumblrFeed').append("<img src='" + photoSet["photo-url-1280"] + "'>");
			};
		
			/* Show post date and caption */		
		    $('#tumblrFeed').append(date + postCaption);
		
			/* Make post photos responsive */
			$('img').addClass('img-responsive');
		
		};
	});
};

$(document).ready(main);


