export function searchGenre(id){
  const cachekey = `movieGenre`;
  const cacheData = localStorage.getItem(cachekey);
  const res = JSON.parse(cacheData);
  for (let i=0;i<res.genres.length;i++){
    if (res.genres[i].id == id){
      return res.genres[i].name;
    }
  }
}
