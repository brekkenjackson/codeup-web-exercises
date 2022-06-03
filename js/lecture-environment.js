console.log("Function time!");

//parameters: are set when a function is defined
//arguments: are passed in when a function is called

function helloWorld(){
    alert("Hello World!")
    //must call the function for it to work (like below)
} helloWorld();

//more advanced function with parameters to allow arguments
function sumNums(x, y) { //inside parenthesis, we have 2 parameters allowing for the taking in of two pieces of info
    return x + y;
}
//calling function with arguments: sumNums(2, 8) - look how we don't have to repeat ourselves, I called function through arguments
alert("I am going to sum up " + x + " and " + y + " for you user!");

sumNums(2,8);

//Anonymous function: No name/ identifier piece
let honkHorn = function(){
    alert("hong honk");
    //called a function expression vs a function declaration [VOCAB PIECE]
}

///Hoisting - calling a declared function before it is defined
//function expressions will not hoist
duckcall();
let duckCall = function(){
    alert(QUACK);
}

let duckSound = function(){
    alert(qUaCk);
}
duckSound();

// default parameters: let's say you have 2 parameters if one parameter is
// default then if you only insert one parameter into the function,
// it will automatically plug in that set default parameter.
// If you do insert two parameters with still having one et as a default,
// it will void the default and use the two ypu just inserted.

function sumNumsWithDefault(x, y = 5  ){
    return x, y
}
sumNumsWithDefault(7);

//SCOPE