var inquirer = require("requirer");
var Letter = require("./letter");
var Word = require("./word");
var guesscount = 0;
var guessarray = [];

var userinput = function () {
    if (guesscount < 10) {
        console.log("Guesses Remaining: " + 10 - guesscount);

        inquirer.prompt([
            {
                name: "letterguess",
                message: "Guess a letter"
            }
        ]).then(function (answers) {
            var newAnswers = answers.letterguess
            guessarray.push(newAnswers); guesscount++;
            userinput();
        });
    } else {
        console.log("No more guesses")
    }


}
