var start = document.querySelector("#start"); //start button
var countdown = document.querySelector("#time"); //timer text
var questionEl = document.querySelector("#question"); //question text
var choicesEl = document.querySelector("#choices"); //answers
var score = document.querySelector("#score"); //score text
var message = document.querySelector("#message"); //message text
var submitInitials = document.querySelector("#submit");
var initials = document.querySelector('#initials')

var startScreen = document.querySelector(".start-screen");
var quizScreen = document.querySelector(".quiz-screen");
var scoreScreen = document.querySelector(".score-screen");



var secondsLeft = 55;
var counter = 0
var currentIndex= 0;
var timer;




var quiz = [
        {question: "Where do the script tags belong in the html?",
        choices: ["Head", "Title", "Div", "Body"],
        answer: "Body"},

        {question: "How many primative data types are there?",
        choices:["four", "five", "six", "seven" ] ,
        answer: "seven"},

        {question: "Which is NOT a click event?",
        choices: ["onMouseOver", "onUnload", "onClick", "onPush"],
        answer: "onPush" },

        {question: "Which is a composite data type?",
        choices: ["Boolean", "String", "Object", "Number"],
        answer: "Object" },

        {question: "Which is NOT an error type",
        choices: ["Load time error", "Run time error", "Null error", "Logical Error"],
        answer: "Null error" },

        {question: "What is a primative data type?",
        choices: ["Null", "String", "Object", "Array"],
        answer: "String" },

        {question: "What is an anonymous function?",
        choices: ["A function with no variable", "A function with no code to run", "A function that has no name", "A function inside a for loop"],
        answer: "A function that has no name" },

        {question: "What symbol is used for making comments?",
        choices: ["(", "/", "#", "!"],
        answer: "/" },

        {question: "What is .this keyword in JavaScript??",
        choices: ["used as a variable", "refers to the object", "refers to the method", "Ar"],
        answer: "refers to the object" },

]


function startQuiz(){
    startScreen.classList.add("hide");
    quizScreen.classList.remove("hide");

    timer = setInterval(function(){
        secondsLeft--
        countdown.textContent = secondsLeft;

        if (secondsLeft <= 0){
            endQuiz();
        }
    }, 1000)

    renderQuestions();
}

function renderQuestions() {
    currentQuestion = quiz[currentIndex];
    questionEl.textContent = currentQuestion.question
    choicesEl.innerHTML = "";
    
    currentQuestion.choices.forEach(function (choice, i){
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.textContent = i + 1 + ". " + choice;
        choiceBtn.onclick = evaulateQuestion;
        choicesEl.appendChild(choiceBtn);
    })
   
}


function evaulateQuestion (e){
    //set a variable for correctAnswer

   if(this.value !== quiz[currentIndex].answer){
    secondsLeft-=10;
    if(secondsLeft < 0){
        secondsLeft = 0
    }
    countdown.textContent = secondsLeft;
    message.textContent = `Wrong Answer`;
    message.style.color = 'red';
   }else{
    message.textContent = `Correct Answer`;
    message.style.color = 'green';
   }
   message.setAttribute("class","message");
   setTimeout(function(){
    message.setAttribute("class", "message hide");

   }, 1000)

   currentIndex++;
   if(currentIndex === quiz.length){
    endQuiz()
   }else{
    renderQuestions();
   }

}

function saveScore(){
    var name = initials.value.trim()
    if(initials !== ''){
        var userScore = JSON.parse(localStorage.getItem("highscores")) || [];
        var newScore = {
            score: secondsLeft,
            initials: name
        }
        userScore.push(newScore);
        window.localStorage.setItem('highscores', JSON.stringify(userScore))
    }
}

function endQuiz() {
    clearInterval(timer);
    scoreScreen.classList.remove("hide");
    quizScreen.classList.add("hide");
    score.textContent = secondsLeft;

}

submitInitials.addEventListener("click", saveScore)

start.addEventListener("click", startQuiz)
