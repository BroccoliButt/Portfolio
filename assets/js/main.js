var main = function() {

	/* Hide navigation to start */	
	$('.navigation').hide();
	
	/* Toggle navigation when menu is pressed */		
    $('.fa-bars').click(function() {
	    $('.navigation').fadeToggle(200);
		$('.menu').toggleClass('fa-bars');
		$('.menu').toggleClass('fa-times');	
  	});
	
	$('li').click(function(){
		$('.navigation').fadeOut(200);
		$('.menu').removeClass('fa-times');
		$('.menu').addClass('fa-bars');
	});

	/* Work section: display work title when hover over cover image */
	$('.fade-box').mouseenter(function() {
		$(this).children().css('opacity', '1');
	});
	$('.fade-box').mouseleave(function() {
		$(this).children().css('opacity', '0');
	});

	
	/* hide footer until reach bottom */	
	$(window).scroll(function(){
		if ($(window).scrollTop() >= 700) {
			$("footer").css('opacity', '1');
		}
		if ($(window).scrollTop() <= 700) {
			$("footer").css('opacity', '0');
		}
	});
	
	/* Replace with retina photos for retina screens */
	$(function () {
		if (window.devicePixelRatio == 2) {
			var images = $('img.hi-res');
			
			for(var i = 0; i < images.length; i++) {
				var imageType = images[i].src.substr(-4);
				var imageName = images[i].src.substr(0, images[i].src.length - 4);
				imageName += "@2x" + imageType;
				
				images[i].src = imageName;
			}
		}
	});
	
	/* Make post project photos responsive */
	$('.project-photos img').addClass('img-responsive');
	
	
	/* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('img').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight()/3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},400);
                    
            }
            
        }); 
    });

	
};


$(document).ready(main);