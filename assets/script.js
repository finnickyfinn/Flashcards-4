//Set up question and word bank to choose from
var timer = document.getElementById("timer")
var gamebox = document.getElementById("game-box")
var startButton = document.getElementById("start-button")
var questionsDiv = document.getElementById("questions")
var questionTitle = document.getElementById("question-title")
var choices = document.getElementById("choices")
var endScreen = document.getElementById("end-screen")
var timeLeft = 300
var questionIndex = 0
var score = 0
var leaderBoard = document.getElementById("leader-board")

function startGame() {
    setInterval(function(){
        timeLeft = timeLeft-1
        timer.textContent=timeLeft
        if (timeLeft < 0) {
            endgame()
        }
    }, 100)
    gamebox.setAttribute("class","hide")
    questionsDiv.removeAttribute("class","hide")
    displayQuestion()
}

function endgame(){
    questionsDiv.setAttribute("class","hide")
    endScreen.removeAttribute("class","hide")
    timer.setAttribute("class","hide")

}


function displayQuestion(){
    var currentQuestion = questions[questionIndex]
    questionTitle.textContent = currentQuestion.title
    choices.textContent = ""
    currentQuestion.choices.forEach(function(choice){
        var choiceBTN = document.createElement("button")
        choiceBTN.textContent = choice
        choiceBTN.setAttribute("value", choice)
        choiceBTN.onclick = checkAnswer
        choices.append(choiceBTN)
    } )
}

function checkTime(){
    setInterval(function(){
        timeLeft = timeLeft-1
    },100)


}

function checkAnswer(){
    if (this.value === questions[questionIndex].answer ){
        console.log("Correct!")
        // window.alert("Correct!")
        questionIndex++
        score++

    } else {
        console.log("Try Again")
        // window.alert("Try Again...you got this!")
        timeLeft = timeLeft-10
        
    }
    
    displayQuestion()

}


startButton.onclick = startGame

var questions = [ 
    {
        title:"Who invented JavaScript?",
        choices:["Brendan Eich","Elon Musk","Morgan Freeman","Edward Cullen"],
        answer:"Brendan Eich"
    },
    {
        title:"Is there a limit to how many Variables you can have?",
        choices:["Yes","No"],
        answer:"No"
    },
    {
        title:"If you want call the first object in an array, what number would you use?",
        choices:["11","1","0","Man...idk"],
        answer:"0"
    },
    {
        title:"What is the syntax needed to run a fuction",
        choices:["()","$","#","{}"],
        answer:"()"
    },
    {
        title:"What is the most iconic phrase in all of coding",
        choices:["Hello World","Why isn't working?","I need coffee","I give up"],
        answer:"Hello World"
    },
] 













//Create Local Storage for Highscores