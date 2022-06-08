"use strict";

(function () {
    let userInput;

    while (true) {
        userInput = parseFloat(prompt("Pick an odd number between 1 and 50."));
        if (userInput % 2 !== 0 && userInput >= 1 && userInput <= 50) {
            break;
        }
    }

    for(let i = 1; i <= 50; i += 2) {
        if (i === userInput) {
            console.log("We're going to skip " + userInput + ":D");
            continue;
        }
        console.log(i);
    }

})();