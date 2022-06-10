(function () {
    "use strict";

    // create a circle object

    let circle = {
        radius: 3,


        getArea: function () {
            // TODO: complete this method
           return Math.PI * Math.pow(circle.radius, 2);
            // hint: area = pi * radius^2
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            // console.log(Math.floor( this.getArea()));
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            let area;
            if(doRounding) {
                console.log(area = Math.floor(this.getArea()));
            } else {
                console.log(area = this.getArea());
            }

            // console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
        }
    };

    // console.log(circle.getArea());
    // console.log(circle.logInfo(true));
    // console.log(circle.logInfo(false));


    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);

    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);


    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    let circleFive = {
        radius: 5,


        getAreaFive: function() {
            return Math.PI * Math.pow(circleFive.radius, 2);
        },

        logInfoFive: function(doRounding) {
            let area;
            if(doRounding) {
                console.log(area = Math.floor(this.getAreaFive()));
            } else {
                console.log(area = this.getAreaFive());
            }
        }
    }

    // log info about the circle
    console.log("Raw circle information");
    circleFive.logInfoFive(false);

    console.log("Circle information rounded to the nearest whole number");
    circleFive.logInfoFive(true);
})();