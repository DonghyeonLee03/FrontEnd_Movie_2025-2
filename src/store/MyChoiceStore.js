import { create } from "zustand";

const useMyChoiceStore = create((set) => ({
  wishList: {
    data: [],
    totalResults: 0,
  },
  reviewList: {
    data: [],
    totalResults: 0,
  },
  choice: null,

  updateWishList: (data) =>
    set((state) => {
      const isExisted = state.wishList.data.some((item) => item.id === data.id);

      if (!isExisted) {
        return {
          wishList: {
            data: [...state.wishList.data, data],
            totalResults: state.wishList.totalResults + 1,
          },
        };
      } else {
        return {
          wishList: {
            data: state.wishList.data.filter((item) => item.id !== data.id),
            totalResults: state.wishList.totalResults - 1,
          },
        };
      }
    }),
  updateReviewList: (data, score) =>
    set((state) => {
      const isExisted = state.reviewList.data.some(
        (item) => item.id === data.id
      );

      if (!isExisted) {
        return {
          reviewList: {
            data: [...state.reviewList.data, { ...data, score: score }],
            totalResults: state.reviewList.totalResults + 1,
          },
        };
      } else {
        return {
          reviewList: {
            data: state.reviewList.data.map((item) =>
              item.id === data.id ? { ...item, score: score } : item
            ),
          },
        };
      }
    }),
  updateChoice: (data) => set({ choice: data }),
}));

export default useMyChoiceStore;
