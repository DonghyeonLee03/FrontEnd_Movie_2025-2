import {
  listArea,
  searchInput,
  listInfo,
  homeLogo,
  searchUI,
  moreBtn,
  closeBtn,
  infoUI,
  movieTitle,
} from './ui/elements.js';
import { makeList } from './movie/makeList.js';
import { removeItem } from './utils/removeItem.js';
import { openModal, closeModal } from './movie/modal.js';
import { getGenre } from './apis/getGenre.js';
import { myScore, setStar } from './utils/myScore.js';

let currentMode = 'popular';

moreBtn.addEventListener('click', function () {
  const currentKeyword = localStorage.getItem('keyword') || null;
  makeList(currentMode, currentKeyword);
});
homeLogo.addEventListener('click', function () {
  listInfo.textContent = '지금 인기있는 영화';
  listArea.innerHTML = '';
  searchInput.value = '';
  currentMode = 'popular';
  makeList(currentMode);
});
searchUI.addEventListener('submit', function (e) {
  e.preventDefault();
  listInfo.textContent = `"${searchInput.value}" 검색 결과`;
  listArea.innerHTML = '';
  currentMode = 'search';
  let currentKeyword = localStorage.getItem('keyword') || null;
  if (currentKeyword !== searchInput.value) {
    localStorage.setItem('keyword', searchInput.value);
    removeItem(currentKeyword);
    currentKeyword = localStorage.getItem('keyword');
  }
  makeList(currentMode, currentKeyword);
  searchInput.value = '';
});

listArea.addEventListener('click', (e) => {
  const movie = e.target.closest('#movie');
  if (!movie) return;
  getGenre();
  openModal(movie);
  const score = myScore(movieTitle.textContent);
  setStar(score);
});

closeBtn.addEventListener('click', closeModal);
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

infoUI.addEventListener('mouseover', (e) => {
  const scoreBtn = e.target.closest('.scoreBtn');
  if (scoreBtn) {
    const score = myScore(movieTitle.textContent);
    setStar(score);
    let currentNode = scoreBtn;
    while (currentNode !== null) {
      const img = currentNode.querySelector('.myScore');
      if (img) {
        img.src = '../src/assets/star.svg';
      }
      currentNode = currentNode.previousSibling;
    }
  }
});

infoUI.addEventListener('mouseout', () => {
  const score = myScore(movieTitle.textContent);
  setStar(score);
});

infoUI.addEventListener('click', (e) => {
  const btnTarget = e.target.closest('.scoreBtn');
  const scoreBtn = infoUI.querySelectorAll('.scoreBtn');
  const btnArray = Array.from(scoreBtn);
  const index = btnArray.indexOf(btnTarget);

  myScore(movieTitle.textContent, index);
  setStar(index);
});

(function init() {
  currentMode = 'popular';
  makeList(currentMode);
  getGenre();
})();
