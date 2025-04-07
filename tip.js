var billamnt = document.getElementById("billAmount");
var prcnt10 = document.getElementById("tip10");
var prcnt15 = document.getElementById("tip15");
var prcnt20 = document.getElementById("tip20");
var notp = document.getElementById("noTip");
var cal =document.getElementById("calculate");
var ttlamnt = document.getElementById("totalAmount");

var tip;
var total=0;
 //if tip is 10%
prcnt10.addEventListener("click" , function(){
     var input =parseFloat(billamnt.value);
     tip =parseFloat((input * 10)/100);
     total = input + tip;
})
//if tip is 15%
prcnt15.addEventListener("click" , function(){
     var input =parseFloat(billamnt.value);
     tip = parseFloat((input * 15)/100);
     total = input + tip;
})
//if tip is 20%
prcnt20.addEventListener("click" , function(){
     var input =parseFloat(billamnt.value);
     tip =parseFloat((input * 20)/100);
     total = input + tip;
})
//if there is no tip
notp.addEventListener("click" , function(){
     var input =parseFloat(billamnt.value);
     total = input ;
})

cal.addEventListener("click", function () {
     ttlamnt.textContent = "Total Amount: ₹" + total.toFixed(2);
});

     

//chatgptt code---------------------------------------------------------------------------------------------------------------------------------------
// var billamnt = document.getElementById("billAmount");
// var prcnt10 = document.getElementById("tip10");
// var prcnt15 = document.getElementById("tip15");
// var prcnt20 = document.getElementById("tip20");
// var notp = document.getElementById("noTip");
// var cal = document.getElementById("calculate");
// var ttlamnt = document.getElementById("totalAmount");

// var total = 0;

// // Function to calculate total based on tip percentage
// function calculateTotal(tipPercent) {
//     var input = parseFloat(billamnt.value);

//     if (isNaN(input) || input <= 0) {
//         ttlamnt.textContent = "Enter a valid bill amount!";
//         return;
//     }

//     var tip = (input * tipPercent) / 100;
//     total = input + tip;
// }

// // Event listeners for tip selection
// prcnt10.addEventListener("click", function () {
//     calculateTotal(10);
// });
// prcnt15.addEventListener("click", function () {
//     calculateTotal(15);
// });
// prcnt20.addEventListener("click", function () {
//     calculateTotal(20);
// });
// notp.addEventListener("click", function () {
//     calculateTotal(0);
// });

// // Event listener for Calculate button
// cal.addEventListener("click", function () {
//     if (total === 0) {
//         ttlamnt.textContent = "Please select a tip!";
//     } else {
//         ttlamnt.textContent = "Total Amount: ₹" + total.toFixed(2);
//     }
// });
