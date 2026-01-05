import { create } from "zustand";

const useGlobalStore = create((set) => ({
  login: false,
  isModal: false,

  setLogin: (value) => set({ login: value }),
  setIsModal: (value) => set({ isModal: value }),
}));

export default useGlobalStore;
