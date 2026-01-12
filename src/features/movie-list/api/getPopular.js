import { BASE_URL } from "../../../constants/index.js";
import { options } from "../../../api/apiOptions.js";

export default async function getPopular(page) {
  const response = await fetch(
    `${BASE_URL}movie/popular?language=ko-KR&page=${page}`,
    options
  );
  if (!response.ok) {
    throw new Error(response.status);
  }
  const res = await response.json();
  return res;
}
