import { create } from "zustand";

const useProfileStore = create((set) => ({
  isToggle: false,
  login: false,

  setIsToggle: (value) => set({ isToggle: value }),
  setLogin: (value) => set({ login: value }),
}));

export default useProfileStore;
