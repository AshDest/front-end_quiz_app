const quizData = [
    {
        question: "Which language is primarily used to structure the content of a web page?",
        answers: [
            { text: "HTML", correct: true },
            { text: "CSS", correct: false },
            { text: "JavaScript", correct: false },
            { text: "Python", correct: false },
        ],
    },
    {
        question: "Which CSS property is used to define the text color?",
        answers: [
            { text: "color", correct: true },
            { text: "font-color", correct: false },
            { text: "text-color", correct: false },
            { text: "font-style", correct: false },
        ],
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        answers: [
            { text: "<a>", correct: true },
            { text: "<link>", correct: false },
            { text: "<href>", correct: false },
            { text: "<url>", correct: false },
        ],
    },
    {
        question: "Which JavaScript method is used to add an element to the end of an array?",
        answers: [
            { text: "push()", correct: true },
            { text: "unshift()", correct: false },
            { text: "add()", correct: false },
            { text: "append()", correct: false },
        ],
    },
    {
        question: "Which CSS rule allows you to horizontally center an element within its container?",
        answers: [
            { text: "margin: auto;", correct: true },
            { text: "text-align: center;", correct: false },
            { text: "position: center;", correct: false },
            { text: "margin: center;", correct: false },
        ],
    },
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
    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer.correct));
        answerButtonsElement.appendChild(button);
    });

    const progressBar = document.getElementById("progress-bar");
    const progressPercentage =
        ((currentQuestionIndex + 1) / quizData.length) * 100;
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
    scoreMessageElement.innerText =
        "Your score: " + score + "/" + quizData.length;

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
