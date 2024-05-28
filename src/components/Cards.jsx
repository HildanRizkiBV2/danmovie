import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Cards = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODc1NWJkNWRhMGRhMWVkMTc3NDczZWYxYzQxYzNiOCIsInN1YiI6IjY2NTU0MDZmYTA2M2Y1Zjc2NWUzNzU5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qmmjcxPJPCHDH-Jr1HgVEdfsHyIws-5So3K4EM7MbJA",
      },
    };
    const api_endpoint = "https://api.themoviedb.org/3/trending/movie/day";
    fetch(api_endpoint, options)
      .then((response) => response.json())
      .then((response) => setMovies(response))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <Link to="/populer" className="populer">
        Populer
      </Link>
      <div className="container">
        {movies?.results?.map((movie) => (
          <div key={movie.id} className="cards">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
