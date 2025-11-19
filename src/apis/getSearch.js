import { BASE_URL } from "../constants/index.ts";
import { options } from "./apiOptions.js";
import { listUpdate } from "../ui/listUpdate.js";

export async function getSearch(keyword, page, index) {
  try{
    const cacheKey = `${keyword}_page_${page}`;
    const cacheData = localStorage.getItem(cacheKey);
    if (cacheData) {
      const res = JSON.parse(cacheData);
      listUpdate(res, index);
      return;
    }
    const response = await fetch(`${BASE_URL}search/movie?query=${encodeURIComponent(keyword)}&include_adult=false&language=ko-KR&page=${page}`, options)
    const res = await response.json();
    localStorage.setItem(cacheKey, JSON.stringify(res));
    listUpdate(res, index);
  } catch (error) {
    console.error("Error:", error);
  }
}
