import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../favoriteSlice";

function FavoritePage() {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const removeFromFav = (movie) => {
    dispatch(removeFromFavorites(movie));
  };

  return (
    <div className="homepage">
      <h1><u>Favorites</u></h1>
      {favorites.map((movie) => (
        <div key={movie.imdbID}>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt={movie.Title} />
          <p>Released in: {movie.Year}</p>
          <button onClick={() => removeFromFav(movie)} className="button">
            Remove from Favorites
          </button>
        </div>
      ))}
    </div>
  );
}

export default FavoritePage;
