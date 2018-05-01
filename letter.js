
function Letter(character) {
    this.character = character;
    this.guessed = false;
    this.place = function () {
        if (this.guessed == false) {
            return ("_")
        } else (this.guessed == true) {
            return (this.character)
        };
    };
    Letter();
    module.exports = Letter;

