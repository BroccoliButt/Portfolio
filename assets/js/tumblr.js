var main = function() {

    /* PAGINATION STUFF -- display correct posts based on which page number is in URL */

        /* Next and Previous page <a> tags */
        var nextPage = document.getElementById("nextPage");
		var prevPage = document.getElementById("prevPage");

        /* Next and Previous page buttons <li> */		
        var prevButton = document.getElementsByClassName("previous");	
        var nextButton = document.getElementsByClassName("next");

        /* Get current URL */
        var url = window.location.href;
	
        /* Extract which page number is in the URL */		
        var subURL = url.substring(url.indexOf('#')-1);
        var currentPage = subURL.charAt(0);

        /* Change which post to start reading from in JSON file */		
        var startingPoint = currentPage * 3 - 3;



        /* FUNCTIONS */

            /* next button adds 1 to current page # */
            function nextPageLoad() {
                nextPage.onclick = function() {
                    currentPage++;
                    this.href="?page=" + currentPage + "#feed";
                };
            };

            /* previous button subtracts 1 from current page # */
            function prevPageLoad() {
                prevPage.onclick = function() {
                    currentPage--;
                    this.href="?page=" + currentPage + "#feed";
                }
            }



		/*
        * If  you're on page 2, remove "page" from previous link.
        * This is so previous button is disabled again.
        */
            
		if(url.indexOf("page=2#") > -1){
			prevPage.onclick = function() {
				this.href="photo-journal.html#feed"
			}
			
			nextPageLoad();
		
        } else {
			
			/* Call correct hrefs for next and previous buttons */
			if(url.indexOf("page") > -1) {
				
                nextPageLoad();
				prevPageLoad();
    
			} else {

			    /* For the first page only */    
				nextPage.onclick = function() {
		    		this.href="?page=2#feed"
		    	};
				$(prevButton).addClass("disabled");
		    };

        };


	

	/* Link to JSON file to read feed from. Num is how many posts to display */
	var tumblrURL = "https://broccolibutt.tumblr.com/api/read/json?num=3&start=" + startingPoint;
	
	
	
	
	/* SHOW POSTS */
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


