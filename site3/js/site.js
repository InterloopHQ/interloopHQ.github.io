	/*----------------------------------------------------*/
  	/* Flexslider
  	/*----------------------------------------------------*/
  	$(window).load(function() {

  	 var headlineArray = [
  	 		"Win More Deals, Faster.",
		    "Achieve Consistent Sales Performance",
		    "Align Sales & Marketing Intelligently",
		    "Turn Insights into Action",
		    "Right Message, Right Person, Right Time"
		];

		var randomHeadline = headlineArray[Math.floor(Math.random()*headlineArray.length)];

		$('#headline').text(randomHeadline);


   /*---------------------------------------------------- */
   /* ajaxchimp
	------------------------------------------------------ */

	// Example MailChimp url: http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
	var mailChimpURL = 'http://interloop.us13.list-manage1.com/subscribe/post?u=917c11a250689c31934464f46&amp;id=d09360ac8b';

	$('#mc-form').ajaxChimp({

	   language: 'es',
	   url: mailChimpURL

	});

	// Mailchimp translation
	//
	//  Defaults:
	//	 'submit': 'Submitting...',
	//  0: 'We have sent you a confirmation email',
	//  1: 'Please enter a value',
	//  2: 'An email address must contain a single @',
	//  3: 'The domain portion of the email address is invalid (the portion after the @: )',
	//  4: 'The username portion of the email address is invalid (the portion before the @: )',
	//  5: 'This email address looks fake or invalid. Please enter a real email address'

	$.ajaxChimp.translations.es = {
	  'submit': 'Submitting...',
	  0: '<i class="fa fa-check"></i> We have sent you a confirmation email',
	  1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
	  2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
	};

});

