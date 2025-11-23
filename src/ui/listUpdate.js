import { result, noResult } from "./interactive.js";
import { listArea, moreBtn } from "./elements.js";
import { openModal } from "../movie/modal.js";

function btnDisplay(display){
  moreBtn.style.display = `${display}`;
}

function isFull(listSize){
  return listSize === listArea.childElementCount;
}

export function listUpdate(datalist, index){
  if (isFull(datalist.total_results)){
    if (datalist.total_results === 0){
      const {result} = noResult();
      listArea.appendChild(result);
    }
    btnDisplay("none");
  }else{
    const {movie} = result(datalist.results[index]);
    listArea.appendChild(movie);
    btnDisplay("block");
  }
}
