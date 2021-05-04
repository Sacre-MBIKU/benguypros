import React, { useState, useEffect } from "react";
function App() {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/553/videos?api_key=fb1dcf94078665e3203add8e98cca345"
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (movie) {
        setMovie(movie);
        console.log(movie.results[0]);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>titre : {movie.results[0].name}</p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {movie.original_title}
        </a> */}
      </header>
      <main>
        {/* 
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt="bam"
        /> */}
        {movie !== "" ? (
          <iframe
            id="player"
            type="text/html"
            width="640"
            height="360"
            src={`http://www.youtube.com/embed/${movie.results[0].key}?enablejsapi=1&origin=http://localhost:3000/`}
            frameBorder="0"
          ></iframe>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
