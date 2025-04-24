import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps){
    const headers = {
		'x-rapidapi-key': '95d3e8ce80msh5d1076b3c3ba275p16ce47jsn7187e77659d5',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const { Manufacturer , year , model , limit , fuel } = filters; 
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${Manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
        {
            headers : headers,
        }
    );
    const result = await response.json();
    return result;
}

export const calculateCarRent = (year: number , city_mpg: number) => {
    const basePricePerDay = 50;// Base price per day in dollars

    const mileageFactor = 0.1; // Additional rate per mile driven

    const ageFactor = 0.05; // Additional rate per year of vehicle age 

    //Calculate additional rate based on mileage and age 
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    //Calculate total rental rate per day 
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);

}

export const generateCarImageUrl=(car: CarProps, angle?: string) =>{

    const url = new URL('https://cdn.imagin.studio/getImage');
    

    const {make , model , year} = car;

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamliy', model.split(" ")[0]);
    url.searchParams.append('ZoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);
    
    return `${url}`;

}

export const upadateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type , value);
    const newPathname = `${window.location.pathname}? ${searchParams.toString()}`;

    return newPathname; 

}