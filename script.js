

let restaurant;
let userBill;
let rating;
let comment;

//Get restaurant name

function getRestaurant() {
    restaurant = document.getElementById('restaurant').value;
    console.log(restaurant);
}
//Get Bill Amount from input

function getBill() {
    userBill = document.getElementById('amount').value;
    console.log(userBill);
}


//Store Service Rating in variable

function getRating() {
    rating = document.getElementById('rating').value;
    console.log(rating);
}


// Get additional comments

function getComment() {
    comment = document.getElementById('comment').value
    console.log(comment);
}


// Slider Functionality (Disabled) //

/* var slider = document.getElementById("range");
  var output = document.getElementById("value");
  var outputVar = document.getElementById("outputVar");

  let update = () => output.innerHTML = slider.value;

  slider.addEventListener('input', update);
  update(); */


//Calculate tip based on Bill Amount and inject into modal.

function calculate() {
    getRestaurant()
    getBill();
    getRating();
    getComment();
    
    if (rating == 'Great') {
        let tip = 0.2 * Number(userBill);
        tip = tip.toFixed(2);
        let tipInject = document.getElementById('modal-body');
        tipInject.innerHTML = tip;    
    } else if (rating == 'Okay') {
        let tip = 0.15 * Number(userBill);
        tip = tip.toFixed(2);
        let tipInject = document.getElementById('modal-body');
        tipInject.innerHTML = tip;
    } else if (rating == 'Poor') {
        let tip = 0.05 * Number(userBill);
        tip = tip.toFixed(2);
        let tipInject = document.getElementById('modal-body');
        tipInject.innerHTML = tip;
    }
}



// Modal Functionality. WIP.

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    })
})


   
function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}