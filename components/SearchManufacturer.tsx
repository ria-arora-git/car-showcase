'use client';
import { manufacturers } from '@/constants/page';
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react';
import Image from 'next/image';
import React, { Fragment, useState } from 'react'

interface SearchManufacturerProps {
    Manufacturer: string;
    setManufacturer: (Manufacturer: string) => void;
} 


const SearchManufacturer: React.FC<SearchManufacturerProps> = ({ setManufacturer , Manufacturer }: SearchManufacturerProps) => {
    const [query, setquery] = useState('');

    const filteredManufacturers = query === '' ?  manufacturers : manufacturers.filter((item) => item.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
);

  return (
    <div className='flex-1 max-sm:w-full flex justify-start items-center w-full z-40'>
        <Combobox value={Manufacturer} onChange={setManufacturer} >
            <div className='relative w-full '>
                <ComboboxButton className="absolute top-[14px]">
                    <Image src={"/car-logo.svg"} width={20} height={20} className='ml-4' alt='Car Logo'/>
                </ComboboxButton>
                <ComboboxInput className={'w-full h-full pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm'} placeholder='Volkswagen' displayValue={(Manufacturer: string) => Manufacturer} onChange={(e)=> setquery(e.target.value)} />
                <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0' afterLeave={() => setquery('')}>
                <ComboboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
                    {filteredManufacturers.length === 0 && query !== '' ? (
                        <ComboboxOption value={query} className="relative cursor-default select-none py-2 pl-10 pr-4">
                        create "{query}"
                        </ComboboxOption>
                    ) : (
                        filteredManufacturers.map((item) => (
                        <ComboboxOption value={item} key={item} className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${ active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}>
                            {item}
                        </ComboboxOption>
                        ))
                    )};
                    </ComboboxOptions>
                </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer
