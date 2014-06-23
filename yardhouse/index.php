<?php
$page_id = 9;
$page_title = 'Yard House';
$body_class = 'page-yard-house';
$google_UA = 'UA-50925626-9'
?>
<?php include $_SERVER['DOCUMENT_ROOT'].'/assets/views/header.php'; ?>

  <section id="main" class="main">
    <div class="wrapper cf">
  		
  		<form action="">

        <div class="form-item">
          <div class="form-question-count">
            <div class="question-number">01</div>
            <div class="question-total">(of 3)</div>
          </div>
          <div class="icon-circle-1"></div>
          <p class="form-question">When was the last time you visited Yard House?</p>
          <div class="form-answers">
            <div class="form-group">
          		<div class="form-radio">
          		  <input type="radio" name="question_1" id="past-month" value="Past Month">
          		  <label for="past-month"><span>Within the past month</span></label>
          		</div>
          		<div class="form-radio">
          		  <input type="radio" name="question_1" id="six-months" value="Six Months">
          		  <label for="six-months"><span>Within the past 6 months</span></label>
          		</div>
          		<div class="form-radio">
          		  <input type="radio" name="question_1" id="past-year" value="Past Year">
          		  <label for="past-year"><span>Within the past year</span></label>
          		</div>
          		<div class="form-radio">
          		  <input type="radio" name="question_1" id="more-than" value="More Than a Year">
          		  <label for="more-than"><span>More than a year ago</span></label>
          		</div>
          		<div class="form-radio">
          		  <input type="radio" name="question_1" id="never" value="Never">
          		  <label for="never"><span>Never</span></label>
          		</div>
            </div>
        		<div class="answer-complete"><span class="icon-checkmark"></span></div>
          </div>
        </div>

        <div class="form-item">
          <div class="form-question-count">
            <div class="question-number">02</div>
            <div class="question-total">(of 3)</div>
          </div>
          <div class="icon-circle-2"></div>
          <p class="form-question">Have you talked about your last experience at a Yard House restaurant with a friend, family member or online (e.g. Facebook)?</p>
          <div class="form-answers form-two-options">
            <div class="form-group">
          		<div class="form-radio">
                <input type="radio" name="question_2" id="q2-yes" value="Yes">
          		  <label for="q2-yes"><span>Yes</span></label>
          		</div>
          		<div class="form-radio">
                <input type="radio" name="question_2" id="q2-no" value="No">
          		  <label for="q2-no"><span>No</span></label>
          		</div>
          		<div class="answer-complete"><span class="icon-checkmark"></span></div>
            </div>
          </div>
        </div>

        <div class="form-item">
          <div class="form-question-count">
            <div class="question-number">03</div>
            <div class="question-total">(of 3)</div>
          </div>
          <div class="icon-circle-3"></div>
          <p class="form-question">Have you recently recommended Yard House to a friend or family member?</p>
          <div class="form-answers form-two-options">
            <div class="form-group">
          		<div class="form-radio">
                <input type="radio" name="question_3" id="q3-yes" value="Yes">
          		  <label for="q3-yes"><span>Yes</span></label>
          		</div>
          		<div class="form-radio">
                <input type="radio" name="question_3" id="q3-no" value="No">
          		  <label for="q3-no"><span>No</span></label>
          		</div>
          		<div class="answer-complete"><span class="icon-checkmark"></span></div>
            </div>
          </div>
        </div>
				
        <input type="hidden" name="page_id" value="<?php echo $page_id; ?>">
        <input type="hidden" name="user_ip" value="<?php echo getIp(); ?>">
        
        <div class="form-footer">
          <div class="form-message">
            <p>That's it!</p>
          </div>
          <button class="btn">Submit <span class="icon-arrow"></span></button>
        </div>
        
      </form>
  		
    </div>
  </section>

<?php include $_SERVER['DOCUMENT_ROOT'].'/assets/views/footer.php'; ?>