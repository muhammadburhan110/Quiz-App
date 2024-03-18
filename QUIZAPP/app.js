const questions = [
    {
        question:"Inside which HTML element do we put the JavaScript?",
        answers:[
            {text: "script", correct: true},
            {text: "scripting", correct: false},
            {text: "javascript", correct: false},
            {text: "js", correct: false},
            ]
        },
    {
        question:"Which type of JavaScript language is ___________?",
        answers:[
            {text: "Object-Based", correct: false},
            {text: "Object-Oriented", correct: true},
            {text: "Assembly-language", correct: false},
            {text: "High-level", correct: false},
            ]
        },
    {
        question:"Which one of the following also known as Conditional Expression?",
        answers:[
            {text: "Alternative to if-else", correct: false},
            {text: "Switch statement", correct: false},
            {text: "If-then-else statement", correct: false},
            {text: "immediate if  ", correct: true},
            ]
        },
    {
        question:"In JavaScript, what is a block of statement?",
        answers:[
            {text: "Conditional block", correct: false},
            {text: "block that combines a number of statements into a single compound statement", correct: true},
            {text: "both conditional block and a single statement", correct: false},
            {text: "block that contains a single statement ", correct: false},
            ]
        },
    {
        question:"When interpreter encounters an empty statements, what it will do?",
        answers:[
            {text: "Shows a warning", correct: false},
            {text: "Prompts to complete the statement", correct: false},
            {text: "Throws an error", correct: false},
            {text: "Ignores the statements", correct: true},
            ]       
        },
    {
        question:"The 'function' and 'var' are known as:",
        answers:[
            {text: "Keywords", correct: false},
            {text: "Data types", correct: false},
            {text: "Declaration statements", correct: true},
            {text: "Prototypes", correct: false},
            ]
        },
    {
        question:"Which one of the following is the correct way for calling the JavaScript code?",
        answers:[
            {text: "Preprocessor", correct: false},
            {text: "Triggering Event", correct: false},
            {text: "RMI", correct: false},
            {text: "Function/Method", correct: true},
            ]
        },
    {
        question:"Which of the following type of a variable is volatile?",
        answers:[
            {text: "Mutable variable", correct: true},
            {text: "Dynamic variable", correct: false},
            {text: "Volatile variable", correct: false},
            {text: "Immutable variable", correct: false},
            ]
        },
    {
        question:"Which of the following option is used as hexadecimal literal beginning?",
        answers:[
            {text: "00", correct: false},
            {text: "0x", correct: false},
            {text: "0X", correct: false},
            {text: "both 0x and 0X", correct: true},
            ]
        },
    {
        question: "When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______?",
        answers: [
            {text: "Prints an exception error", correct: false},
            {text: "Prints an overflow error", correct: false},
            {text: "Displays Infinity", correct: true},
            {text: "Prints the value as such", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer)
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");

    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Try Again"
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();