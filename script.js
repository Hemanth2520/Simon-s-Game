let userseq = [];
let gameseq = [];
let level = 0;
let started = false;

let btns = ["green", "red", "yellow", "purple"];

let h2 = document.querySelector("h2");
document.addEventListener("keydown", function () {
    if (!started) {
        started = true;
        levelup();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 300);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 300);
}

function levelup() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let raninx = Math.floor(Math.random() * 4);
    let rancolor = btns[raninx];
    let ranbtn = document.querySelector(`.${rancolor}`);

    gameseq.push(rancolor);
    gameflash(ranbtn);
}

function checkans(idx) {
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length === gameseq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your Score: <b>${level}</b><br>Press any key to restart`;
        document.body.style.backgroundColor = "red";
        setTimeout(() => {
            document.body.style.backgroundColor = "black";
        }, 500);
        reset();
    }
}

function btnpress() {
    let btn = this;
    userflash(btn);
    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length - 1);
}

let allbtn = document.querySelectorAll(".btn");
allbtn.forEach(btn => btn.addEventListener("click", btnpress));

function reset() {
    started = false;
    userseq = [];
    gameseq = [];
    level = 0;
}
