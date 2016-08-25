
var question1 = "<div id='firstQuestion' class='triviaQ'><p>Which of the following animals are Hogwarts students NOT allowed to bring to school as a pet?</p> <ul id='trivia'> <li class='no'>Cat</li> <li class='no'>Rat</li> <li class='yes'>Bat</li> <li class='no'>Owl</li> </ul></div>";

var question2 = "<div id='secondQuestion' class='triviaQ'><p>Which magical creature rescued Harry, Hermione, Ron, Luna, Dean Thomas, and Mr. Olivander from the Malfoys' basement?</p> <ul id='trivia'> <li class='yes'>Dobby the house elf</li> <li class='no'>Buckbeak the thestral</li> <li class='no'>Winky the house elf</li> <li class='no'>The giant squid</li> </ul></div>";

var question3 = "<div id='thirdQuestion' class='triviaQ'><p>What play opened in London this year and continues the story of Harry, Hermione, and Ron as adults?</p> <ul id='trivia'> <li class='no'>Harry Potter and the Magic of Middle Age</li> <li class='no'>Harry Potter and the Chosen Child</li> <li class='no'>Harry Potter and the Society for the Promotion of Elfish Welfare</li> <li class='yes'>Harry Potter and the Cursed Child</li> </ul></div>";

var question4 = "<div id='fourthQuestion' class='triviaQ'><p>Which deathy hallow did Harry acquire first?</p> <ul id='trivia'> <li class='yes'>The cloak of invisibility</li> <li class='no'>The resurrection stone</li> <li class='no'>The elder wand</li> <li class='no'>The vial of felix felicis</li> </ul></div>";

var question5 = "<div id='fifthQuestion' class='triviaQ'><p>What position does Harry play on the Gryffindor Quidditch team?</p> <ul id='trivia'> <li class='no'>Beater</li> <li class='no'>Chaser</li> <li class='yes'>Seeker</li> <li class='no'>Bludger</li> </ul></div>";

var question6 = "<div id='sixthQuestion' class='triviaQ'><p>How do most witches and wizards refer to Voldemort?</p> <ul id='trivia'> <li class='yes'>He Who Must Not Be Named</li> <li class='no'>He Who Has No Name</li> <li class='no'>He Who Has No Nose</li> <li class='no'>He Who Cannot Be Killed</li> </ul></div>";

var question7 = "<div id='seventhQuestion' class='triviaQ'><p>Which of the following items did Voldemort NOT turn into a horcrux?</p> <ul id='trivia'> <li class='no'>Rowena Ravenclaw's diadem</li> <li class='yes'>Godric Gryffindor's sword</li> <li class='no'>Salzar Slytherin's locket</li> <li class='no'>Helga Hufflepuff's cup</li> </ul></div>";

var question8 = "<div id='eighthQuestion' class='triviaQ'><p>Which ghost invited Harry to a Death Day party?</p> <ul id='trivia'> <li class='no'>The Fat Friar</li> <li class='yes'>Nearly Headless Nick</li> <li class='no'>The Grey Lady</li> <li class='no'>Peeves</li> </ul></div>";

var question9 = "<div id='ninthQuestion' class='triviaQ'><p>When Hermione solves Snape's potions puzzle on the way to finding the Sorcerer's Stone, she says that it requires what thing that most wizards haven't got an ounce of?</p> <ul id='trivia'> <li class='no'>Magic</li> <li class='no'>Common sense</li> <li class='yes'>Logic</li> <li class='no'>Mathematical knowledge</li> </ul></div>";

var question10 = "<div id='tenthQuestion' class='triviaQ'><p>Who finally delivers Harry's Hogwarts letter to him?</p> <ul id='trivia'> <li class='yes'>Hagrid</li> <li class='no'>Dumbledore</li> <li class='no'>Sirius Black</li> <li class='no'>Remus Lupin</li> </ul></div>";

var question11 = "<div id='eleventhQuestion' class='triviaQ'><p>What does Harry do with his Triwizard Tournament winnings?</p> <ul id='trivia'> <li class='no'>Invests it in magical stocks</li> <li class='yes'>Gives it to Fred and George for their joke shop</li> <li class='no'>Gives it to Ron to help with tuition</li> <li class='no'>Journeys abroad to learn more about international wizard culture</li> </ul></div>";

var question12 = "<div id='twelfthQuestion' class='triviaQ'><p>What animal does Professor Moody turn Draco Malfy into after Draco tries to attack Harry when his back is turned?</p> <ul id='trivia'> <li class='no'>Rabbit</li> <li class='no'>Toad</li> <li class='no'>Dog</li> <li class='yes'>Ferret</li> </ul></div>";

var question13 = "<div id='thirteenthQuestion' class='triviaQ'><p>What is the name of the gigantic spider that lives in the Forbidden Forest?</p> <ul id='trivia'> <li class='no'>Aragorn</li> <li class='no'>Bane</li> <li class='yes'>Aragog</li> <li class='no'>Norbert</li> </ul></div>";

