'use client';
import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer';



const Search = () => {

    const [Manufacturer, setManufacturer] = useState(" ");

    const handleSearch = () => {}
  return (
    <form action="" className='searchbar' onSubmit={handleSearch}>
        <div className='flex-1 max-sm:w-full flex justify-start items-center relative'>
            <SearchManufacturer Manufacturer={Manufacturer} setManufacturer={setManufacturer}/>
        </div>
    </form>
  )
}

export default Search
