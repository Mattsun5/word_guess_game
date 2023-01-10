
// request object from scrammbler
// presents srammbled word for until timer elapse
// count objects up to NumOfQuestions times, new word is requested from scrammbler each timex
function Questions(){
    Quiz.call(this);
}

Questions.prototype = Object.create(Quiz.prototype);

Questions.prototype.addQuestion = function (question, option1, option2, correctOption){
    this.questions.push([question, option1, option2, correctOption]);
}
Questions.prototype.display = function() {
    let current = this.questions[this.currentQuestion];
    question.textContent = current[0];
    opt1.textContent = current[1];
    opt2.textContent = current[2];
    currentQuest.textContent = this.currentQuestion+1;
    width.textContent = this.questions.length;
    // result.style.display = 'none';
}
let quests = new Questions();

quests.addQuestion('who is the president of Nigeria?', 'Tinubu', 'Buhari', 'Buhari');
quests.addQuestion('how many states do Nigeria have?', '36', '150', '36');
quests.addQuestion('which is the capital city of Oyo state?', 'Nigeria', 'Ibadan', 'Ibadan');


