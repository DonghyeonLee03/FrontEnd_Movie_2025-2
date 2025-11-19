import { getSearch } from "../apis/getSearch.js";
import { getPopular } from "../apis/getPopular.js";
import { listArea } from "../ui/elements";

export async function makeList(currentMode, currentKeyword=null){
  for (let i = 0; i<8; i++){
    const index = listArea.childElementCount;
    if(currentMode === 'search' && currentKeyword){
      await getSearch(currentKeyword, Math.floor(index/20)+1, index%20);
    }
    else{
      await getPopular(Math.floor(index/20)+1, index%20)
    }
  }
}
