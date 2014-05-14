$(function(){

  // Form Validation / Submission
	function formSubmit() {
  	$('form').submit(function(e) {
  		// prevent standard form submission
  		e.preventDefault();
  
  		var errorcount = 0;
  		var formItem = $('.form-item');
  		
  		$(formItem).each(function() {
  		    var radioChecked = $(this).find('input[type="radio"]:checked');
  		    var errorIcon = $('<div class="icon-error-white"><div>');
      		if(radioChecked.length == 0) {
            $(this).addClass('error');
            $(this).append(errorIcon);
            errorcount++;
      		} else if(radioChecked.length > 0) {
            $(this).removeClass('error');
      		}
  		});
  		
  		if(errorcount > 0) {
  		  function qNumber(errorItem) {
    		  var a = []
    		  var formMessage = $('.form-message p');
  		    var errorItem = $('.error');
    		  for (var i = 0; i < errorItem.length; i++) {
      		  a.push('#' + (i+1));
    		  }
          $(formMessage).text(' Please answer ').append(a.join(', '));
          $(formMessage).prepend('<span class="icon-error-grey"></span>');
  		  }
  		  qNumber();
  		}
  		
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