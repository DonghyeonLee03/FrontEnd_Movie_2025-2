import { BASE_URL } from "../constants/index.js";
import { options } from "./apiOptions.js";

export async function getSearch(keyword, page = 1) {
  try{
    const response = await fetch(`${BASE_URL}search/movie?query=${encodeURIComponent(keyword)}&include_adult=false&language=ko-KR&page=${page}`, options)
    const res = await response.json();
    return res;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
