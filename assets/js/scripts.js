$(function(){

  // Event Tracking
  function eventTracking() {
    $('.btn').on('click', function() {
      ga('send', 'event', 'button', 'click', 'submit-button');
    });
    $('input[type="radio"]').change(function() {
      var radioValue = $(this).val();
      var radioName = $(this).attr('name');
      var questionIndex = $(this).closest('.form-item').index();
      var questinNumber = questionIndex + 1;
      var questinLabel = 'Q' + questinNumber;
      var eventLabel = questinLabel + ' ' + radioValue;
      ga('send', 'event', radioName, 'click', eventLabel);
      //console.log(eventLabel);
    });
  }

  function radioCheck() {
    $('input[type="radio"]').change(function() {
      $(this).parent().parent().parent().find('.answer-complete').delay(500).fadeIn(500);
    });
  }

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
            $(this).find('.icon-error-white').remove();
      		}
  		});

  		if(errorcount > 0) {
  		  function formValid() {
    		  var formMessage = $('.form-message p');
    		  $(formMessage).parent().addClass('error-message');
          $(formMessage).text(' Please answer all questions');
          $(formMessage).prepend('<span class="icon-error-grey"></span>');
  		  }
  		  formValid();
  		}
    		
  		if(errorcount == 0) {
  
      		// prevent multiple form submissions
      		$(this).find('button').prop('disabled', 'disabled').html('Send...');
      
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
  
  eventTracking();
  radioCheck();
  formSubmit();

});