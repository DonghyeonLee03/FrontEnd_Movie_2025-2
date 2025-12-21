import { BASE_URL } from "../constants/index.js";
import { options } from "./apiOptions.js";

export async function getPopular(page) {
  try{
    const response = await fetch(`${BASE_URL}movie/popular?language=ko-KR&page=${page}`, options)
    const res = await response.json();
    return res;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
