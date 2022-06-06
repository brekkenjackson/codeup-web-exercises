"use strict";


function showMultiplicationTable(num){
    for(let i = 1; i <= 10; i++){
        let product = num * i;
        console.log(num + " x " + i + " = " + product);
    }
}
showMultiplicationTable(9);


for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 180) + 20;

    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is even :D");
    } else {
        console.log(randomNumber + " is odd :(");
    }
}


for (let i = 1; i <= 10; i++) {
    console.log((i % 10).toString().repeat(i));
}


for (let i = 1; i <= 10; i++) {
   console.log((i % 10).toString().repeat(i));
}


for(let i = 100; i >= 5; i -= 5) {
    console.log(i);
}


