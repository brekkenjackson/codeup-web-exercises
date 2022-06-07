"use strict";


(function () {

    let num = 1;
    while (num < 65536) {
        num *= 2;
        console.log(num);
    }


function iceCreamTruckCompany() {
    let totalCones = Math.floor(Math.random() * 50) + 50;
    let numberOfCustomers = 0

    do {
        numberOfCustomers++;
        let customerPurchase = Math.floor(Math.random() * 5) + 1;
        console.log("Customer buys " + customerPurchase + " cones. We have " + totalCones + " left.");
        if (customerPurchase > totalCones) {
            console.log("We do not have enough cones for that, sorry!");
        } else {
            totalCones -= customerPurchase;
            console.log("Coming right up! We still have " + totalCones + " cones left!");
        }
    } while (totalCones > 0);

    console.log("Holy cow! We sold every cone and it only took us " + numberOfCustomers + " customers!");
}

iceCreamTruckCompany();

})();