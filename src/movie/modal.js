import { modal, infoUI } from '../ui/elements.js';
import { modalResult } from '../ui/interactive.js';

export function openModal(movie) {
  try {
    modal.style.display = 'flex';
    const title = movie.querySelector('#title').textContent;
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);

      const cacheData = localStorage.getItem(key);
      if (cacheData) {
        const res = JSON.parse(cacheData);
        modalResult(res.results, title);
      }
    }
  } catch (error) {
    return;
  }
}

export function closeModal() {
  modal.style.display = 'none';
  infoUI.innerHTML = '';
}
