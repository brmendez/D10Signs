$(window).load(function() {
	$('.flexslider').flexslider({
	    slideshowSpeed: 3500
	});
});

function submitForm(form) {
	// var $form = $('form');

	// if (!$form.valid()) {return console.log('form not valid!')}

	var ajaxReqVars = {
		name: form.name.value
	  , email: form.email.value
	  , phone: form.phone.value ? form.phone.value : false
	  , subject: $('#contact input[name="subject"]').val()
	  , message: $('#contact textarea[name="message"]').val()
	}

	$.ajax({
	  method: "POST",
	  url: "php/contact.php",
	  data: ajaxReqVars
	});

	console.log(ajaxReqVars);
}

function runJqueryValidate() {
	$('#contact').validate({
		rules: {
			phone: {
				phoneUS: true // additional-methods.min.js required
			},
			email: {
				required: true
			  , email: true
			},
			name: {
				required: true
			  // , minlength: 2
			}
		},
		messages: {
			subject: 'Please enter a subject'
		  , message: 'Please enter a message'
		},

        submitHandler: function (form) { 

        	// if (form.valid()) { 
        	// 	console.log('form is valid') 
        	// }
        	submitForm(form);

            return false;
        }
	});
}


$(function() {
	$('#header').load('header.html');
	$('.footer-row').load('footer.html');

	runJqueryValidate();

    // $('#contact-submit').click(function(e) {
    	// submitForm();
        // e.preventDefault();
    // });

});