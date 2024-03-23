const quizData = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "What is 2 + 2?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ]
    },
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
    }
];

let currentQuestionIndex = 0;

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

    // Mise à jour de la barre de progression
    const progressBar = document.getElementById("progress-bar");
    const progressPercentage = ((currentQuestionIndex + 1) / quizData.length) * 100;
    progressBar.style.width = progressPercentage + "%";
}

function selectAnswer(correct) {
    if (correct) {
        alert("Correct!");
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            showQuestion();
        } else {
            finishQuiz();
        }
    } else {
        alert("Wrong!");

    }
}

function finishQuiz() {
    alert("Quiz Finished!");
    currentQuestionIndex = 0;
    showQuestion();
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
