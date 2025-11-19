export function removeItem(keyword){
  for (let i=0; i<localStorage.length; i++){
    let key = localStorage.key(i);

    if (key.includes(`${keyword}_page_`)){
      localStorage.removeItem(key);
    }
  }
}

export function removePopular(){
  for (let i=0; i<localStorage.length; i++){
    let key = localStorage.key(i);

    if (key.includes(`popularMovies_page_`)){
      localStorage.removeItem(key);
    }
  }
}
