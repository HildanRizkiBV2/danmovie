import { useEffect, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
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

    fetch(
      `https://api.themoviedb.org/3/search/keyword?query=${search}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response))
      .catch((err) => console.error(err));
  }, [search]);
  return (
    <div className="bg-search">
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {movies?.results?.map((movie) => {
          return (
            <p
              className="results"
              onClick={(e) => setSearch(e.target.innerText)}
              key={movie.id}
            >
              {movie.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
