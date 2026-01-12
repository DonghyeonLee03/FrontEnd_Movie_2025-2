import { BASE_URL } from "/src/constants/index.js";
import { options } from "/src/api/apiOptions.js";

export default async function getGenre() {
  const response = await fetch(
    `${BASE_URL}genre/movie/list?language=ko`,
    options
  );
  if (!response.ok) {
    throw new Error(response.status);
  }
  const res = await response.json();
  return res.genres;
}
