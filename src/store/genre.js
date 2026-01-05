import { create } from "zustand";
import getGenre from "../api/getGenre";

const useGenreStore = create((set) => ({
  genreList: [],
  fetchGenre: async () => {
    const res = await getGenre();
    set({ genreList: res.genres });
  },
}));

export default useGenreStore;
