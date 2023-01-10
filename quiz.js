// rules
// reset prototype
// scoring and question check
function Quiz(){
    // the question goes with the hint
    this.questions = [];
    // this.answeredQuest = 0;
    this.score = 0;
    this.currentQuestion = 0;
    this.point = 1;
}

// create next or done prototype

Quiz.prototype.next = function() {
    // go to next question
    if(this.currentQuestion < (this.questions.length - 1)){
        this.currentQuestion++;
        this.display();
    } else {
        let result = document.getElementById('container');
        result.innerHTML ="<h1 id = 'result'>you got <span>"+ this.score  + "/"+ this.point*this.questions.length+"</span> questions correct</h1>";
        // display result
        // this.currentQuestion = 0;
        // this.display();
    }
    // if(){

    // }
}