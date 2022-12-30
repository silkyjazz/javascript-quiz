console.log("linked!")

var body = document.body;
var div = document.createElement("div");
var h1 = document.createElement("h1");
var para1 = document.createElement("p");
var para2 = document.createElement("p")

var start = document.createElement("button")

div.setAttribute("class", "container")
h1.textContent = "Coding Quiz Challenge"

para1.textContent = "Try to answer the following code-related questions within the time limit."
para2.textContent= "Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
para1.setAttribute("class", "paragraph");
para2.setAttribute("class", "paragraph");

start.textContent= "Start"

body.appendChild(div)
div.appendChild(h1)
div.appendChild(para1)
div.appendChild(para2)
div.appendChild(start)

function startQuiz(){
    div.textContent = ""

    var quiz = [
        {question: "How many primative data types are there?",
        choices: ["4", "5","11", "7"],
        answer: 3 },
        {question: "",
        choices: ["4", "5","11", "7"],
        answer: 3 },
        

    ]

   
    var p = document.createElement("p")
    var choiceA = document.createElement("button")
    var choiceB = document.createElement("button")
    var choiceC = document.createElement("button")
    var choiceD = document.createElement("button")


    p.innerText = quiz[0].question
    choiceA.textContent = quiz[0].choices[0]
    choiceB.textContent = quiz[0].choices[1]
    choiceC.textContent = quiz[0].choices[2]
    choiceD.textContent = quiz[0].choices[3]

    div.appendChild(p)
    div.appendChild(choiceA)
    div.appendChild(choiceB)
    div.appendChild(choiceC)
    div.appendChild(choiceD)

    startTimer()
}

function startTimer(){
    var secondsLeft = 60;
    var timerText = document.createElement("p")
    timerText.setAttribute("class", "timer")
    body.appendChild(timerText)


    var timer = setInterval(function(){
        secondsLeft--
        timerText.textContent = "Time: " + secondsLeft

        if (secondsLeft === 0){
            clearInterval(timer)
        }
    }, 1000)
  

    
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