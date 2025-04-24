import { MouseEventHandler } from "react";


export interface CustomButtonProps {
  title: string;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: 'button' | 'submit' | 'reset' | undefined;
  textstyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
    Manufacturer: string;
    setManufacturer: (Manufacturer: string) => void;
    otherClasses: string;
} 

export interface CarProps {
    city_mpg: number;         
    //  "this field is for premium subscribers only"
    class: string;
    // combination_mpg:"this field is for premium subscribers only"
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    // highway_mpg:"this field is for premium subscribers only"
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface FilterProps{
  Manufacturer: string;
    year: number; 
    fuel: string; 
    limit: number; 
    Model: string;
}
export interface OptionProps{
  title: string; 
  option: string;
  value?: any;
}

export interface CustomFilterProps{
  title: string;
  options: OptionProps[];
  setFilter: (filter: string) => void;
}

export interface ShowMoreProps{
  pageNumber: number;
  isNext: boolean; 
  setLimit: (limit: number) => void;
}