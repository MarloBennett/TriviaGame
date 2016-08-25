
var question1 = "<div id='firstQuestion' class='triviaQ'><p>Which of the following animals are Hogwarts students not allowed to bring to school as a pet?</p> <ul id='trivia'> <li class='no'>Cat</li> <li class='no'>Rat</li> <li class='yes'>Bat</li> <li class='no'>Owl</li> </ul></div>";

var question2 = "<div id='secondQuestion' class='triviaQ'><p>Which magical creature rescued Harry, Hermione, Ron, Luna, Dean Thomas, and Mr. Olivander from the Malfoys' basement?</p> <ul id='trivia'> <li class='yes'>Dobby the house elf</li> <li class='no'>Buckbeak the thestral</li> <li class='no'>Winky the house elf</li> <li class='no'>The giant squid</li> </ul></div>";

var question3 = "<div id='thirdQuestion' class='triviaQ'><p>What play opened in London this year and continues the story of Harry, Hermione, and Ron as adults?</p> <ul id='trivia'> <li class='no'>Harry Potter and the Magic of Middle Age</li> <li class='no'>Harry Potter and the Chosen Child</li> <li class='no'>Harry Potter and the Society for the Promotion of Elfish Welfare</li> <li class='yes'>Harry Potter and the Cursed Child</li> </ul></div>";

var question4 = "<div id='fourthQuestion' class='triviaQ'><p>Which deathy hallow did Harry acquire first?</p> <ul id='trivia'> <li class='yes'>The cloak of invisibility</li> <li class='no'>The resurrection stone</li> <li class='no'>The elder wand</li> <li class='no'>The vial of felix felicis</li> </ul></div>";


var correctAnswers;
var incorrectAnswers;
var unansweredQuestions;
var answerIs;


$(document).ready(function() {

initializeNewGame();

function initializeNewGame() {

	correctAnswers = 0;
	incorrectAnswers = 0;
 	unansweredQuestions = 0;

 	showQuestions();

}

function showQuestions() {

//remove previous question and right/wrong messages
	$("#youreCorrect").remove();
	$("#youreWrong").remove();
	$(".triviaQ").remove();

//painfully long code to bring in the next question. maybe a better way to do this.
	if (correctAnswers + incorrectAnswers + unansweredQuestions === 0) {
		$("#game").append(question1);
		answerIs = "Bat";
		responses();
	}

	if (correctAnswers + incorrectAnswers + unansweredQuestions === 1) {
		$("#game").append(question2);
		answerIs = "Dobby the house elf";
		responses();
	}
	
	if (correctAnswers + incorrectAnswers + unansweredQuestions === 2) {
		$("#game").append(question3);
		answerIs = "Harry Potter and the Cursed Child";
		responses();
	}

	if (correctAnswers + incorrectAnswers + unansweredQuestions === 3) {
		$("#game").append(question4);
		answerIs = "The cloak of invisibility";
		responses();
	}
//end of show questions function
}

function responses() {

	$(".yes").on("click", function(event) {

		$("#game").append("<div id='youreCorrect'><h5>That's right!</h5></div>")
		correctAnswers++;
		$(".yes").off("click");
		$(".no").off("click");
		setTimeout(showQuestions, 3000);

		console.log("correct " + correctAnswers);
	})

	$(".no").on("click", function(event) {

		$("#game").append("<div id='youreWrong'><h5>Sorry, the correct answer is " + answerIs + ".</h5></div>")
		incorrectAnswers++;
		$(".yes").off("click");
		$(".no").off("click");
		setTimeout(showQuestions, 3000);

		console.log("incorrect " + incorrectAnswers);
	})
//end of reponses function
}
	



//end of doc ready function
})








//each question must:
//start the timer
//if time runs out, dislay message that time is up and increment unanswered questions
//after last question (if correct + incorect + unanswered = 20), show total results
//include restart game option