var letter = require("./letter.js");
var lettercorrect=false;
var wordChoices = ["Batman", "Blade", "Abraxos", "Storm", "Wonder Woman", "Black Canary", "Green Arrow", "Hawkeye", "The Punisher"];
var word = wordChoices[Math.floor(Math.random() * wordChoices.length)];
console.log(word);
userinput = process.argv[2];
console.log(userinput);
var check =function () {
  for (var i = 0; i < word.length; i++) {
    if (this.word.charAt(i).toLowercase() === userinput.toLowerCase()) {
      lettercorrect = true;
      console.log(userinput);
    } else {
      console.log("incorrect");
    }
  }
};


