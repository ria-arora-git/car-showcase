'use client';
import React from 'react'

interface SearchManufacturerProps {
    setManufacturer: (manufacturer: string) => void;
    Manufacturer: string;
}

const SearchManufacturer: React.FC<SearchManufacturerProps> = ({ setManufacturer , Manufacturer }: SearchManufacturerProps) => {
  return (
    <div>
      SearchManufacturer
    </div>
  )
}

export default SearchManufacturer
