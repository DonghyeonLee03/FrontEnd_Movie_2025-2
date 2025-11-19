import { listArea, searchInput, listInfo, homeLogo, searchUI, moreBtn } from "./ui/elements.js";
import { makeList } from "./movie/makeList.js";
import { removeItem } from "./utils/removeItem.js";

let currentMode = "popular";

moreBtn.addEventListener('click', function(){
  makeList(currentMode)
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
  let currentKeyword = localStorage.getItem("keyword");
  if(currentKeyword !== searchInput.value){
    localStorage.setItem("keyword", searchInput.value);
    removeItem(currentKeyword);
    currentKeyword = localStorage.getItem("keyword");
  }
  makeList(currentMode, currentKeyword);
  searchInput.value = '';
});

(function init(){
  currentMode = "popular";
  if (!localStorage.getItem("keyword")) localStorage.setItem("keyword", "init");
  makeList(currentMode);
})();
