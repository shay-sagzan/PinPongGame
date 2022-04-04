const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const resetButton = document.querySelector('#resbtn');
const WinningScoreSelect = document.querySelector('#playto');

let btn1Score = 0;
let btn2Score = 0;
let winningScore = 5;
let isGameOver = false;

btn1.addEventListener('click', function () {
    if (!isGameOver) {
        btn1Score += 1;
        if (btn1Score === winningScore) {
            isGameOver = true;
            p1.classList.add('has-text-success');
            p2.classList.add('has-text-danger');
            btn1.disabled = true;
            btn2.disabled = true;
        }
        p1.textContent = btn1Score;
    }
})

btn2.addEventListener('click', function () {
    if (!isGameOver) {
        btn2Score += 1;
        if (btn2Score === winningScore) {
            isGameOver = true;
            p2.classList.add('has-text-success');
            p1.classList.add('has-text-danger');
            btn1.disabled = true;
            btn2.disabled = true;
        }
        p2.textContent = btn2Score;
    }
})

WinningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    btn1Score = 0;
    btn2Score = 0;
    p1.textContent = 0;
    p2.textContent = 0;
    p1.classList.remove('has-text-success', 'has-text-danger');
    p2.classList.remove('has-text-success', 'has-text-danger');
    btn1.disabled = false;
    btn2.disabled = false;
}



