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



//call history function
const avilableCoin = document.getElementById("avilable-coin");
let avilableCoinNum = parseInt(avilableCoin.innerText);
const callBtns = document.getElementsByClassName("call-btn");
const callInfo = document.getElementById("call-info");

for (let callBtn of callBtns) {
  callBtn.addEventListener("click", function () {
    if (avilableCoinNum >= 20) {
      // const card = callBtn.parentNode;
      // const title = card.querySelector("h1").innerText;
      // const number = card.querySelector("p").innerText;
      const card = callBtn.parentNode.parentNode; // দুই লেয়ার উপরে যাওয়া
      const title = card.getElementsByTagName("h1")[0].innerText;
      const number = card.getElementsByTagName("p")[0].innerText;

      // alert option
      alert(`📞 Calling ${title} ${number}...`);

      // coin balance
      avilableCoinNum -= 20;
      avilableCoin.innerText = avilableCoinNum;

      //call history
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="flex justify-between items-center p-4 mb-2.5 bg-[#fafafa]">
          <div>
            <h1 class="text-[18px] font-semibold">${title}</h1>
            <p class="text-[18px] font-normal text-[#5c5c5c]">${number}</p>
          </div>
          <p class="text-[14px] text-gray-500">${new Date().toLocaleTimeString()}
          </p>
        </div>
      `;
      callInfo.appendChild(div);
    } else {
      alert(
        "✖ You don’t have enough coins. At least 20 coins are required to make this call."
      );
    }
  });
}



// clear history
document.getElementById("clear-history").addEventListener("click", function () {
  callInfo.innerText = " ";
});