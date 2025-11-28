import { IMAGE_URL } from '../constants/index.ts';
import { searchGenre } from '../utils/searchGenre.js';
import { movieTitle, infoUI } from './elements.js';

export function result(movieData) {
  const poster = document.createElement('img');
  poster.id = 'poster';
  poster.src = `${IMAGE_URL}${movieData.poster_path}`;
  poster.style.borderRadius = '20px';
  poster.style.width = '100%';

  const title = document.createElement('p');
  title.id = 'title';
  title.textContent = `${movieData.title}`;
  title.style.color = 'white';
  title.style.marginTop = '0';
  title.style.marginBottom = '10px';

  const star = document.createElement('img');
  star.id = 'star';
  star.style.justifySelf = 'center';
  star.src = '../src/assets/star.svg';

  const score = document.createElement('div');
  score.id = 'score';
  score.textContent = `${movieData.vote_average.toFixed(1)}`;
  score.style.display = 'flex';
  score.style.color = 'white';
  score.style.marginBottom = '20px';
  score.appendChild(star);

  const movie = document.createElement('div');
  movie.id = 'movie';
  movie.appendChild(poster);
  movie.appendChild(title);
  movie.appendChild(score);

  return { movie, poster, title, star, score, movie };
}

export function noResult() {
  const koResult = document.createElement('p');
  koResult.textContent = '검색 결과가 없습니다.';
  koResult.style.fontSize = '40px';
  koResult.style.fontWeight = '700';
  koResult.style.color = 'white';
  koResult.style.marginBottom = '0';

  const enResult = document.createElement('p');
  enResult.textContent = 'No Search Result';
  enResult.style.fontSize = '30px';
  enResult.style.fontWeight = '700';
  enResult.style.color = 'lightgray';
  enResult.style.marginTop = '20px';

  const result = document.createElement('div');
  result.style.gridColumn = '1/-1';
  result.appendChild(koResult);
  result.appendChild(enResult);

  return { result, koResult, enResult };
}

export function modalResult(movieData, title) {
  if (!movieData) return;

  for (let i = 0; i < movieData.length; i++) {
    if (movieData[i].title == title) {
      movieTitle.textContent = `${title}`;

      const poster = document.createElement('img');
      poster.src = `${IMAGE_URL}${movieData[i].poster_path}`;
      poster.style.height = '100%';
      poster.style.marginRight = '30px';

      const genre = document.createElement('span');
      genre.style.color = 'white';
      genre.style.marginRight = '10px';
      for (let j = 0; j < movieData[i].genre_ids.length; j++) {
        const res = searchGenre(movieData[i].genre_ids[j]);
        if (genre.textContent === '') genre.textContent = `${res}`;
        else genre.textContent += `, ${res}`;
      }
      const star = document.createElement('img');
      star.src = '../src/assets/star.svg';
      star.style.display = 'inline-block';
      star.style.height = '100%';

      const score = document.createElement('span');
      score.textContent = `${movieData[i].vote_average.toFixed(1)}`;
      score.style.color = 'white';

      const movieInfo = document.createElement('div');
      movieInfo.style.display = 'flex';
      movieInfo.style.alignContent = 'center';
      movieInfo.style.marginBottom = '10px';
      movieInfo.appendChild(genre);
      movieInfo.appendChild(star);
      movieInfo.appendChild(score);

      const overview = document.createElement('div');
      overview.textContent = `${movieData[i].overview}`;
      overview.style.color = 'white';
      overview.style.height = '80%';

      const scoreBoard = document.createElement('div');
      scoreBoard.style.padding = '0px 15px';
      scoreBoard.style.display = 'flex';
      scoreBoard.style.height = '100%';
      scoreBoard.style.alignContent = 'center';
      scoreBoard.style.flexWrap = 'wrap';
      for (let i = 0; i < 5; i++) {
        const scoreBtn = document.createElement('button');
        scoreBtn.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        scoreBtn.style.border = 'none';
        scoreBtn.style.height = '55%';
        scoreBtn.style.padding = '0';
        scoreBtn.classList.add('scoreBtn');
        const btnImg = document.createElement('img');
        btnImg.classList.add('myScore');
        btnImg.src = '../src/assets/blank_star.png';
        btnImg.style.height = '100%';

        scoreBtn.appendChild(btnImg);
        scoreBoard.appendChild(scoreBtn);
      }

      const myScoreNum = document.createElement('span');
      myScoreNum.style.color = 'white';
      myScoreNum.textContent = '0';
      myScoreNum.style.fontSize = '15px';
      myScoreNum.classList.add('myScoreNum');

      const myScore = document.createElement('div');
      myScore.style.borderRadius = '15px';
      myScore.style.backgroundColor = '#404040';
      myScore.style.height = '60px';
      myScore.style.lineHeight = '60px';
      myScore.style.display = 'flex';
      myScore.style.flexWrap = 'wrap';
      myScore.style.alignContent = 'center';
      myScore.textContent = '내 별점 ';
      myScore.style.color = 'white';
      myScore.style.fontSize = '15px';
      myScore.style.paddingLeft = '20px';
      myScore.appendChild(scoreBoard);
      myScore.appendChild(myScoreNum);

      const textArea = document.createElement('div');
      textArea.style.width = '55%';
      textArea.style.display = 'flex';
      textArea.style.flexDirection = 'column';

      textArea.appendChild(movieInfo);
      textArea.appendChild(overview);
      textArea.appendChild(myScore);

      infoUI.appendChild(poster);
      infoUI.appendChild(textArea);
    }
  }
}
