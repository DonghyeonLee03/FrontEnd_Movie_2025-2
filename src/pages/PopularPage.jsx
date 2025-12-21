import { getPopular } from "../api/getPopular";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Outlet } from "react-router-dom";

export default function PopularPage() {
  const [count, setCount] = useState(8);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(()=>{
    const fetchMovie = async () => {
      const data = await getPopular(page);
      if(data){
        setMovies(prev => [...prev, ...data.results]);
        setTotalResults(data.total_results);
      }
    }
    fetchMovie();
  }, [page]);

  function handleMore(){
    setCount(prev => prev+8);
    if(count > page * 20)
      setPage(prev => prev+1);
  }

  return (
    <>
      <Outlet />
      <main>
        <section className="list">
          <h1 id="listInfo">지금 인기있는 영화</h1>
          <div id="listArea" style={{color: 'white'}}>
            {
              movies.length > 0 ? (
                movies.slice(0, count).map((item) => (
                  <Card key={item.id} movieInfo={item} />
                ))
              ) : (
                <p style={{color: 'white'}}>영화가 없습니다.</p>
              )
            }
          </div>
          {movies.length > 0 && count <= totalResults && (
            <button id="moreBtn" onClick={handleMore}>더보기</button>
          )}
        </section>
      </main>
    </>
  );
}