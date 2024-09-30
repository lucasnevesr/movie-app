import "./MoviesCards.css";

function MoviesCards({ moviesList }) {
  console.log(moviesList);
  function renderMovies(movies) {
    const renderedMovies = movies.map((movie) => (
      <a key={`${movie.id}`} href={`${movie.id}`} className="movie-card">
        <img
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="movieposter"
        />
      </a>
    ));

    return renderedMovies;
  }

  return (
    <div>
      <ul className="movies-cards-list">{renderMovies(moviesList)}</ul>
    </div>
  );
}

export default MoviesCards;
