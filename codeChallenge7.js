
var Question = function(question, answerList, correctAnswer) {
    this.question = question;
    this.answerList = answerList;
    this.correctAnswer = correctAnswer;
}


var question1 = new Question('Is programming fun?', ['yes', 'no'], 1);
var question2 = new Question('Is your wife beautiful?', ['yes', 'no'], 1);



var questionList = [question1, question2];

console.log(questionList[0].question);

function render(questionList) {
    questionNumbers = questionList.length;
    pickedQuestion = questionList[Math.floor(Math.random() * questionNumbers)];
    console.log('Question: ' + pickedQuestion.question);
    console.log('Answsers: ');
    for (var i = 0; i < pickedQuestion.answerList.length; i++) {
        console.log(i+1 + '. ' + pickedQuestion.answerList[i]);
    }
    var text = prompt('your answser is (put question number)');
    console.log(text);
    if (text == pickedQuestion.correctAnswer) {
        console.log('Congraduation! Your answer is correct');
    } else {
        console.log('Incorrect! :(');
    }
}

render(questionList);
