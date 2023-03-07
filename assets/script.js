var start = document.querySelector("#start"); //start button
var countdown = document.querySelector("#time"); //timer text
var questionEl = document.querySelector("#question"); //question text
var choicesEl = document.querySelector("#choices"); //answers
var score = document.querySelector("#score"); //score text
var message = document.querySelector("#message"); //message text
var submitInitials = document.querySelector("#submit");
var initials = document.querySelector("#initials");
var restartBtn = document.querySelector("#restart");
var quitBtn = document.querySelector("#quitBtn");

var startScreen = document.querySelector(".start-screen");
var quizScreen = document.querySelector(".quiz-screen");
var scoreScreen = document.querySelector(".score-screen");

var secondsLeft = 55;
var counter = 0;
var currentIndex = 0;
var timer;

var quiz = [
  {
    question: "Where do the script tags belong in the html?",
    choices: ["Head", "Title", "Div", "Body"],
    answer: "Body",
  },

  {
    question: "How many primative data types are there?",
    choices: ["four", "five", "six", "seven"],
    answer: "seven",
  },

  {
    question: "Which is NOT a click event?",
    choices: ["onMouseOver", "onUnload", "onClick", "onPush"],
    answer: "onPush",
  },

  {
    question: "Which is a composite data type?",
    choices: ["Boolean", "String", "Object", "Number"],
    answer: "Object",
  },

  {
    question: "Which is NOT an error type",
    choices: [
      "Load time error",
      "Run time error",
      "Null error",
      "Logical Error",
    ],
    answer: "Null error",
  },

  {
    question: "What is a primative data type?",
    choices: ["Null", "String", "Object", "Array"],
    answer: "String",
  },

  {
    question: "What is an anonymous function?",
    choices: [
      "A function with no variable",
      "A function with no code to run",
      "A function that has no name",
      "A function inside a for loop",
    ],
    answer: "A function that has no name",
  },

  {
    question: "What symbol is used for making comments?",
    choices: ["(", "/", "#", "!"],
    answer: "/",
  },

  {
    question: "What is .this keyword in JavaScript??",
    choices: [
      "used as a variable",
      "refers to the object",
      "refers to the method",
      "Ar",
    ],
    answer: "refers to the object",
  },
];

function startQuiz() {
  startScreen.classList.add("hide");
  quizScreen.classList.remove("hide");

  timer = setInterval(function () {
    secondsLeft--;
    countdown.textContent = secondsLeft;

    if (secondsLeft <= 0) {
      endQuiz();
    }
  }, 1000);

  renderQuestions();
}

function renderQuestions() {
  for (let i = quiz.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
  }

  currentQuestion = quiz[currentIndex];
  questionEl.textContent = currentQuestion.question;
  choicesEl.innerHTML = "";

  currentQuestion.choices.forEach(function (choice, i) {
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("value", choice);
    choiceBtn.textContent = i + 1 + ". " + choice;
    choiceBtn.onclick = evaulateQuestion;
    choicesEl.appendChild(choiceBtn);
  });
}

function evaulateQuestion(e) {
  if (this.value !== quiz[currentIndex].answer) {
    secondsLeft -= 10;
    if (secondsLeft < 0) {
      secondsLeft = 0;
    }
    countdown.textContent = secondsLeft;
    message.textContent = `Wrong Answer`;
    message.style.color = "red";
  } else {
    message.textContent = `Correct Answer`;
    message.style.color = "green";
  }
  message.setAttribute("class", "message");
  setTimeout(function () {
    message.setAttribute("class", "message hide");
  }, 1000);

  currentIndex++;
  if (currentIndex === quiz.length) {
    endQuiz();
  } else {
    renderQuestions();
  }
}

function saveScore() {
  var name = initials.value.trim();
  if (initials !== "") {
    var userScore = JSON.parse(localStorage.getItem("highscores")) || [];
    var newScore = {
      score: secondsLeft,
      initials: name,
    };
    userScore.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(userScore));
  }
}

function endQuiz() {
  clearInterval(timer);
  scoreScreen.classList.remove("hide");
  quizScreen.classList.add("hide");
  score.textContent = secondsLeft;
}

function restartQuiz() {
  secondsLeft = 55;
  timer = 0;
  currentIndex = 0;
  quizScreen.classList.add("hide"); // hide quiz screen
  scoreScreen.classList.add("hide"); // hide score screen
  startScreen.classList.remove("hide"); // show start screen
  clearInterval(timer);
  startQuiz();
  score.textContent = 0;
}

function quitQuiz() {
  // Reset currentIndex and secondsLeft variables
  secondsLeft = 55;
  timer = 0;
  currentIndex = 0;
  quizScreen.classList.add("hide"); // hide quiz screen
  scoreScreen.classList.add("hide"); // hide score screen
  startScreen.classList.remove("hide"); // show start screen
  // Call startQuiz function to go back to the start screen
}

quitBtn.addEventListener("click", quitQuiz);
submitInitials.addEventListener("click", saveScore);
restartBtn.addEventListener("click", restartQuiz);
start.addEventListener("click", startQuiz);
