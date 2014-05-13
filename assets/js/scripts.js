$(function(){

  // Form Validation / Submission
	function formSubmit() {
  	$('form').submit(function(e) {
  		// prevent standard form submission
  		e.preventDefault();
  
  		var errorcount = 0;
  		
  		$('.form-item').each(function() {
  		    var radioChecked = $(this).find('input[type="radio"]:checked');
  		    var errorIcon = $('<div class="icon-error-white"><div>');
  		    var formMessage = $('.form-message');
      		if(radioChecked.length == 0) {
            $(this).addClass('error');
            $(this).append(errorIcon);
            $(formMessage).html('<p><span class="icon-error-grey"></span> Please answer </p>');
            errorcount++;
      		} else if(radioChecked.length > 0) {
            $(this).removeClass('error');
      		}
  		});
  		
  		if(errorcount == 0) {
  
      		// prevent multiple form submissions
      		$(this).find('button').prop('disabled', 'disabled').html('Please wait...');
      
      		var question_1 = $('input[name="question_1"]:checked').val();
      		var question_2 = $('input[name="question_2"]:checked').val();
      		var question_3 = $('input[name="question_3"]:checked').val();
      		var page_id = $('input[name="page_id"]').val();
      		var data = {
      			question_1: question_1,
      			question_2: question_2,
      			question_3: question_3,
      			page_id: page_id
      		}
      		$.post('/php/survey.php', data, function(response){
      			// do funky stuff here, like fade out the form and show a thank you message
      			$('.modal-thank-you').fadeIn(600);
      		});  		
  		}
  
  	});
  }
  
  
	$('.error').each(function() {
	   if ($(this).find('input:checked')) {
       $(this).removeClass('error');
	   }
	});

  formSubmit();
  

});