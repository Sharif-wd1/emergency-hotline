//heart count function
const heartCount = document.getElementById("heart-count");
let heartCountNum = parseInt(heartCount.innerText);

const heartButtons = document.getElementsByClassName("heart-btn");

for (let btn of heartButtons) {
  btn.addEventListener("click", function () {
    heartCountNum += 1;
    heartCount.innerText = heartCountNum;
  });
}