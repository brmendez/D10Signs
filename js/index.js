$(window).load(function() {
	$('.flexslider').flexslider({
	    slideshowSpeed: 3500
	});
});

function showSlide(slide) {
	let index = slide.index()
	, slides = [];

	var pswpElement = document.querySelectorAll('.pswp')[0];

	$('.gallery a').each(function(i,v) {
		var size = $(this).attr('data-size').split('x');

        // build array w/ slide objects
		imgObj = {};
		imgObj.src = v.href
		imgObj.msrc = $(this).children().attr('src'); //thumbnail picture
		imgObj.w = parseInt(size[0], 10);
		imgObj.h = parseInt(size[1], 10);
		imgObj.title = 'no caption';

		slides.push(imgObj);
	});

	var options = {
	    // optionName: 'option value'
	    index: index-1 // start at selected slide
	};

	// Initializes and opens PhotoSwipe
	var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, slides, options);
	gallery.init();
}


$(function() {
	// $('#header').load('header.html');
	// $('.footer-row').load('footer.html');

	$('.gallery a').click(function(e) {
		e.preventDefault();
		showSlide($(this));
	});

});