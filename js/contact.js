function submitForm(form) {
	// var $form = $('form');

	// if (!$form.valid()) {return console.log('form not valid!')}

	// $('#contact').validate({
 //    	// rules: {
 //    	// 	name: 'required'
 //    	//   , subject: 'required'
 //    	//   , message: 'required'
 //    	// },

 //    	submitHandler: function() {
 //    		console.log('contact form done');
 //    	}
	// });

	var ajaxReqVars = {
		name: form.name.value
	  , email: form.email.value
	  , phone: form.phone.value ? form.phone.value : false
	  , subject: $('#contact input[name="subject"]').val()
	  , message: $('#contact textarea[name="message"]').val()
	}

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

            // alert('valid form submitted');
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