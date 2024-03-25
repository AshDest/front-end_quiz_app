const quizData = [
    {
        question: "What is the difference between html and css?",
        answers: [
            { text: "html is for content, css is for style", correct: true },
            { text: "html is for style, css is for content", correct: false },
            { text: "html is for structure, css is for content", correct: false },
            { text: "html is for content, css is for structure", correct: false }
        ]
    },
    {
        question: "What is the difference between a variable and a constant?",
        answers: [
            { text: "A constant can be changed, a variable cannot", correct: false },
            { text: "A variable is a number, a constant is a string", correct: false },
            { text: "A constant is a number, a variable is a string", correct: false },
            { text: "A variable can be changed, a constant cannot", correct: true }
        ]
    },
    {
        question: "What is the difference between a function and a method?",
        answers: [
            { text: "A function is a block of code that can be called, a method is a function that is a property of an object", correct: true },
            { text: "A method is a block of code that can be called, a function is a method that is a property of an object", correct: false },
            { text: "A function is a block of code that can be called, a method is a function that is a property of a class", correct: false },
            { text: "A method is a block of code that can be called, a function is a method that is a property of a class", correct: false }
        ]
    },
    {
        question: "What is the difference between a class and an object?",
        answers: [
            { text: "A class is a blueprint for an object, an object is an instance of a class", correct: true },
            { text: "An object is a blueprint for a class, a class is an instance of an object", correct: false },
            { text: "A class is a blueprint for a function, an object is an instance of a class", correct: false },
            { text: "An object is a blueprint for a function, a class is an instance of an object", correct: false }
        ]
    },
    {
        question: "What is the difference between a property and a method?",
        answers: [
            { text: "A property is a function that is a property of an object, a method is a block of code that can be called", correct: false },
            { text: "A method is a function that is a property of an object, a property is a block of code that can be called", correct: false },
            { text: "A property is a value that is associated with an object, a method is a function that is a property of an object", correct: true },
            { text: "A method is a value that is associated with an object, a property is a function that is a property of an object", correct: false }
        ]
    },
    {
        question: "What is the difference between a parameter and an argument?",
        answers: [
            { text: "A parameter is a value that is passed to a function, an argument is a variable that is passed to a function", correct: false },
            { text: "An argument is a value that is passed to a function, a parameter is a variable that is passed to a function", correct: false },
            { text: "A parameter is a variable that is passed to a function, an argument is a value that is passed to a function", correct: true },
            { text: "An argument is a variable that is passed to a function, a parameter is a value that is passed to a function", correct: false }
        ]
    },
    {
        question: "What is the difference between a loop and a conditional statement?",
        answers: [
            { text: "A loop is a block of code that is executed if a condition is true, a conditional statement is a block of code that is executed multiple times", correct: false },
            { text: "A conditional statement is a block of code that is executed if a condition is true, a loop is a block of code that is executed multiple times", correct: false },
            { text: "A loop is a block of code that is executed multiple times, a conditional statement is a block of code that is executed if a condition is true", correct: true },
            { text: "A conditional statement is a block of code that is executed multiple times, a loop is a block of code that is executed if a condition is true", correct: false }
        ]
    },
    {
        question: "What is the difference between a for loop and a while loop?",
        answers: [
            { text: "A for loop is a loop that is executed while a condition is true, a while loop is a loop that is executed a specific number of times", correct: false },
            { text: "A while loop is a loop that is executed while a condition is true, a for loop is a loop that is executed a specific number of times", correct: true },
            { text: "A for loop is a loop that is executed a specific number of times, a while loop is a loop that is executed while a condition is true", correct: false },
            { text: "A while loop is a loop that is executed a specific number of times, a for loop is a loop that is executed while a condition is true", correct: false }
        ]
    },
    {
        question: "What is the difference between a break statement and a continue statement?",
        answers: [
            { text: "A break statement is a statement that is executed if a condition is true, a continue statement is a statement that is executed if a condition is false", correct: false },
            { text: "A continue statement is a statement that is executed if a condition is true, a break statement is a statement that is executed if a condition is false", correct: false },
            { text: "A break statement is a statement that is executed if a condition is true, a continue statement is a statement that is executed if a condition is false", correct: true },
            { text: "A continue statement is a statement that is executed if a condition is true, a break statement is a statement that is executed if a condition is false", correct: false }
        ]
    },
    {
        question: "What is the difference between a return statement and a throw statement?",
        answers: [
            { text: "A return statement is a statement that is executed if a condition is true, a throw statement is a statement that is executed if a condition is false", correct: false },
            { text: "A throw statement is a statement that is executed if a condition is true, a return statement is a statement that is executed if a condition is false", correct: false },
            { text: "A return statement is a statement that is executed if a condition is true, a throw statement is a statement that is executed if a condition is false", correct: true },
            { text: "A throw statement is a statement that is executed if a condition is true, a return statement is a statement that is executed if a condition is false", correct: false }
        ]
    },
    {
        question: "What is the difference between a try statement and a catch statement?",
        answers: [
            { text: "A try statement is a statement that is executed if a condition is true, a catch statement is a statement that is executed if a condition is false", correct: false },
            { text: "A catch statement is a statement that is executed if a condition is true, a try statement is a statement that is executed if a condition is false", correct: false },
            { text: "A try statement is a statement that is executed if a condition is true, a catch statement is a statement that is executed if a condition is false", correct: true },
            { text: "A catch statement is a statement that is executed if a condition is true, a try statement is a statement that is executed if a condition is false", correct: false }
        ]
    },
    {
        question: "What is the difference between a finally statement and a throw statement?",
        answers: [
            { text: "A finally statement is a statement that is executed if a condition is true, a throw statement is a statement that is executed if a condition is false", correct: false },
            { text: "A throw statement is a statement that is executed if a condition is true, a finally statement is a statement that is executed if a condition is false", correct: false },
            { text: "A finally statement is a statement that is executed if a condition is true, a throw statement is a statement that is executed if a condition is false", correct: false },
            { text: "A throw statement is a statement that is executed if a condition is true, a finally statement is a statement that is executed if a condition is false", correct: false }
        ]       
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionTextElement = document.getElementById("question-text");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");


function startQuiz() {
    showQuestion();
}

function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionTextElement.innerText = currentQuestion.question;
    answerButtonsElement.innerHTML = "";
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer.correct));
        answerButtonsElement.appendChild(button);
    });

    const progressBar = document.getElementById("progress-bar");
    const progressPercentage = ((currentQuestionIndex + 1) / quizData.length) * 100;
    progressBar.style.width = progressPercentage + "%";
}

function showAlert(message) {
    const alertContainer = document.getElementById("alert-container");
    alertContainer.innerText = message;
    alertContainer.style.display = "block";

    // Masquer l'alerte après 3 secondes (3000 millisecondes)
    setTimeout(() => {
        alertContainer.style.display = "none";
    }, 6000);
}

function selectAnswer(correct) {
    if (correct) {
        showAlert("Correct!");
        score++;
    } else {
        showAlert("Wrong!");
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    const scoreMessageElement = document.getElementById("score-message");
    scoreMessageElement.innerText = "Your score: " + score + "/" + quizData.length;
    
    const quizEndMessage = document.getElementById("quiz-end-message");
    quizEndMessage.style.display = "block";

    const questionContainer = document.getElementById("question-container");
    questionContainer.classList.add("hidden");

    const answerButtons = document.getElementById("answer-buttons");
    answerButtons.classList.add("hidden");

    const nextButton = document.getElementById("next-button");
    nextButton.classList.add("hidden");
}

function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        finishQuiz();
    }
}

startQuiz();