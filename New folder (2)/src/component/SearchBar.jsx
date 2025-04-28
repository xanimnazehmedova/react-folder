import React, { useState } from 'react'

const SearchBar = ({setCity}) => {
    const [search, setSearch] = useState("")
const handleSearch = ()=>{
    if(search.trim() !== ""){
        setCity(search)
        setSearch("")
    }
}
  return (
    <div>
        <div>
        <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button onClick={handleSearch}>search</button>
        </div>
    </div>
  )
}

export default SearchBar