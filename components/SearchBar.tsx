'use client'
import React from 'react'
import SearchManufacturer from './SearchManufacturer'
import { useState } from 'react'
const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');
    const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    }
  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer}/>
        </div>
    </form>
  )
}

export default SearchBar