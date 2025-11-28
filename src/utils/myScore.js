const comment = [
  '매우 불만족이에요',
  '불만족이에요',
  '보통이에요',
  '만족이에요',
  '매우 만족이에요',
];

export function myScore(movieTitle, score = null) {
  let myScore = JSON.parse(localStorage.getItem('myScore')) || {};
  if (score === null) {
    if (myScore[movieTitle] !== undefined) {
      return myScore[movieTitle];
    }
    return -1;
  }
  myScore[movieTitle] = score;
  localStorage.setItem('myScore', JSON.stringify(myScore));
}

export function setStar(index) {
  const scoreBtn = document.querySelectorAll('.scoreBtn');
  const btnArray = Array.from(scoreBtn);
  scoreBtn.forEach((star) => {
    if (btnArray.indexOf(star) <= index) {
      star.querySelector('.myScore').src = '../src/assets/star.svg';
    } else star.querySelector('.myScore').src = '../src/assets/blank_star.png';
  });
  if (index === -1) return;
  document.querySelector('.myScoreNum').textContent = `${(index + 1) * 2}  ${comment[index]}`;
}
