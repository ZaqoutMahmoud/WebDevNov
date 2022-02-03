var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
var i = 0;
var myStringArray = ["a", "b", "c", "d"];
// var total = myStringArray.length;
var blockReachedZero = false;
function jump() {
  if (character.classList == "animate") {
    return;
  }
  character.classList.add("animate");
  setTimeout(function () {
    character.classList.remove("animate");
  }, 3000);
}
var checkDead = setInterval(function () {
  console.log("Running checkDead function");
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
    block.style.animation = "none";
    alert("Game Over. score: " + Math.floor(counter / 100));
    block.innerHTML = myStringArray[i];
    block.style.animation = "block 3s infinite linear";
  }
  // if the square crashes the red
  else if (blockLeft === 0 && !blockReachedZero) {
    moveToNextletter();
    updatei();
    blockReachedZero = true;
    // setInterval(interupter, 1);
  } else if (blockLeft > 0 && blockReachedZero) {
    blockReachedZero = false;
  } else {
    counter++;
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
  }
}, 10);
function moveToNextletter() {
  i++;
  if (i === myStringArray.length) i = 0;
}
function updatei() {
  block.innerHTML = myStringArray[i];
}
// function interupter() {
// console.log("why twice?");
// }
