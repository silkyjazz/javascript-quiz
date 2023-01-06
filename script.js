console.log("linked!")

var start = document.querySelector("#start");
var showTime = document.querySelector("#time");
var startScreen = document.querySelector(".start-screen");
var quizScreen = document.querySelector(".quiz-screen");
var scoreScreen = document.querySelector(".score-screen");
var showQuestion = document.querySelector("#question")

var secondsLeft = 5;
var counter = 0
var currentIndex= 0;
var timer;
var quiz = [
        {question: "How many primative data types are there?",
        choices:["four", "five", "six", "seven" ] ,
        answer: "seven" },

        {question: "Can you see this?",
        choices: ["Yes", "No", "maybe", "idk"],
        answer: 0 },
]


function startQuiz(){
    startScreen.classList.add("hide");
    quizScreen.classList.remove("hide");

    timer = setInterval(function(){
        secondsLeft--
        showTime.textContent = secondsLeft;

        if (secondsLeft <= 0){
            endQuiz();
        }
    }, 1000)

    // var h1 = document.createElement("h1")
    // var choiceA = document.createElement("button")
    // choiceA.setAttribute('id','1')
    // var choiceB = document.createElement("button")
    // choiceB.setAttribute('id','2')
    // var choiceC = document.createElement("button")
    // choiceC.setAttribute('id','3')
    // var choiceD = document.createElement("button")
    // choiceD.setAttribute('id','4')

    // h1.innerText = quiz[0].question
    // choiceA.textContent = "1. " + quiz[0].choiceA
    // choiceB.textContent = "2. " + quiz[0].choiceB
    // choiceC.textContent = "3. " + quiz[0].choiceC
    // choiceD.textContent = "4. " + quiz[0].choiceD

    // div.appendChild(h1)
    // div.appendChild(choiceA)
    // div.appendChild(choiceB)
    // div.appendChild(choiceC)
    // div.appendChild(choiceD)


    
    renderQuestions();
}

function renderQuestions() {
    currentQuestion = quiz[currentIndex];
    showQuestion.textContent = currentQuestion.question

    currentQuestion.answer.forEach(element => {
        
    });
}



function evaulateQuestion (){
  
    currentIndex
    console.log("i was clicked")
}

function endQuiz() {
    clearInterval(timer);
    scoreScreen.classList.remove("hide");
    quizScreen.classList.add("hide");
}
start.addEventListener("click", startQuiz)

/*
to do:

✅ 1: create an object or array that has questions, choices and answers for the quiz
2. iterate through the array and display each question and choices in the correct html element (p tag/ button")
3. if the users choice === answer, display "correct"
4. if the users choice does not equal answer , display "wrong" and minus 10 seconds from the timer
5. loop through the questions array until user answers all questions or timer runs out
6. when seconds left === 0 , prompt user for name
7. after the user enters name, display name and score (time left)


special feature: display questions in a random order
*/