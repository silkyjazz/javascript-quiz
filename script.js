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