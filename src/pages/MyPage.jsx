import Card from "../components/Card";
import {
  list,
  moreBtn,
  myInfo,
  profile,
  photo,
  nickName,
  reviewCount,
  redNum,
  genre,
  header,
  modeBtn,
  select,
  listArea,
  myFrame,
} from "./style/MainPage.css";
import useMovieList from "../hooks/useMovieList";
import usePage from "../hooks/usePage";
import useMyChoiceStore from "../store/MyChoiceStore";

export default function MyPage() {
  const { reviewList } = useMyChoiceStore();
  const { toggleMode } = usePage();
  const { movieList, count, mode, totalResults, handleMore } =
    useMovieList("MYPAGE");

  const handleReview = () => {
    toggleMode("review");
  };
  const handleWish = () => {
    toggleMode("wish");
  };

  return (
    <main>
      <section className={list}>
        <div className={myInfo}>
          <div className={profile}>
            <img className={photo} src="/src/assets/Vector.png" />
          </div>
          <p className={nickName}>이동현</p>
          <p className={reviewCount}>
            평가 영화 수 :{" "}
            <span className={redNum}>{reviewList.totalResults || 0}</span>
          </p>
          <p className={genre}>선호 장르 : 공포, 액션, 로맨스</p>
        </div>
        <header className={header}>
          <button
            className={`${modeBtn} ${mode === "review" ? select : ""}`}
            onClick={handleReview}
          >
            평가한 영화
          </button>
          <button
            className={`${modeBtn} ${mode === "wish" ? select : ""}`}
            onClick={handleWish}
          >
            보고싶은 영화
          </button>
        </header>
        <div className={listArea}>
          <div className={myFrame}>
            {movieList?.length > 0 ? (
              movieList
                .slice(0, count)
                .map((item) => <Card key={item.id} movieInfo={item} />)
            ) : (
              <p>영화가 없습니다.</p>
            )}
          </div>
          {movieList?.length > 0 && count <= totalResults && (
            <button className={moreBtn} onClick={handleMore}>
              더보기
            </button>
          )}
        </div>
      </section>
    </main>
  );
}
