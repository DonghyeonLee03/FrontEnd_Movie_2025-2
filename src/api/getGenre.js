import { BASE_URL } from "../constants/index.js";
import { options } from "./apiOptions.js";

export default async function getGenre() {
  try {
    const response = await fetch(
      `${BASE_URL}genre/movie/list?language=ko`,
      options
    );
    const res = await response.json();
    return res;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
