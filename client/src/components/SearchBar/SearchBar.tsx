import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className='SearchBar'>
        <form>
            <input className='SearchBar__input' type="search" placeholder="Enter Place or zipcode"></input>    
            <input className='SearchBar__input' type="submit" hidden></input>
        </form>   
    </div>
  )
}

export default SearchBar