
(function() {
    var Question = function(question, answerList, correctAnswer) {
        this.question = question;
        this.answerList = answerList;
        this.correctAnswer = correctAnswer;
    }
    
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answerList.length; i++) {
            console.log(i + '. ' + this.answerList[i]);
        }
    }
    

    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correctAnswer) {
            score++;
            console.log('Correct answer');
        } else {
            console.log('Incorrect answer');
        }
    }
    
    var question1 = new Question('Is programming fun?', ['yes', 'no'], 0);
    var question2 = new Question('Is your wife beautiful?', ['yes', 'no'], 0);
    var question3 = new Question('Who teaches this course?', ['John', 'Micheal', 'Jonas'], 2);
    
    var questionList = [question1, question2, question3];

    var score = 0;
    while (questionList.length) {
        var n = Math.floor(Math.random() * questionList.length);
        questionList[n].displayQuestion();
        var answer = parseInt(prompt('Please select the correct answer.'));
        questionList[n].checkAnswer(answer);
        console.log('User current score is ' + score);
        questionList.splice(n, 1);
    } 
    if (!questionList.length) {
        console.log('No more questions');
    }
    
})();

