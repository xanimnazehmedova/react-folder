import React from 'react'
const API_KEY = "30de458775d8c75c76e63beb2a2319a4";
const API_GENRE = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
const API_MOVIE = (genreId) =>
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`;


const Genres = ({genres, fetchMovies}) => {
    

  return (
   
    <div >
         <div className="flex flex-wrap gap-2 justify-center mb-4" key={genres.id}>
            
            <button
              onClick={() => fetchMovies(API_MOVIE(genres.id))}
              key={genres.id}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition" >{genres.name} </button>
         </div>
          
    </div>
    
  
  )
}

export default Genres