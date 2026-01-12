import { create } from "zustand";

const useModalStore = create((set) => ({
  isModal: false,
  choice: null,

  setIsModal: (value) => set({ isModal: value }),
  setChoice: (value) => set({ choice: value }),
}));

export default useModalStore;
