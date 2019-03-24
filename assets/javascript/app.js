var wins = 0;
var loses = 0;
var unanswered = 0;
var time = 30;
var intervalId = 0;
var timeoutID = 0;
var timeoutImg = 0;
var stillTime = true;
var i = -1;
var response;
var eval = false;
var finishBool = false;

var trivia = {
    question: [{
        ask: "Which team played in Cleveland, Los Angeles and St Louis?",
        answers: ["Browns", "Ravens", "Rams", "Chargers"]
    }, {
        ask: "The Redskins played in what city prior to moving to Washington?",
        answers: ["Chicago", "Boston", "Los Angeles", "Kansas City"]
    }, {
        ask: "On the first NFL undefeated season, which team Miami defeat in the Superbowl?",
        answers: ["Cowboys", "Bears", "Bills", "Patriots"]
    }, {
        ask: "Which year does the NFL started?",
        answers: ["1920", "1922", "1934", "1956"]
    }, {
        ask: "How many Superbowls does the Steelers have won?",
        answers: ["6", "7", "4", "3"]
    }, {
        ask: "Who was the youngest Head Coach to ever win a Super Bowl?",
        answers: ["Vince Lombardi", "John Gruden", "John Madden", "Mike Tomlin"]
    }, {
        ask: "Which team lost 4 Super Bowl games in the same decade?",
        answers: ["Cowboys", "Dolphins", "Bills", "Patriots"]
    }, {
        ask: "How many teams are in the NFL?",
        answers: ["28", "32", "34", "38"]
    }, {
        ask: "What is the name of the current NFL commissioner?",
        answers: ["Roger Godell", "Art Rooney", "Jerry Jones", "Robert Kraft"]
    }, {
        ask: "Which team won the first Superbowl?",
        answers: ["Steelers", "Chiefs", "Patriots", "Packers"]
    }
    ]
};


window.onload = function () {
    $("#start").click(function() {  
        game();    
    });
}

    function game() {
        //clearTimeout(timeoutImg);
        $("#start").remove();
        $("#instructions").text("Welcome! Make your best guess before the timer expires");
        $("#timer").text("Time Remaining: " + time);
        $("#question").text("");
        $("#responses").text("");
        $(".score").remove();
        $("#restart").remove();
        $("#images").remove();
        console.log("start game");
        resetTimer();
        gameTimer();
        getQuestion();
        getAnswer();
    }

    function resetTimer() {
        time = 30;
        stillTime = true;
        clearInterval(intervalId);
        console.log("reset timer");
    }


    function gameTimer() {
     
        intervalId = setInterval(count, 1000);

        //clockRunning = true;

        function count() {

            if (time > 0 && eval==false && finishBool==false) {
                time -= 1;
                console.log(time);
                $("#timer").text("Time Remaining: " + time + " seconds left!");
            }
            else if (!finishBool) {
                $("#timer").text("Time is Over");
                stillTime = false;
                unanswered++;
                game();
            }
        }
    }

    // setTimeout(trivia, 30 * 1000);

    function getQuestion() {

        i++;
        getAnswerbool = true;
        if (i < 10 && finishBool == false) {
            $(".responses").text("");
            $("#question").text(trivia.question[i].ask);
            $(".responses").append("<p class=indresponse value=0>" + trivia.question[i].answers[0] + "</p>");
            $(".responses").append("<p class=indresponse value=1>" + trivia.question[i].answers[1] + "</p>");
            $(".responses").append("<p class=indresponse value=2>" + trivia.question[i].answers[2] + "</p>");
            $(".responses").append("<p class=indresponse value=3>" + trivia.question[i].answers[3] + "</p>");
        }

        else {
            finish();
        }
        // for (j = 0; j < 4; j++) {
        //     $(".responses").append("<p class=indresponse>" + trivia.question[i].answers[j] +  "</p>");
        //     $(".indresponse").add("value",j);
        //     console.log(j);
        //     }

       

    }
    function getAnswer() {
        $(".indresponse").click(function () {
            response = $(this).attr("value");
            console.log(response);
            getEval();
            //timeoutImg = setTimeout(game,3000);
            game();
        });
        
    }

    

    function finish() {
        $("#alsoscore").append("<h2 class=score>Wins: " + wins + "</h2>");
        $("#alsoscore").append("<h2 class=score>Lost: " + loses + "</h2>");
        $("#alsoscore").append("<h2 class=score>Unanswered: " + unanswered + "</h2>");
        $("#alsoscore").append("<button id=restart>Restart!</button>");
        $("#instructions").text("");
        $("#timer").text("");
        $("#question").text("");
        $(".responses").text("");
        finishBool = true;

        $("#restart").click(function(){
            console.log("wins: " + wins + "loses: " + loses + "unanswered: " + unanswered);
            resetGame();
        })
        
        
    }


    function resetGame() {
        wins = 0;
        loses = 0;
        unanswered = 0;
        time = 30;
        clearInterval(intervalId);
        stillTime = true;
        i = -1;
        response;
        getAnswerbool = false;
        finishBool = false;
        console.log("reset game");
        clearTimeout(timeoutID);
        //timeoutID = setTimeout(game, 12000);
        game();
    }

    function imageWin() {
        //$("#alsoscore").text("");
        $("#instructions").append("Correct Answer");
        $("#images").html("<img src=assets/images/0"+i+".jpg>");
        console.log("value i: " + i);

    }
    function getEval() {
        switch (i) {
            case 0:
                if (response != 2) {
                    loses++;
                    console.log("loses: " + loses);
                }
                else {
                    wins++;
                    imageWin();
                    console.log("wins: " + wins);
                }
                break;
            case 1:
                if (response != 1) {
                    loses++;
                    console.log("loses: " + loses);
                }
                else {
                    wins++;
                    console.log("wins: " + wins);
                }
                break;
            case 2:
                if (response != 1) {
                    loses++;
                    console.log("loses: " + loses);
                }
                else {
                    wins++;
                    console.log("wins: " + wins);
                }
                break;
            case 3:
                if (response != 0) {
                    loses++;
                    console.log("loses: " + loses);
                }
                else {
                    wins++;
                    console.log("wins: " + wins);
                }
                break;
            case 4:
                if (response != 0) {
                    loses++;
                    console.log("loses: " + loses);
                }
                else {
                    wins++;
                    console.log("wins: " + wins);
                }
                break;
            case 5:
                if (response != 3) {
                    loses++;
                    console.log("loses: " + loses);
                }
                else {
                    wins++;
                    console.log("wins: " + wins);
                }
                break;
            case 6:
                if (response != 2) {
                    loses++;
                    console.log("loses: " + loses);
                }
                else {
                    wins++;
                    console.log("wins: " + wins);
                }
                break;
            case 7:
                if (response != 1) {
                    loses++;
                    console.log("loses: " + loses);
                }
                else {
                    wins++;
                    console.log("wins: " + wins);
                }
                break;
            case 8:
                if (response != 0) {
                    loses++;
                    console.log("loses: " + loses);
                }
                else {
                    wins++;
                    console.log("wins: " + wins);
                }
                break;
            case 9:
                if (response != 3) {
                    loses++;
                    console.log("loses: " + loses);
                }
                else {
                    wins++;
                    console.log("wins: " + wins);
                }
                break;
            default:
                break;
        }
    }






