//Get Bill Amount from input
//Store Service Rating in variable
//Get # of People sharing bill
//Calculate tip based on Bill Amount and # of People

let userBill;
let rating;
let people;

function getBill() {
    userBill = document.getElementById('amount').value;
    console.log(userBill);
}

function getRating() {
    rating = document.getElementById('rating').value;
    console.log(rating);
}

function getPeople() {
    people = document.getElementById('people').value
    console.log(people);
}

function calculate() {
    getBill();
    getRating();
    getPeople();

    if (people <= 3) {
        let tip = 0.20 * Number(userBill);
        tip = tip.toFixed(2);
        alert("$" + tip + " tip!");
    } else if (people > 3) {
        let tip = 0.25 * Number(userBill);
        tip = tip.toFixed(2);
        alert("$" + tip + " tip!")
    }
}