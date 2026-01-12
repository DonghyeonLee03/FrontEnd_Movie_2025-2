import Card from "../features/movie-list/components/Card";
import * as style from "./MainPage.css";
import useMovieList from "../hooks/useMovieList";
import useConvert from "../features/user/hooks/useConvert";
import usePage from "../hooks/usePage";
import useUserListStore from "../features/user/store/userListStore";

export default function MyPage() {
  const { reviewList } = useUserListStore();
  const { mode, toggleMode } = usePage();
  const { movieList, totalResults } = useConvert();
  const { count, handleMore } = useMovieList("MYPAGE");

  const handleReview = () => {
    toggleMode("review");
  };
  const handleWish = () => {
    toggleMode("wish");
  };

  return (
    <section className={style.list}>
      <div className={style.myInfo}>
        <div className={style.profile}>
          <img className={style.photo} src="/src/assets/Vector.png" />
        </div>
        <p className={style.nickName}>이동현</p>
        <p className={style.reviewCount}>
          {"평가 영화 수 : "}
          <span className={style.redNum}>{reviewList?.totalResults || 0}</span>
        </p>
        <p className={style.genre}>선호 장르 : 공포, 액션, 로맨스</p>
      </div>
      <header className={style.header}>
        <button
          className={`${style.modeBtn} ${
            mode === "review" ? style.select : ""
          }`}
          onClick={handleReview}
        >
          평가한 영화
        </button>
        <button
          className={`${style.modeBtn} ${mode === "wish" ? style.select : ""}`}
          onClick={handleWish}
        >
          보고싶은 영화
        </button>
      </header>
      <div className={style.listArea}>
        <div className={style.myFrame} key={mode}>
          {movieList?.length > 0 ? (
            movieList
              .slice(0, count)
              .map((item) => <Card key={item.id} movieInfo={item} />)
          ) : (
            <p>영화가 없습니다.</p>
          )}
        </div>
        {movieList?.length > 0 && count <= totalResults && (
          <button className={style.moreBtn} onClick={handleMore}>
            더보기
          </button>
        )}
      </div>
    </section>
  );
}
