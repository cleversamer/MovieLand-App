import React, { Fragment } from "react";
import MovieCard from "./MovieCard";

const Movies = ({ movies }) => {
  return (
    <Fragment>
      {movies ? (
        movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
      ) : (
        <div className="empty">
          <h2>No movies found.</h2>
        </div>
      )}
    </Fragment>
  );
};

export default Movies;
