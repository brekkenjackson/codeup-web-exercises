(function (x, y) {
    "use strict";

    // create a circle object

    let getAreaRounded = Math.floor( 28.274333882308138);
    let circle = {
        radius: 3,
        area: 28,

        function () {
            // TODO: complete this method
           let getArea = Math.PI * Math.pow(circle.radius, 2);
            // hint: area = pi * radius^2

           // return console.log(getArea);
            console.log(getArea);
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            //console.log(Math.floor( 28.274333882308138));
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + getAreaRounded);
        }
    };



    // log info about the circle
    // console.log("Raw circle information");
    // circle.logInfo(false);
    // console.log("Circle information rounded to the nearest whole number");
    // circle.logInfo(true);
    //
    // console.log("=======================================================");
    // // TODO: Change the radius of the circle to 5.
    //
    // // log info about the circle
    // console.log("Raw circle information");
    // circle.logInfo(false);
    // console.log("Circle information rounded to the nearest whole number");
    // circle.logInfo(true);
})();