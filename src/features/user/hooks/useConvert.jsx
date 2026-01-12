import useUserListStore from "../store/userListStore";
import usePage from "../../../hooks/usePage";

export default function useConvert() {
  const { wishList, reviewList } = useUserListStore();
  const { mode } = usePage();

  if (mode === "wish") {
    return {
      movieList: wishList.data,
      totalResults: wishList.totalResults,
    };
  } else {
    return {
      movieList: reviewList.data,
      totalResults: reviewList.totalResults,
    };
  }
}
