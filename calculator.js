window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  // select user inputs 
  const initAmount = document.querySelector("#loan-amount");
  const initYears = document.querySelector("#loan-years");
  const initRate = document.querySelector("#loan-rate");
  // default values in object input

  const values = { amount: 20000, years: 20, rate: 4.5 };

  // set the user inputs for each argument equal to the values
  //in the object 
  initAmount.value = values.amount;
  initYears.value = values.years;
  initRate.value = values.rate;
  //function to update the current monthly payments
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
 let currentValues = getCurrentUIValues();
 updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  return (
    (monthlyRate * values.amount) /
    (1 - Math.pow((1 + monthlyRate), -n))
  ).toFixed(2);

};

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const calcArea = document.getElementById("monthly-payment");
  calcArea.innerText = `$${monthly}`;
}
