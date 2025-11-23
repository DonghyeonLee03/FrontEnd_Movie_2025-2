import { listArea, searchInput, listInfo, homeLogo, searchUI, moreBtn, closeBtn } from "./ui/elements.js";
import { makeList } from "./movie/makeList.js";
import { removeItem } from "./utils/removeItem.js";
import { openModal, closeModal } from "./movie/modal.js";
import { getGenre } from "./apis/getGenre.js";

let currentMode = "popular";

moreBtn.addEventListener('click', function(){
  const currentKeyword = localStorage.getItem("keyword") || null;
  makeList(currentMode, currentKeyword);
});
homeLogo.addEventListener('click', function(){
  listInfo.textContent = "지금 인기있는 영화";
  listArea.innerHTML = '';
  searchInput.value = '';
  currentMode = "popular";
  makeList(currentMode);
});
searchUI.addEventListener('submit', function(e){
  e.preventDefault();
  listInfo.textContent = `"${searchInput.value}" 검색 결과`;
  listArea.innerHTML = '';
  currentMode = "search";
  let currentKeyword = localStorage.getItem("keyword") || null;
  if(currentKeyword !== searchInput.value){
    localStorage.setItem("keyword", searchInput.value);
    removeItem(currentKeyword);
    currentKeyword = localStorage.getItem("keyword");
  }
  makeList(currentMode, currentKeyword);
  searchInput.value = '';
});

listArea.addEventListener('click', (e)=>{
  const movie = e.target.closest("#movie");
  if(!movie)  return;
  getGenre();
  openModal(movie);
})

closeBtn.addEventListener('click', closeModal);

(function init(){
  currentMode = "popular";
  makeList(currentMode);
})();
