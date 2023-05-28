import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../movieSlice";
import { addToFavorites } from "../favoriteSlice";

function HomePage() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const addToFav = (movie) => {
    dispatch(addToFavorites(movie));
  };

  return (
    <div className="homepage">
      <h1><u>Home Page</u></h1>
      {movies.data.map((movie) => (
        <div key={movie.imdbID}>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt={movie.Title} />
          <p>Released in: {movie.Year}</p>
          <button onClick={() => addToFav(movie)} className="button">Add to Favorite</button>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
