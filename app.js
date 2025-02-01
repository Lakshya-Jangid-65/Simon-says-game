let gameseq = [];
let userseq = [];

let started = false;
let score = 0;
let h3 = document.querySelector("h3");
let btns = ["yellow", "red", "green", "blue"];

document.addEventListener("keydown", function () {
  if (!started) {
    started = true;
    scoreup();
  }
});

function scoreup() {
  userseq = [];
  h3.innerText = `Score: ${score}`;
  score++;
  let index = Math.floor(Math.random() * 4);
  let color = btns[index];
  let btn = document.querySelector(`#${color}`);
  gameseq.push(color);
  console.log(gameseq);
  flashSequence();
}

function flashSequence() {
  gameseq.forEach((color, i) => {
    setTimeout(() => {
      let btn = document.querySelector(`#${color}`);
      btnflash(btn);
    }, i * 600); // Delay each flash by 600ms
  });
}

function btnflash(btn) {
  btn.classList.add("bg-white");
  setTimeout(function () {
    btn.classList.remove("bg-white");
  }, 300);
}

function btnpress() {
  let btn = this;
  btnflash(btn);
  let usercolor = btn.getAttribute("id");
  userseq.push(usercolor);
  console.log(userseq);
  let index = userseq.length - 1;
  checkseq(index);
}

let allbtns = document.querySelectorAll("button");
allbtns.forEach((btn) => {
  btn.addEventListener("click", btnpress);
});

function checkseq(index) {
  if (userseq[index] !== gameseq[index]) {
    h3.innerText = "Game Over! Press any key to start again";
    gameseq = [];
    started = false;
    score = 0;
  } else if (userseq.length == gameseq.length) {
    setTimeout(scoreup, 1000);
  }
}
