import { MyChoiceContext } from "../context/context";
import { useReducer, useState } from "react";

function wishReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        data: [...state.data, action.data],
        totalResults: state.totalResults + 1,
      };
    case "DELETE":
      return {
        data: state.data.filter((item) => item.id !== action.id),
        totalResults: state.totalResults - 1,
      };
    default:
      return state;
  }
}
function reviewReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        data: [...state.data, { ...action.data, score: action.score }],
        totalResults: state.totalResults + 1,
      };
    case "UPDATE":
      return {
        data: state.data.map((item) =>
          item.id === action.id ? { ...item, score: action.score } : item
        ),
      };
    default:
      return state;
  }
}

export default function MyChoiceProvider({ children }) {
  const [wishList, dispatchWish] = useReducer(wishReducer, {
    data: [],
    totalResults: 0,
  });
  const [reviewList, dispatchReview] = useReducer(reviewReducer, {
    data: [],
    totalResults: 0,
  });
  const [choice, setChoice] = useState(null);

  const updateWishList = (data) => {
    const isExisted = wishList.data.some((item) => item.id === data.id);
    if (!isExisted) {
      dispatchWish({ type: "ADD", data: data });
    } else {
      dispatchWish({ type: "DELETE", id: data.id });
    }
  };
  const updateReviewList = (data, score) => {
    const isExisted = reviewList.data.some((item) => item.id === data.id);
    if (!isExisted) {
      dispatchReview({ type: "ADD", data: data, score: score });
    } else {
      dispatchReview({ type: "UPDATE", id: data.id, score: score });
    }
  };
  const updateChoice = (data) => {
    setChoice(data);
  };

  return (
    <MyChoiceContext.Provider
      value={{
        wishList,
        reviewList,
        choice,
        updateWishList,
        updateReviewList,
        updateChoice,
      }}
    >
      {children}
    </MyChoiceContext.Provider>
  );
}
