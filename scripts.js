let number = document.getElementById("number");
let decrease = document.getElementById("decreaseBtn");
let increase = document.getElementById("increaseBtn");
let reset = document.getElementById("resetBtn");
let count = 0;

function updateDisplay() {
    number.textContent = count;
    if (count < 0) {
        number.style.color = "red";
    } else if (count > 0){
        number.style.color = "green";
    } else {
        number.style.color = "";
    }
}

decrease.addEventListener("click", function() {
    count--;
    updateDisplay();
});

increase.addEventListener("click", function() {
    count++;
    updateDisplay();
});

reset.addEventListener("click", function() {
    count = 0;
    updateDisplay();
});

updateDisplay();