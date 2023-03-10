import { useEffect, useState } from "react";
import classes from "./movieCategory.module.css";

import MovieItem from "./movieItems";

const MovieCategory = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("avengers");

  const handleChange = (e) => {
    setSearchMovie(e.target.value);
  };
  const getMovies = async (search) => {
    let url = `https://www.omdbapi.com/?s=${search}&apikey=${process.env.REACT_APP_apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getMovies(searchMovie);
  }, [searchMovie]);
  return (
    <div className={classes.wrapper}>
      <div className={classes.searchBox}>
        <label className={classes.label}>Search</label>
        <input type="text" onChange={handleChange} className={classes.input} />
      </div>
      <div className={classes.contianer}>
        <div className={classes.movieWrapper}>
          {movies.map((movie) => {
            return <MovieItem key={movie.imdbID} movie={movie} />;
          })}
        </div>
        <div className={classes.movieWrapper}>
          {movies.map((movie) => {
            return <MovieItem key={movie.imdbID} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieCategory;
