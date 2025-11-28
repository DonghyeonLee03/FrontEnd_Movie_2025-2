import { BASE_URL } from '../constants/index.ts';
import { options } from './apiOptions.js';

export async function getGenre() {
  try {
    const cacheKey = `movieGenre`;
    const cacheData = localStorage.getItem(cacheKey);
    if (!cacheData) {
      const response = await fetch(`${BASE_URL}genre/movie/list?language=ko`, options);
      const res = await response.json();
      localStorage.setItem(cacheKey, JSON.stringify(res));
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
