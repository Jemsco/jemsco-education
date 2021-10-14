var questionCounter = 0; //Tracks question number
var selections = []; //Array containing user choices
var quiz = $('#quiz'); //Quiz div object
var questions = "";
var prevClicked = false;
//var qParams = {
//	FunctionName : 'awsqna',
//	InvocationType : 'RequestResponse',
//	LogType : 'None'
//};

(function() {
	// Configure AWS SDK for JavaScript & set region and credentials
	// Initialize the Amazon Cognito credentials provider
	AWS.config.region = 'us-east-2'; // Region
	AWS.config.credentials = new AWS.CognitoIdentityCredentials({
		IdentityPoolId : 'us-east-2:0252e582-c492-40df-b720-a3a1ba98d507',
	});

	/// VARIABLES AND DATA MAP NEEDED ///
	$('#next').hide();
	$('#prev').hide();
	$('#start').show();
	$('#results').hide();

	function initiateQuestion() {
		
		/// Prepare to call Lambda function
		lambda = new AWS.Lambda({
			region : 'us-east-2',
			apiVersion : '2015-03-31'
		});
		// Call the Lambda function to collect the results
		lambda.invoke(qParams, function(err, data) {
			if (err) {
				prompt(err);
			} else {
				questions = JSON.parse(data.Payload);

			}
			if (questions.length > 0) {
				displayNext();
			}
		});
	};

	// Click handler for the 'next' button
	$('#next').on('click', function(e) {
		e.preventDefault();
		// Suspend click listener during fade animation
		if (quiz.is(':animated')) {
			return false;
		}
		prevClicked = false;
		// If no user selection, progress is stopped
		if (isNaN(selections[questionCounter])) {
			alert('Please make a selection!');
		} else {
			questionCounter++;
			displayNext();
		}
	});

	// Click handler for the 'prev' button
	$('#prev').on('click', function(e) {
		e.preventDefault();
		if (quiz.is(':animated')) {
			return false;
		}
		prevClicked = true;
		choose();
		questionCounter--;
		displayNext();
		
	});

	// Click handler for the 'Start Over' button
	$('#start').on('click', function(e) {
		e.preventDefault();

		if (quiz.is(':animated')) {
			return false;
		}
		questionCounter = 0;
		selections = [];
		//  // Display initial question
		initiateQuestion();
		displayNext();
		$('#start').hide();
		$('#start').text("Start Over");
	});

	// Animates buttons on hover
	$('.button').on('mouseenter', function() {
		$(this).addClass('active');
	});
	$('.button').on('mouseleave', function() {
		$(this).removeClass('active');
	});
	
})();

// Creates and returns the div that contains the questions and 
// the answer selections
function createQuestionElement(index) {
	var qElement = $('<div>', {
		id : 'question'
	});

	var header = $('<h2>Question ' + (index + 1) + ':</h2>');
	qElement.append(header);

	var question = $('<p>').append(questions[index].question);
	qElement.append(question);

	var radioButtons = createRadios(index);
	qElement.append(radioButtons);

	return qElement;
}

// Creates a list of the answer choices as radio inputs
function createRadios(index) {
	var radioList = $('<ul>');
	var item;
	var input = '';
	for (var i = 0; i < questions[index].choices.length; i++) {
		item = $('<li>');
		input = '<input type="radio" name="answer" id="answer" value=' + i + ' onclick="choose()"/>';
		input += questions[index].choices[i];
		item.append(input);
		radioList.append(item);
	}
	return radioList;
}

// Reads the user selection and pushes the value to an array
function choose() {
	selections[questionCounter] = +$('input[name="answer"]:checked').val();
	var selected = $('input[name="answer"]:checked').val();
	var selectedText = questions[questionCounter].choices[selected];
	selected++;
	var answer = questions[questionCounter].correctAnswer;
	var answerText = questions[questionCounter].choices[answer];
	answer++;
	$('input[name="answer"]').attr("disabled", true); 
	if(selectedText===answerText){
		$('#results').html("<br>CORRECT!!");
	}
	else{
		$('#results').html("<br>WRONG!<br>You chose: "+ selectedText+" <br>The correct answer is: "+answerText);
	}
	$('#results').show();
}

// Displays next requested element
function displayNext() {
	$('#results').hide();
	quiz.fadeOut(function() {
		$('#question').remove();

		if (questionCounter < questions.length) {
			var nextQuestion = createQuestionElement(questionCounter);
			quiz.append(nextQuestion).fadeIn();
			if (!(isNaN(selections[questionCounter]))) {
				$('input[value=' + selections[questionCounter] + ']').prop(
						'checked', true);
				$('input[name="answer"]').attr("disabled", true); 
				choose();
			}

			// Controls display of 'prev' button
			if (questionCounter === 1) {
				$('#prev').show();
			} else if (questionCounter === 0) {

				$('#prev').hide();
				$('#next').show();
			}
		} else {
			if (questions.length > 0) {
				var scoreElem = displayScore();
				quiz.append(scoreElem).fadeIn();
			}

			$('#next').hide();
			$('#prev').hide();
			$('#start').show();
		}
	});
}

// Computes score and returns a paragraph element to be displayed
function displayScore() {
	var score = $('<p>', {
		id : 'question'
	});

	var numCorrect = 0;
	for (var i = 0; i < selections.length; i++) {
		if (selections[i] === questions[i].correctAnswer) {
			numCorrect++;
		}
	}

	score.append('You got ' + numCorrect + ' questions out of '
			+ questions.length + ' right!!!');
	var finalScore = numCorrect/questions.length*100;
	
	score.append('<p> That is '+ finalScore.toFixed()+'%');
	
	return score;
}
