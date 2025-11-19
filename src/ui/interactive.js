import { IMAGE_URL } from "../constants/index.ts";

export function result(movieData){
  const poster = document.createElement("img");
  poster.src = `${IMAGE_URL}${movieData.poster_path}`;
  poster.style.borderRadius = "20px";
  poster.style.width = "100%";

  const title = document.createElement("p");
  title.textContent = `${movieData.title}`;
  title.style.color = "white";
  title.style.marginTop = "0";
  title.style.marginBottom = "10px";
  
  const star = document.createElement("img");
  star.style.justifySelf = "center";
  star.src = "../src/assets/star.svg";
  
  const score = document.createElement("div");
  score.textContent = `${movieData.vote_average.toFixed(1)}`;
  score.style.display = "flex";
  score.style.color = "white";
  score.style.marginBottom = "20px";
  score.appendChild(star);
  
  const movie = document.createElement("div");
  movie.appendChild(poster);
  movie.appendChild(title);
  movie.appendChild(score);

  return {movie, poster, title, star, score, movie};
}

export function noResult(){
  const koResult = document.createElement("p");
  koResult.textContent = "검색 결과가 없습니다.";
  koResult.style.fontSize = "40px";
  koResult.style.fontWeight = "700";
  koResult.style.color = "white";
  koResult.style.marginBottom = "0";

  const enResult = document.createElement("p");
  enResult.textContent = "No Search Result";
  enResult.style.fontSize = "30px";
  enResult.style.fontWeight = "700";
  enResult.style.color = "lightgray";
  enResult.style.marginTop = "20px";
  
  const result = document.createElement("div");
  result.style.gridColumn = "1/-1";
  result.appendChild(koResult);
  result.appendChild(enResult);

  return {result, koResult, enResult};
}
