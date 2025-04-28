import React from 'react'
const API_IMG = "https://image.tmdb.org/t/p/w500";

const MovieCard1 = ({selectMovie, data}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
            <div
              key={data.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={API_IMG + data.poster_path}
                alt={data.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{data.title}</h3>
                <p className="text-gray-700">IMDB: {data.vote_average}</p>
              </div>
              <button onClick={()=>selectMovie(data)}> Add to Favorites</button> 
            </div>
       
        </div>
  )
}

export default MovieCard1