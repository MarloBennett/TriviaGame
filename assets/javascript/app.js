//put all question vars in an array
//var questions = [question1, question2, question3, question4];

//put each question in a variable (all necessary html elements)
var question1 = "<div id='firstQuestion'><p>Which of the following animals are Hogwarts students not allowed to bring to school as a pet?</p> <ul id='trivia'> <li> <input type='radio' name='ques' value='incorrect'> Cat </li> <li> <input type='radio' name='ques' value='incorrect'> Rat</li> <li> <input type='radio' name='ques' value='correct' id='yes'> Bat</li> <li><input type='radio' name='ques' value='incorrect'> Owl </li> </ul></div>";

var question2 = "<div id='secondQuestion'><p>Which magical creature rescued Harry, Hermione, Ron, Luna, Dean Thomas, and Mr. Olivander from the Malfoys' basement?</p> <input type='radio' name='q2' value='correct'>Dobby the house elf<br /> <input type='radio' name='q2' value='incorrect'>Winky the house elf<br /> <input type='radio' name='q2' value='incorrect'>Buckbeak the thestral<br /> <input type='radio' name='q2' value='incorrect'>The giant squid</div>";

var question3 = "<div id='thirdQuestion'><p>What play opened in London this year and continues the story of Harry, Hermione, and Ron as adults?</p> <input type='radio' name='q3' value='incorrect'>Harry Potter and the Magic of Middle Age<br /> <input type='radio' name='q3' value='incorrect'>Harry Potter and the Chosen Child<br /> <input type='radio' name='q3' value='incorrect'>Harry Potter and the Society for the Promotion of Elfish Welfare<br /> <input type='radio' name='q3' value='correct'>Harry Potter and Cursed Child</div>";

var question4 = "<div id='fourthQuestion'><p>Which deathy hallow did Harry acquire first?</p> <input type='radio' name='q4' value='correct'>The cloak of invisibility<br /> <input type='radio' name='q4' value='incorrect'>The resurrection stone<br /> <input type='radio' name='q4' value='incorrect'>The elder wand<br /> <input type='radio' name='q4' value='incorrect'>The vial of felix felicis</div>";

var correctAnswers;
var incorrectAnswers;
var unansweredQuestions;

$(document).ready(function() {

initializeNewGame();

showQuestions();

function initializeNewGame() {

	correctAnswers = 0;
	incorrectAnswers = 0;
 	unansweredQuestions = 0;
}

function showQuestions() {

	if (correctAnswers + incorrectAnswers + unansweredQuestions === 0) {
		$("#game").append(question1);
	}

	$("#trivia").on("click", function(event) {
		var answerChoice = $("#yes").checked;
		if (answerChoice) {
			correctAnswers++;
			$("#game").append("<div id='youreCorrect'><h5>That's right!</h5></div>")
		}
	})
}






})
//each question must:
//start the timer
//on click (radio buttons) to determine which answer has been selected. 
//return correct/not correct message
//increment number of correct and incorrect answers
//if time runs out, dislay message that time is up and increment unanswered questions
//after set timeout, display next question
//after last question (if correct + incorect + unanswered = 20), show total results
//include restart game option