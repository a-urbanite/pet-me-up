import React from 'react'
import './SearchBar.css'
import { url } from '../App/App'

const SearchBar = ({setData, pets} :any) => {

  const startSearch = (event: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
    event.preventDefault()
    //etract formdata for keyword
    const formData = Object.fromEntries(new FormData(event.target));
    // const data = pets;
    
      fetch(`${url}/api/pets`)
      .then((res) => res.json())
      .then((data) => {
        if (formData.keyword === '') {
          setData(data)
        } else {
          console.log(data)
          const filteredData = data.filter((pet: any) => pet[formData.category as string] === formData.keyword)
          console.log(filteredData)
          setData(filteredData)
        }
      })
    
    console.log('SEARCHABR FORMDATA', formData)

    //fetch from backend with keyword as query parametter
    // fetch(`${url}/api/petsSelection`)
    // .then((res) => res.json())
    // .then((data) => {
      // console.log(data)
      //setdata(resulting array)
    // })
    // const data = pets;
    // const filteredData = data.filter((pet: any) => pet.zip === formData.keyword)
    // setData(filteredData)
    event.target.reset();
  }

  return (
    <div className='SearchBar'>
        <form className="SearchBar__form" onSubmit={startSearch}>
            <select name='category'>
              <option label=" "></option>
              <option value="type">Type</option>
              <option value="zip">Zip Code</option>
              <option value="gender">Gender</option>
              <option value="age">Age</option>
            </select>
            <input name='keyword' className='SearchBar__input' type="search" placeholder="Enter Place or zipcode"></input>    
            <input className='SearchBar__input' type="submit" hidden></input>
        </form>   
    </div>
  )
}

export default SearchBar