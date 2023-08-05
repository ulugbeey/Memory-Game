const emojis = [
  "😎",
  "😎",
  "🤣",
  "🤣",
  "😍",
  "😍",
  "❤️",
  "❤️",
  "😶‍🌫️",
  "😶‍🌫️",
  "🫠",
  "🫠",
  "🤑",
  "🤑",
  "👺",
  "👺",
];
const modalOpen = document.querySelector(".modal");
const modalClose = document.querySelector(".fas");

document.ondragstart = noselect;
document.onselectstart = noselect;
document.oncontextmenu = noselect;
function noselect() {
  return false;
}

var shufEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (var i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = shufEmojis[i];

  box.onclick = function () {
    this.classList.add("boxOpen");
    setTimeout(function () {
      if (document.querySelectorAll(".boxOpen").length > 1) {
        if (
          document.querySelectorAll(".boxOpen")[0].innerHTML ==
          document.querySelectorAll(".boxOpen")[1].innerHTML
        ) {
          document.querySelectorAll(".boxOpen")[0].classList.add("boxMatch");
          document.querySelectorAll(".boxOpen")[1].classList.add("boxMatch");

          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");

          if (document.querySelectorAll(".boxMatch").length == emojis.length) {
            modalOpen.classList.add("active");
          }
        } else {
          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
        }
      }
    }, 500);
  };

  modalClose.addEventListener("click", function () {
    modalOpen.classList.remove("active");

    window.location.reload();
  });

  document.querySelector(".game").appendChild(box);
}