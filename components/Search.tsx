'use client';
import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer';
import Image from 'next/image';
import {  useRouter } from 'next/router';
import { SearchManufacturerProps } from '@/types';


const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
);

const SearchBar = ({ setManuFacturer, setModel , Model }: SearchManufacturerProps) => {
  const [searchModel, setSearchModel] = useState("");
  const [searchManufacturer, setSearchManufacturer] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer.trim() === "" && searchModel.trim() === "")
      return alert("Please provide some input");

    setModel(searchModel);
    setManuFacturer(searchManufacturer);
  };

  return (
    <form action="" className='searchbar' onSubmit={handleSearch}>
        <div className='flex-1 max-sm:w-full flex justify-start items-center relative overflow-visible z-50'>
            <SearchManufacturer selected={SearchManufacturer} setSelected={setSearchManufacturer}/>
            <SearchButton otherClasses={"sm:hidden "}/>
        </div>
        <div className="searchbar__item">
          <Image src={"/model-icon.png"} alt='Car model' height={25} width={25} className='absolute w-[20px] h-[20px] ml-4'/>
          <input type="text" name='model' value={Model} onChange={(e)=> setModel(e.target.value)} placeholder='BMW' className='searchbar__input'/>
          <SearchButton otherClasses='sm:hidden'/>
        </div>
        <SearchButton otherClasses='max-sm:hidden'/>
    </form>
  )
}

export default SearchBar
