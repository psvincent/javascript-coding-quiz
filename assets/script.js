// Getting all the initial HTML IDs to JavaScript
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
var 
// Array with all the questions
var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            { text: "strings", correct: false},
            { text: "booleans", correct: false},
            { text: "alerts", correct: true},
            { text: "numbers", correct: false}
        ]
    },
    {
        question: "The condition in an if/else statement is enclosed with ______.",
        answers: [
            { text: "quotes", correct: false},
            { text: "curly brackets", correct: false},
            { text: "parentheses", correct: true},
            { text: "square brackets", correct: false}
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        answers: [
            { text: "numbers and strings", correct: false},
            { text: "other arrays", correct: false},
            { text: "booleans", correct: false},
            { text: "all of the above", correct: true}
        ]
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        answers: [
            { text: "commas", correct: false},
            { text: "curly brackets", correct: false},
            { text: "quotes", correct: true},
            { text: "parentheses", correct: false}
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            { text: "pancakes", correct: false},
            { text: "terminal/bash", correct: false},
            { text: "for loops", correct: false},
            { text: "console.log", correct: true}
        ]
    }
];
        