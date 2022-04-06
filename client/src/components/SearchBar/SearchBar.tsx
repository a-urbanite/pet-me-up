import React from 'react'
import './SearchBar.css'
import { url } from '../App/App'

const SearchBar = ({setData, pets} :any) => {

  const startSearch = (event: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.target));
    console.log(formData)
    
      fetch(`${url}/api/pets`)
      .then((res) => res.json())
      .then((data) => {
        if (formData.keyword === '') {
          setData(data)
        } else {
          const filteredData = data.filter((pet: any) => pet.gender === formData.keyword || pet.age === formData.keyword || pet.zip === formData.keyword)
          setData(filteredData)
        }
      })
    
    event.target.reset();
  }

  return (
    <div className='SearchBar'>
        <form className="SearchBar__form" onSubmit={startSearch}>
            <input name='keyword' className='SearchBar__search' type="search" placeholder="Gender, Age or Zipcode"></input>    
            <input className='SearchBar__input' type="submit" hidden></input>
        </form>   
    </div>
  )
}

export default SearchBar