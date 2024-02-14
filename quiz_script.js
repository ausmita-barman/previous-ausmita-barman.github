// Select all <button> elements on the page
let myButtons = document.querySelectorAll("button");

// Select my score element
let scoreElement = document.querySelector(".score-element");

// Create score tracker
let score = 0;

// counting question numbers
const numberOfQuestions = document.querySelectorAll('.question').length;

// Select the total-question and question-left elements
let totalQuestion = document.querySelector(".total-question");
let questionLeft = document.querySelector(".question-left");

let qLeft = numberOfQuestions;

totalQuestion.innerText = numberOfQuestions;
questionLeft.innerText = qLeft;

function disableButtons(question) {
    let currentButtons = question.querySelectorAll("button");

    // For each button
    for (let button of currentButtons) {

        // change the cursor
        button.classList.add("disabled");
        // Disable it
        button.disabled = true;
    }
}

// Define instructions to check answer
function checkAnswer(event) {
    // Find clicked button, by looking into event details
    let button = event.target;
    let ol = button.parentElement;
    let question = ol.parentElement;

    // Get boolean (true or false) if <button> has class "correct" or not
    let isCorrect = button.classList.contains("correct");

    let correctMessage = question.querySelector(".feedback_message.correct_answer");
    let wrongMessage = question.querySelector(".feedback_message.wrong_answer");

    button.classList.add("clicked");

    // Check if answer is correct
    if (isCorrect) {
        // Adds 1
        score++;

        scoreElement.innerText = score;
        // Do stuff
        correctMessage.style.display = "block";
        wrongMessage.style.display = "none";

    } else {
        // Do other stuff
        wrongMessage.style.display = "block";
        correctMessage.style.display = "none";
    }

    // subtract 1
    qLeft--;
    // totalQuestion.innerText = numberOfQuestions;

    // updating how many question left
    questionLeft.innerText = qLeft;

    disableButtons(question);
}

// For each button
for (let button of myButtons) {
// When clicked, check answer
button.onclick = checkAnswer;
}


function playAgain() {
    // Reload the current page
    location.reload();
}
