import { MouseEventHandler } from "react";


export interface CustomButtonProps {
  title: string;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: 'button' | 'submit' | 'reset' | undefined;
}

export interface SearchManufacturerProps {
    Manufacturer: string;
    setManufacturer: (Manufacturer: string) => void;
} 

export interface CarCardProps {
    city_mpg:     number;         
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