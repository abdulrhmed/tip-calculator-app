// calculator 


let dollar = document.getElementById("dollar");
let btn = document.querySelectorAll("btn");
let Custom = document.getElementById("Custom");
let people = document.getElementById("people");

let amount = document.getElementById("amount");
let Total = document.getElementById("Total");


function subtractValue(button) {

  if(+people.value !== 0){
    var buttonValue = parseInt(button.innerHTML);
    var gg = buttonValue/100
    var result = (+dollar.value + gg) / +people.value
    amount.innerHTML = `$${gg}`
    Total.innerHTML = `$${result.toFixed(2)}`
  }

}



function tatil(){
  if(people.value != ""){
    let num = (+dollar.value + +Custom.value) / +people.value;
    amount.innerHTML = `$${Custom.value}`
    Total.innerHTML = `$${num.toFixed(2)}`

  }
}


document.getElementById("Reset").addEventListener("click", function () {
  people.value = "";
  dollar.value = "";
  Custom.value = "";
  amount.innerHTML = "$0.00";
  Total.innerHTML = "$0.00";
});








document.getElementById("people").addEventListener("input", function () {
  if (this.value == 0) {
    document.getElementById("warning").style.display = "block";
    this.focus();
    this.style.borderColor = "red";
  } else {
    document.getElementById("warning").style.display = "none";
    this.style.borderColor = "";
  }
});