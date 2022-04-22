// Getting all the initial HTML IDs to JavaScript
var quiz = document.getElementById("quiz");
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
var scores = [];
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


// The listener for the start button to be clicked.
startButton.addEventListener("click", quizStart);
// The start button for the quizzes 
function quizStart() {
    startScreen.classList.add("hidden");
    quiz.classList.remove("hidden");
    time();
}

function showQuestion() {
    titleitem.innerHTML = question.title;
    question.answers.forEach(element => {
        
    })
}

function time() {
    var timeInterval = setInterval(function() {
        timer.innerText = count;
        count--;
    }, 1000);
}


        