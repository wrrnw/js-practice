
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
    

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        if (ans === this.correctAnswer) {
            console.log('Correct answer');
            sc = callback(true);
        } else {
            console.log('Incorrect answer');
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    
    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('-----------------------------');
    }

    var question1 = new Question('Is programming fun?', ['yes', 'no'], 0);
    var question2 = new Question('Is your wife beautiful?', ['yes', 'no'], 0);
    var question3 = new Question('Who teaches this course?', ['John', 'Micheal', 'Jonas'], 2);
    
    var questionList = [question1, question2, question3];

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc ++;
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion() {
        var n = Math.floor(Math.random() * questionList.length);
        questionList[n].displayQuestion();
        var answer = prompt('Please select the correct answer.');
        
        if (answer !== 'exit') {
            questionList[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }  
    }

    nextQuestion();

    
})();

