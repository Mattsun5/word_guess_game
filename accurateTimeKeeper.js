// counts down from settime when called
// export default TimerHandler;
export default function timeHandler(time, wordList, mark){
  let timeSpace =  document.getElementById("timeBar");
  var timeSec = time;

  // console.log(wordList[wordList.length - 1]);
  var quizTimer = setInterval(function(){
    if(timeSec <= 0){
      
            // console.log(wordList[wordList.length()]);
      clearInterval(quizTimer);
      timeSpace.innerHTML = "complete";
      if (document.getElementById("timeBar").textContent === "complete"){
        let remark = '<div><h1>you scored ' + window.answerList + '</h1><br />';
        remark += '<p>you got ' + window.answerList/mark + ' questions right</p>';
        remark += '<button onclick = "replayF()" id = "replay">Go to home</button></div>';
        document.getElementById("container").innerHTML = remark;
    }
      // return true;
    } 
    else if (timeSec < 2){ 
      timeSpace.innerHTML = timeSec + " seconds";
      if(document.getElementById('divAnswer').textContent.toLowerCase() === wordList[wordList.length - 1].toLowerCase()){


        console.log(window.answerList += mark); 
      }
    }
    else {
      timeSpace.innerHTML = timeSec + " seconds";
    }
    timeSec -= 1;
  }, 1000);
  // return window.end;
}