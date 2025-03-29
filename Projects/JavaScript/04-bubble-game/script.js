let bubbleBottom = document.querySelector(".bubbleBottom");
let hitNumber = document.getElementById("hitnum");
let timmer = document.getElementById("timmer");
let score = document.querySelector('#score')


let randomNumber;
let hitnum;
let timmerSec = 60;
let updateScore = 0;


let bubbleMaker = () => {
    for (let i = 1; i <= 152; i++) {
        randomNumber = Math.floor(Math.random() * 10);

        bubbleBottom.innerHTML += `<div class="bubbles">${randomNumber}</div>`;
    };
};


let timmerStart = () => {
    let timmerInt = setInterval(function () {
        if (timmerSec == 0) {
            clearInterval(timmerInt)
            timmer.innerHTML = "0"
            bubbleBottom.innerHTML = `<h1>Game Over... You Score ${updateScore}</h1>`
        } else {
            timmer.innerHTML = timmerSec-- + ' Sec'
        }
    }, 1000);

};

let randomHitNumber = () => {
    hitnum = Math.floor(Math.random() * 10);
    hitNumber.innerHTML = hitnum
};

let getClickedNum = () => {
    bubbleBottom.addEventListener("click", (val) => {
        let clickedNum = Number(val.target.innerText);

        if (clickedNum == hitnum) {
            updateScore += 10;
            score.innerHTML = updateScore;
            bubbleBottom.innerHTML = '';
            bubbleMaker();
        } else {
            updateScore -= 10;
            score.innerHTML = updateScore



        }
        randomHitNumber()
    });


}


bubbleMaker()
timmerStart()
randomHitNumber()
getClickedNum()