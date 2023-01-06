console.log("linked!")

var start = document.querySelector("#start");
var showTime = document.querySelector("#time");
var startScreen = document.querySelector(".start-screen");
var quizScreen = document.querySelector(".quiz-screen");
var scoreScreen = document.querySelector(".score-screen");
var showQuestion = document.querySelector("#question")
var showChoices = document.querySelector("#choices")
var showChoice1 = document.querySelector("#choice1")
var showScore = document.querySelector("#score")
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
        showTime.textContent = secondsLeft;

        if (secondsLeft <= 0){
            endQuiz();
        }
    }, 1000)

    renderQuestions();
}

function renderQuestions() {
    currentQuestion = quiz[currentIndex];
    showQuestion.textContent = currentQuestion.question

    
    currentQuestion.choices.forEach(choice => {
        showChoices.textContent = choice
        console.log(choice)
    });

    showChoices.addEventListener("click", evaulateQuestion)
   
}


function evaulateQuestion (e){
    //set a variable for correctAnswer
    // var correctAnswer = currentQuestion.answer
    // correctAnswer ? score++ : secondsLeft-10 
    // currentIndex
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

1: create an object or array that has questions, choices and answers for the quiz
2. iterate through the array and display each question and choices in the correct html element (p tag/ button")
3. if the users choice === answer, display "correct"
4. if the users choice does not equal answer , display "wrong" and minus 10 seconds from the timer
5. loop through the questions array until user answers all questions or timer runs out
6. when seconds left === 0 , prompt user for name
7. after the user enters name, display name and score (time left)


special feature: display questions in a random order
*/