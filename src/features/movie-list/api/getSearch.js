import { BASE_URL } from "../../../constants/index.js";
import { options } from "../../../api/apiOptions.js";

export default async function getSearch(keyword, page = 1) {
  const response = await fetch(
    `${BASE_URL}search/movie?query=${encodeURIComponent(
      keyword
    )}&include_adult=false&language=ko-KR&page=${page}`,
    options
  );
  if (!response.ok) {
    throw new Error(response.status);
  }
  const res = await response.json();
  return res;
}
