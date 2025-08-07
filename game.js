let answer = Math.floor(Math.random() * 100) + 1;
let tries = 0;

document.getElementById('checkBtn').addEventListener('click', checkGuess);
document.getElementById('resetBtn').addEventListener('click', resetGame);

function checkGuess() {
  const guessInput = document.getElementById('guess');
  const resultDiv = document.getElementById('result');
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 100) {
    resultDiv.innerText = "1부터 100 사이의 숫자를 입력하세요!";
    return;
  }

  tries++;
  if (guess === answer) {
    resultDiv.innerText = `축하합니다! ${tries}번 만에 맞췄어요!`;
  } else if (guess < answer) {
    resultDiv.innerText = "좀 더 큰 숫자입니다!";
  } else {
    resultDiv.innerText = "좀 더 작은 숫자입니다!";
  }
}

function resetGame() {
  answer = Math.floor(Math.random() * 100) + 1;
  tries = 0;
  document.getElementById('guess').value = '';
  document.getElementById('result').innerText = '';
}