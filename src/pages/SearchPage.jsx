import { getSearch } from "../api/getSearch";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useParams, Outlet } from "react-router-dom";

export default function SearchPage() {
  const [count, setCount] = useState(8);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  const {query} = useParams();

  useEffect(()=>{
    const fetchMovie = async () => {
      const data = await getSearch(query, page);
      if(data){
        setMovies(prev => [...prev, ...data.results]);
        setTotalResults(data.total_results);
      }
    }
    fetchMovie();
  }, [query, page]);

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
          <h1 id="listInfo">{`"${query}" 검색 결과`}</h1>
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