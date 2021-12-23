let  increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");
let display = document.querySelector(".display");
let count = 0;


increase.addEventListener("click", () => {
  count++;
  display.innerHTML = count;
  counterStyle();
});

decrease.addEventListener("click", () => {
    count--;
    display.innerHTML = count;
    counterStyle();
  });

reset.addEventListener("click", () => {
    count=0;
    display.innerHTML = count;
  });

function counterStyle() {
  if (count < 0) {
    display.classList.add("negative");
  } else if (count > 0) {
    display.classList.add("positive");
  } 
  else {
    display.classList.remove("negative");
    display.classList.remove("positive");

  }
}

