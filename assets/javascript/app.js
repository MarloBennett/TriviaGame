//put all question vars in an array
var questions = [question1, question2, question3, question4];

//put each question in a variable (all necessary html elements)
var question1 = "<p>Which of the following animals are Hogwarts students not allowed to bring to school as a pet?</p> <input type='radio' name='q1' value='incorrect'>Cat<br /> <input type='radio' name='q1' value='incorrect'>Rat<br /> <input type='radio' name='q1' value='correct'>Bat<br /> <input type='radio' name='q1' value='incorrect'>Owl";

var question2 = "<p>Which magical creature rescued Harry, Hermione, Ron, Luna, Dean Thomas, and Mr. Olivander from the Malfoys' basement?</p> <input type='radio' name='q2' value='correct'>Dobby the house elf<br /> <input type='radio' name='q2' value='incorrect'>Winky the house elf<br /> <input type='radio' name='q2' value='incorrect'>Buckbeak the thestral<br /> <input type='radio' name='q2' value='incorrect'>The giant squid";

var question3 = "<p>What play opened in London this year and continues the story of Harry, Hermione, and Ron as adults?</p> <input type='radio' name='q3' value='incorrect'>Harry Potter and the Magic of Middle Age<br /> <input type='radio' name='q3' value='incorrect'>Harry Potter and the Chosen Child<br /> <input type='radio' name='q3' value='incorrect'>Harry Potter and the Society for the Promotion of Elfish Welfare<br /> <input type='radio' name='q3' value='correct'>Harry Potter and Cursed Child";

var question4 = "<p>Which deathy hallow did Harry acquire first?</p> <input type='radio' name='q4' value='correct'>The cloak of invisibility<br /> <input type='radio' name='q4' value='incorrect'>The resurrection stone<br /> <input type='radio' name='q4' value='incorrect'>The elder wand<br /> <input type='radio' name='q4' value='incorrect'>The vial of felix felicis";

var correctAnswers;
var incorrectAnswers;
var unansweredQuestions;

function initializeNewGame() {

	correctAnswers = 0;
	incorrectAnswers = 0;
 	unansweredQuestions = 0;
}


//giant for loop to loop through and pull in each question
for (q = 0; q < questions.length; q++) {
	showQuestions();
}

function showQuestions() {


}
//each question must:
//start the timer
//on click (radio buttons) to determine which answer has been selected. 
//return correct/not correct message
//increment number of correct and incorrect answers
//if time runs out, dislay message that time is up and increment unanswered questions
//after set timeout, display next question
//after last question (if correct + incorect + unanswered = 20), show total results
//include restart game option