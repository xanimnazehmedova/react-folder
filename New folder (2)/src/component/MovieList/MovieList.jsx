import React, { useEffect, useState } from "react";
import MovieCard1 from "../../MovieCard1";
import Genres from "../Genres";
import Input from "../Input";
import Selected from "../Selected";

const API_KEY = "30de458775d8c75c76e63beb2a2319a4";
const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=" + API_KEY;
const API_IMG = "https://image.tmdb.org/t/p/w500";
const API_GENRE = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
const API_MOVIE = (genreId) =>
  `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`;
const API_MOVIE_SEARCH = (query) =>
  `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState([])
  useEffect(() => {
    fetchMovies(API_URL);
    fetchGenres();
  }, []);

  const fetchMovies = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  const fetchGenres = async () => {
    try {
      const response = await fetch(API_GENRE);
      const data = await response.json();
      setGenres(data.genres);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleInput = async (text) => {
    try {
        setInputValue(text)
        const response = await fetch(API_MOVIE_SEARCH(text))
        const data = await response.json()
        setMovies(data.results)

        
    } catch (error) {
        console.log(error);
        
        
    }
  };
  const selectMovie = (movie) => {setSelected(prev=> [...prev, movie])}
    
  
  return (
    <>
      <div className="container mx-auto p-4">
        {loading && (
          <h1 className="text-center text-2xl font-semibold">Loading...</h1>
        )}

       
      <Input inputValue={inputValue} handleInput={handleInput}/>
    
      {genres.map((genre)=> (<Genres key={genre.id} genres={genre} fetchMovies={fetchMovies}/>))}
     
      {movies.map((movie)=> (<MovieCard1 key={movie.id} selectMovie={selectMovie} data={movie}/>))}
    
      <Selected selected={selected}  />
    
      </div>
    </>
  );
};

export default MovieList;