export function myScore(movieTitle, score){
  let myScore = JSON.parse(localStorage.getItem("myScore")) || {};
  myScore[movieTitle] = score;
  localStorage.setItem("myScore", JSON.stringify(myScore));
}