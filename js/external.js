"use strict";

//let myAge = 19;//

//myAge = 19;//

//console.log(myAge = " was my age!");//

console.log("Hello from external Javascript");

alert("Welcome to my website!");

let userInput = prompt("What is your favorite color?");

alert("Wow, " + userInput +  " is my favorite color too!")
//console.log("My favorite color is white!" + userInput);

//You have rented some movies for your kids: The little mermaid (for 3 days),
//Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know
//yet if they're going to like it). If price for a movie per day is $3,
//how much will you have to pay?


let littleMermaid = 3;
let brotherBear = 5;
let hercules = 1;

littleMermaid === 3 * 3;
brotherBear === 5 * 3;
hercules === 3;

function priceOfMovies(x, y, z){
    return littleMermaid + brotherBear + hercules;
}

console.log(priceOfMovies(littleMermaid, brotherBear, hercules));


//Suppose you're working as a contractor for 3 companies: Google, Amazon and
//Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380,
//and Facebook $350. How much will you receive in payment for this week? You
//worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

let googlePay = 400 * 6;
let amazonPay = 380 * 4;
let facebookPay = 350 * 10;

let myPaycheck = googlePay + amazonPay + facebookPay;
console.log(myPaycheck);

function paycheck(x, y, z){
    return googlePay + amazonPay + facebookPay;
}
console.log(paycheck(googlePay, amazonPay, facebookPay));


// A student can be enrolled in a class only if the class is not full and the
// class schedule does not conflict with her current schedule.

let classNotFull = true
let noScheduleConflict = true

function enroll(x, y){
    if (classNotFull && noScheduleConflict){
        return true;
    } else {
        return false
    }
}
console.log(enroll)


let isOfferValid = confirm("Is the offer still valid?");

let hasMoreThanTwoItems = parseInt(prompt("How many items do you have in your cart?")) >= 2;

let isPremiumMember = confirm("Are you a premium member?");

let canUserUseOffer = (hasMoreThanTwoItems || isPremiumMember) && isOfferValid;

alert("You can use this offer is a " + canUserUseOffer + " statement.");