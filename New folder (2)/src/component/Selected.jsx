import React from 'react'
const API_IMG = "https://image.tmdb.org/t/p/w500";

const Selected = ({selected}) => {
  return (
    <div>
        <h2>selected movies:</h2>
       <div className="p-4">
              {selected.map((selected) => (
                 <div>
                     <h3 className="text-lg font-bold">{selected.title}</h3>
                     <p className="text-gray-700"> {selected.vote_average}</p>
                 </div>
              ))}
        </div>

    </div>
  )
}

export default Selected