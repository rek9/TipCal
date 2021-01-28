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

var slider = document.getElementById("range");
  var output = document.getElementById("value");
  var outputVar = document.getElementById("outputVar");

  let update = () => output.innerHTML = slider.value;

  slider.addEventListener('input', update);
  update();


function calculate() {
    getBill();
    getRating();
    getPeople();
    let tip = (output.innerHTML / 100) * Number(userBill);
    tip = tip.toFixed(2);
    alert("$" + tip + " tip!");
}