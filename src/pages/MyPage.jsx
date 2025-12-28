import { useState, useEffect } from "react";
import { useMovieList } from "../hooks/useMovieList"
import Card from "../components/Card";
import { list, moreBtn, myInfo, profile, photo, nickName, reviewCount, redNum, genre, header, modeBtn, listArea, myFrame } from "./style/MainPage.css"

export default function MyPage() {
  const {count, wishList, reviewList, totalResults, handleMore, resetPage} = useMovieList();
  const [mode, setMode] = useState("review");

  useEffect(()=>{
    resetPage(mode);
  },[mode]);

  return (
    <main>
      <section className={list}>
        <div className={myInfo}>
          <div className={profile}>
            <img className={photo} src="/src/assets/Vector.png" />
          </div>
          <p className={nickName}>이동현</p>
          <p className={reviewCount}>평가 영화 수 : <span className={redNum}>{`${reviewList.length}`}</span></p>
          <p className={genre}>선호 장르 : 공포, 액션, 로맨스</p>
        </div>
        <header className={header}>
          <button className={modeBtn} onClick={()=>{setMode("review")}}>평가한 영화</button>
          <button className={modeBtn} onClick={()=>{setMode("wish")}}>보고싶은 영화</button>
        </header>
        <div className={listArea}>
          {
            mode === "review"?(
              <>
                <div className={myFrame}>
                  {
                    reviewList.length > 0 ? (
                      reviewList.slice(0, count).map((item) => (
                        <Card key={item.id} movieInfo={item} />
                      ))
                    ) : (
                      <p>영화가 없습니다.</p>
                    )
                  }
                </div>
                {reviewList.length > 0 && count <= totalResults && (
                  <button className={moreBtn} onClick={handleMore}>더보기</button>
                )}
              </>
            ) : (
              <>
                <div className={myFrame}>
                  {
                    wishList.length > 0 ? (
                      wishList.slice(0, count).map((item) => (
                        <Card key={item.id} movieInfo={item} />
                      ))
                    ) : (
                      <p>영화가 없습니다.</p>
                    )
                  }
                </div>
                {wishList.length > 0 && count <= totalResults && (
                  <button className={moreBtn} onClick={handleMore}>더보기</button>
                )}
              </>
            )
          }
        </div>
      </section>
    </main>
  )
}