var question14 = "<div id='fourteenthQuestion' class='triviaQ'><p>What animal does Harry accidentially set on his cousin at the zoo?</p> <ul id='trivia'> <li class='yes'>Boa constrictor</li> <li class='no'>Lion</li> <li class='no'>Gorilla</li> <li class='no'>Wallaby</li> </ul></div>";

var question15 = "<div id='fifteenthQuestion' class='triviaQ'><p>What do Hermione's parents do in the Muggle world?</p> <ul id='trivia'> <li class='no'>They are tax accountants.</li> <li class='no'>They are school teachers.</li> <li class='yes'>They are dentists.</li> <li class='no'>They are truck drivers.</li> </ul></div>";


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
	$("#noAnswer").remove();

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

	if (correctAnswers + incorrectAnswers + unansweredQuestions === 4) {
		$("#game").append(question5);
		answerIs = "Seeker";
		responses();
	}

	if (correctAnswers + incorrectAnswers + unansweredQuestions === 5) {
		$("#game").append(question6);
		answerIs = "He Who Must Not Be Named";
		responses();
	}

	if (correctAnswers + incorrectAnswers + unansweredQuestions === 6) {
		$("#game").append(question7);
		answerIs = "Godric Gryffindor's sword";
		responses();
	}

	if (correctAnswers + incorrectAnswers + unansweredQuestions === 7) {
		$("#game").append(question8);
		answerIs = "Nearly Headless Nick";
		responses();
	}

	if (correctAnswers + incorrectAnswers + unansweredQuestions === 8) {
		$("#game").append(question9);
		answerIs = "Logic";
		responses();
	}

	if (correctAnswers + incorrectAnswers + unansweredQuestions === 9) {
		$("#game").append(question10);
		answerIs = "Hagrid";
		responses();
	}

	if (correctAnswers + incorrectAnswers + unansweredQuestions === 10) {
		$("#game").append(question11);
		answerIs = "Gives it to Fred and George for their joke shop";
		responses();
	}

	if (correctAnswers + incorrectAnswers + unansweredQuestions === 11) {
		$("#game").append(question12);
		answerIs = "Ferret";
		responses();
	}

	if (correctAnswers + incorrectAnswers + unansweredQuestions === 12) {
		$("#game").append(question13);
		answerIs = "Aragog";
		responses();
	}

	if (correctAnswers + incorrectAnswers + unansweredQuestions === 13) {
		$("#game").append(question14);
		answerIs = "Boa constrictor";
		responses();
	}

	if (correctAnswers + incorrectAnswers + unansweredQuestions === 14) {
		$("#game").append(question15);
		answerIs = "They are dentists";
		responses();
	}

	if (correctAnswers + incorrectAnswers + unansweredQuestions === 15) {
		if (correctAnswers === 15) {
			$("#game").append("<div class='results'><h5>Correct answers: " + correctAnswers + "</h5> <h5>Incorrect answers: " + incorrectAnswers + "</h5> <h5>Unanswered questions: " + unansweredQuestions + "</h5> <h5>Nice job! You must be ready for your OWLs!</h5></div>");
			$("#theCount").remove();
		}
		else if (correctAnswers > 10) {
			$("#game").append("<div class='results'><h5>Correct answers: " + correctAnswers + "</h5> <h5>Incorrect answers: " + incorrectAnswers + "</h5> <h5>Unanswered questions: " + unansweredQuestions + "</h5> <h5>Not bad, but you may want to study a little harder.</h5></div>");
			$("#theCount").remove();
		}
		else {
			$("#game").append("<div class='results'><h5>Correct answers: " + correctAnswers + "</h5> <h5>Incorrect answers: " + incorrectAnswers + "</h5> <h5>Unanswered questions: " + unansweredQuestions + "</h5> <h5>Uh oh. You may have to repeat this year.</h5></div>");
			$("#theCount").remove();
		}
	}
//end of show questions function
}

function responses() {

//set countdown to starting time
	var timeLeft = 25;
//set interval to make countdown happen each second
	var timerNum = setInterval(countdown, 1000);

	$("#timer").html("<div id='theCount'><h5>Time Remaining: " + timeLeft + "</h5></div>");

	function countdown() {
		if (timeLeft < 0) {
			clearInterval(timerNum);
			$("#game").append("<div id='noAnswer'><h5>Sorry, your time is up! The answer was " + answerIs + ".</h5></div>")
			$(".yes").off("click");
			$(".no").off("click");
			unansweredQuestions++;
			setTimeout(showQuestions, 3000);

			console.log("unanswered questions: " + unansweredQuestions);
		}
		else {
			$("#timer").html("<div id='theCount'><h5>Time left: " + timeLeft + "</h5></div>");
			timeLeft--;
		}
	}

	$(".yes").on("click", function(event) {

		clearInterval(timerNum);
		$("#game").append("<div id='youreCorrect'><h5>That's right!</h5></div>")
		correctAnswers++;
		$(".yes").off("click");
		$(".no").off("click");
		setTimeout(showQuestions, 3000);

		console.log("correct " + correctAnswers);
	})

	$(".no").on("click", function(event) {

		clearInterval(timerNum);
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


//include restart game option
//style