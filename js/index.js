$(window).load(function() {
	$('.flexslider').flexslider({
	    slideshowSpeed: 3500
	});
});

 


function showSlide(slide) {

	// http://stackoverflow.com/questions/5899783/detect-safari-using-jquery
    var is_chrome = navigator.userAgent.indexOf('Chrome') > -1
	, is_safari = navigator.userAgent.indexOf('Safari') > -1
	, is_firefox = navigator.userAgent.indexOf('Firefox') > -1
	, is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
	if ((is_chrome)&&(is_safari)) {is_safari=false;}
    if ((is_chrome)&&(is_opera)) {is_chrome=false;}


	// console.log(slide);
	let index = slide.index('a')
	, slides = []
	, pswpElement = document.querySelectorAll('.pswp')[0];

	if (is_firefox || is_safari)  {index = (index - 11)};
	if (is_chrome) {index = (index - 5)};

	// console.log(index);

	$('.gallery a').each(function(i,v) {

		var image = new Image();
		var imgSrc = $(this).css('background-image').replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
		// example: file:///Users/brianmendez/Desktop/Code/D10/assets/img/chiefsealth.jpg

    	image.src = imgSrc;

    	var width = image.width
		, height = image.height;

		var setSize = $(this).attr('data-size', width + 'x' + height );
		var size = $(this).attr('data-size').split('x')
		// , src = $(this).children().attr('src');


        // build slide objects
		imgObj = {
			'src' : v.href	
		  // , 'msrc' : src //not using thumbnail, using <a> element w/ background image
		  , w : parseInt(size[0], 10)
		  , h : parseInt(size[1], 10)
		  // , title : 'no caption'
		}

		slides.push(imgObj);
	});

	var options = {


	    // optionName: 'option value'
	    index: index
	    // index: index-5  // start at selected slide TODO: fix this. look into jquery this
	    				// Chrome -5, safari -11 ??
	};

	console.log('obj', options.index);

	// Initializes and opens PhotoSwipe
	var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, slides, options);
	gallery.init();

	// gallery.goTo(index);
}


$(function() {
	$('#header').load('header.html');
	$('.footer-row').load('footer.html');

	$('.gallery a').click(function(e) {
		e.preventDefault();
		showSlide($(this));
	});

});