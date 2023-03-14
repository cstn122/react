import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // // this creates an infinite loop!
  // useEffect(() => {
  //   fetchMoviesHandler();
  // }, [fetchMoviesHandler]);

  const fetchMoviesHandler = useCallback(
    async () => {
      setIsLoading(true);
      setError(null);
      try {
        // // fetch data via Fetch API from Star Wars API
        // const response = await fetch('https://swapi.dev/api/films');

        // fetch data via Fetch API from our self-built Firebase API
        const response = await fetch('https://react-http-5a556-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json');

        // error handling
        if (!response.ok) {
          throw new Error('Something went wrong.');
        }

        const data = await response.json();

        const loadedMovies = [];

        for (const key in data) {
          loadedMovies.push({
            id: key,
            title: data[key].title,
            releaseDate: data[key].release_date,
            openingText: data[key].opening_crawl,
          });
        }
        setMovies(loadedMovies);

        // const transformedData = data.results.map(movieData => {
        //   return ({
        //     id: movieData.episode_id,
        //     title: movieData.title,
        //     releaseDate: movieData.release_date,
        //     openingText: movieData.opening_crawl,
        //   });
        // });
        // setMovies(transformedMovies);

        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }, []);

  async function addMovieHandler(movie) {
    const response = await fetch('https://react-http-5a556-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  let content = <MoviesList movies={movies} />;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (movies.length === 0) {
    content = <p>No movies found.</p>;
  }

  if (error !== null) {
    content = <p>{error}</p>;
  }

  return (
    <React.Fragment>
      <section><AddMovie onAddMovie={addMovieHandler} /></section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
