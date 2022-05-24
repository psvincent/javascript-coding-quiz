// Getting all the initial HTML IDs to JavaScript
var quiz = document.getElementById("quiz");
var enterScore = document.getElementById("enter-score");
var startScreen = document.getElementById("quiz-start");
var highScores = document.getElementById("highscores");
var timer = document.getElementById("count");
var startButton = document.getElementById("start-quiz");
var questionText = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");
var optionOne = document.getElementById("one");
var optionTwo = document.getElementById("two");
var optionThree = document.getElementById("three");
var optionFour = document.getElementById("four");
var correctIncorrect = document.getElementById("correct-incorrect");
var finalScore = document.getElementById("final-score");
var submitButton = document.getElementById("submit-button");
var viewScores = document.getElementById("logged-scores")
var viewHighScoresButton = document.getElementById("view-highscores-button");
var scores = [];
var index = 0;
var timeLeft = 75;
var localStorageScores = JSON.parse(localStorage.getItem("userData"));
// Getting all the questions and putting them into an array.
const questionOne = "Commonly used data types DO NOT include:";
const questionTwo = "The condition in an if/else statement is enclosed with ______.";
const questionThree = "Arrays in JavaScript can be used to store ______.";
const questionFour = "String values must be enclosed within ______ when being assigned to variables.";
const questionFive = "A very useful tool used during development and debugging for printing content to the debugger is:";
const quizQuestions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

// Getting all the answers and putting them into an array.
const questionOneAnswers = {
    answerOne: "strings",
    answerTwo: "booleans",
    answerThree: "alerts",
    answerFour: "numbers"
}

const questionTwoAnswers = {
    answerOne: "quotes",
    answerTwo: "curly brackets",
    answerThree: "parentheses",
    answerFour: "square brackets"
}

const questionThreeAnswers = {
    answerOne: "numbers and strings",
    answerTwo: "other arrays",
    answerThree: "booleans",
    answerFour: "all of the above"
}

const questionFourAnswers = {
    answerOne: "commas",
    answerTwo: "curly brackets",
    answerThree: "quotes",
    answerFour: "parentheses"
}

const questionFiveAnswers = {
    answerOne: "pancakes",
    answerTwo: "terminal/bash",
    answerThree: "for loops",
    answerFour: "console.log"
}

const quizAnswers = [questionOneAnswers, questionTwoAnswers, questionThreeAnswers, questionFourAnswers, questionFiveAnswers];

// Getting all the correct answers then putting them into an array.
const questionOneCorrectAnswer = questionOneAnswers.answerThree;
const questionTwoCorrectAnswer = questionTwoAnswers.answerThree;
const questionThreeCorrectAnswer = questionThreeAnswers.answerFour;
const questionFourCorrectAnswer = questionFourAnswers.answerThree;
const questionFiveCorrectAnswer = questionFiveAnswers.answerFour;

const correctAnswers = [questionOneCorrectAnswer, questionTwoCorrectAnswer, questionThreeCorrectAnswer, questionFourCorrectAnswer, questionFiveCorrectAnswer];


viewScores.classList.add("hidden");

// The listener for the start button to be clicked.
startButton.addEventListener("click", quizStart);

// The start button for the quizzes that removes the welcome screen and starts with the actual quiz.
function quizStart() {
    startScreen.classList.add("hidden");
    quiz.classList.remove("hidden");
    time();
}

// Puts the actual questions and answers into the quiz.
startButton.addEventListener("click", showQuestion);

function showQuestion() {
   if (index === quizQuestions.length - 0) {
    setTimeout(function () {quiz.classList.add("hidden");
    enterScore.classList.remove("hidden");
}, 500);
    setTimeout(function () {clearInterval(timeInterval)}, 500);
   } else {
       questionText.textContent = quizQuestions[index];
       optionOne.textContent = quizAnswers[index].answerOne;
       optionTwo.textContent = quizAnswers[index].answerTwo;
       optionThree.textContent = quizAnswers[index].answerThree;
       optionFour.textContent = quizAnswers[index].answerFour;
   }
};


// Controls the timer of the quiz.
function time() {
    var timeInterval = setInterval(function () {
        timeLeft --;
        timer.textContent = "Time: " + timeLeft + " Seconds";
        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            quiz.classList.add("hidden");
            enterScore.classList.remove("hidden");
            timer.classList.add("hidden");
        }
    }, 1000);
}

// Determines if the answer is correct or not on click.
quiz.addEventListener("click", ifCorrect)


// Function That determines if the answer the user selected is correct or not.
function ifCorrect(event) {
    if(event.target.matches(".btn")) {
        let userAnswer = event.target.textContent;
        correctIncorrect.textContent = " ";
        // Says that if the answer is correct then display correct.
        if(userAnswer === correctAnswers[index]) {
            correctIncorrect.textContent = "Correct!"
                correctIncorrect.classList.remove("hidden")
        } else {
            // Says that if the answer is incorrect then display incorrect and take 10 seconds off of the timer.
            correctIncorrect.textContent = "Incorrect"
                correctIncorrect.classList.remove("hidden")
            timeLeft -= 10;
        }
       
        index++;
        
    }
    showQuestion();
    return timeLeft;
}

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    addInitials();
    viewScores.classList.remove("hidden");
    enterScore.classList.add("hidden");
    timer.classList.add("hidden");
})



function addInitials() {
    let initials = document.querySelector("#initials").value;
    if (initials === "") {
        initials = "AAA";
    } else {
        localStorage.setItem(initials, timeLeft);
        document.querySelector(".user-scores").textContent = " ";
        finalScore.textContent = initials + ": " + timeLeft;
        document.querySelector(".user-scores").appendChild(finalScore);
    }
}

document.querySelector("#go-back").addEventListener("click", function() {
    index = 0;
    timeLeft = 75;
    viewScores.classList.add("hidden");
    enterScore.classList.add("hidden");
    timer.classList.remove("hidden");
    quiz.classList.add("hidden");
    startScreen.classList.remove("hidden");
})

viewHighScoresButton.addEventListener("click", viewHighScores);

function viewHighScores() {
   clearInterval(timeInterval);
   quiz.classList.add("hidden");
   enterScore.classList.add("hidden");
   startScreen.classList.add("hidden");
}

        