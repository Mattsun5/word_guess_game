import {words} from './wordLibrary.js'
import timeHandler from "./accurateTimeKeeper.js"
import replayF from "./display.js"
import scrambleHandler from "./wordScrambler.js"
import wordPicker from "./wordPicker.js"
import isAsked from "./wordChecker.js"
// let timeSec = 10;

// app mechanism
// to lowercase
// compares input


let container = document.getElementById('container');
let question = document.getElementById('question');
let options = document.getElementById('list');
let b1 = document.getElementById('qButton');
let b2 = document.getElementById('sButton');
let start = document.getElementById('start');
let replay = document.getElementById('replay');
let error = document.getElementById('error');
let player = document.getElementById('player');
let opt1 = document.getElementById('opt1');
let opt2 = document.getElementById('opt2');
let currentQuest = document.getElementById('current');
let width = document.getElementById('width');
let result = document.getElementById('result');
let numQuestions = 10;
let time = 8;
let mark = 1;
let answer;
let playerName;


// container.addEventListener("load", replayF());
// USEFUL TOOLS
// timeHandler(time); //call time
// question.innerHTML = words[1];

function startGame(numQuestions, time) {
    // for (let i = 0; i < numQuestions; i++){
        time += 1;
    
    // setInterval(function(){
    //     container.innerHTML = "<h1>" + name + ' ' + i + "</h1>";
    //   }, 1000);
    let interval = time * numQuestions * 100;
    // container.innerHTML = "<h1>" + name + ' ' + time + "</h1>";
    var game = setInterval(function(){
    if(time <= 1){
        clearInterval(game);
    }
    askQuestion(wordList);    
    time -= 1;
    }, interval);

    // }
}

// question.innerHTML = word;

//CHECK WORD AFTER PICKING
// STORE ASKED WORDS
var wordList = [];
window.answerList = 0;


// if true, add word to wordList

// question.innerHTML = wordList;
// console.log(wordList);

// QUESTION SESSION HANDLER

//NEXT QUESTION COMPONENT
function nextQuestion(){

}
// var endResult;
// ASK QUESTION COMPONENT
function askQuestion (wordList){
    // PICK WORD
    // window.endResult;
    let word = wordPicker(words);
    let questHtml;
    if (isAsked(word, wordList)){
        askQuestion(wordList);
        return;
    }
    else {
        wordList[wordList.length] = word;
        // question.innerHTML = scrambleHandler(word);
        questHtml = '<div>';
            questHtml += '<h1>Guess the word</h1>';
            questHtml += '<div>';
            questHtml += '<div id = "questTime">';
            questHtml += '<p>Player: ' + playerName + '</p>';
            questHtml += '<div id = "question">' + scrambleHandler(word) + '</div>';
            questHtml += '<div id = "timer">';
            questHtml += '<span>Time left: </span>';
            questHtml += '<span id = "timeBar">10 seconds</span>';
            questHtml += '</div>';
            questHtml += '</div>';
            questHtml += '<div id="answer">';
            questHtml += '<div id = "divAnswer" data-text = "Answer" contenteditable="true"></div>';
            questHtml += '</div>';
            questHtml += '<div id = "buttons">';
            questHtml += '<span id = "quit"> <button id = "qButton">Quit</button></span>';
            // questHtml += '<span id = "done"> <button onclick="submit()" id = "sButton">Done</button></span>';
            questHtml += '</div>';

            questHtml += '</div>';
            
            questHtml += '<footer>';
            questHtml += '<!-- SHOW PROGRESS -->';
            questHtml += '<p>question <span id = "current">' + (0 + wordList.length) + '</span> of <span id = "width">' + numQuestions + '</span></p>';
            questHtml += '</footer>';
            questHtml += '</div>';
            container.innerHTML = questHtml;
        // console.log(wordList);
    }
    // var endResult;
    timeHandler(time, wordList, mark); //call time
    
    // console.log(window.end);
    // if (end == true){
        // answer = window.end;
        // console.log(answer);
        // console.log('this is end ' + end)
    // }
    // console.log(end);
    // let val = document.getElementById("timeBar").getAttribute('value');
}

// askQuestion(wordList);
// console.log(wordList);

// restart();

start.onclick = () => {
    playerName = '';
    wordList = [];
    window.answerList = 0;
    if (playerName = player.textContent){
        time += 1;
        document.getElementById("progress").innerHTML = '<progress value="0" max="10" id="progressBar"></progress>';
        var timeLeft = time - 3;
        var gameLoader = setInterval(function(){
            if(timeLeft <= 0){
                clearInterval(gameLoader);
            }
            document.getElementById("progressBar").value = 10 - timeLeft;
            timeLeft -= 1;
        }, 1000);
        startGame(numQuestions, time);
    }
    else {
        error.innerHTML = 'Enter player name to begin';
    }
}


// b1.onclick = () => {
//     answer = opt1.textContent;
//     let correct = quests.questions[quests.currentQuestion][3];
//     if(answer.toUpperCase() === correct.toUpperCase()){
//         quests.score += quests.point;
//         quests.next();
//     } else {
//         console.log('you are wrong');
//         quests.next();
//     }

//     // convert answer to uppercase before checking
//     // update score, currentQuestioncall next page
// }



// quests.display();

// create a function to call the display or show result if question is exhusted