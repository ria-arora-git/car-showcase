'use client';
import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/Search";
import ShowMore from "@/components/ShowMore";
import { fuels, yearsOfProduction } from "@/constants/page";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";


export default async function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  // search state
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  //filter states 
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);

  // pagination states
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        Manufacturer: manufacturer || '', 
        fuel: fuel  || '', 
        Model: model || '',
        year: year  || 2024, 
        limit: limit  || 10, 
      });
  
        setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log(fuel , year , limit , manufacturer , model);
    getCars();
    } , [fuel , year , limit , manufacturer , model]);
  

  console.log(allCars);
  return (
   <main className="">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold ">Car Catalogue</h1>
          <p>Explore the Cars you might like </p>
        </div>
        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModal={setModel}/>
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel}/>
            <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear}/>
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper" key={allCars?.length}> 
              {allCars?.map((car) => (
                <CarCard car={car} key={car} />
              ))}
            </div>

              {loading && (
                <div className="mt-16 w-full flex-center ">
                  <Image src={'/loader.svg'} alt="loader" height={50} width={50} className=" object-contain" />
                </div>
              )}

            <ShowMore pageNumber={limit /10} isNext={limit > allCars.length}  setLimit={setLimit}/>
          </section>
        ) : (
          !loading && (
          <div className="home_error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>   
          </div>
          )
        )}
      </div>
   </main>
  );
}
