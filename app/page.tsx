import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import Search from "@/components/Search";
import { fetchCars } from "@/utils";



export default async function Home() {

  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  console.log(allCars);
  return (
   <main className="">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold ">Car Catalogue</h1>
          <p>Explore the Cars you might like </p>
        </div>
        <div className="mt-12 w-full flex justify-between items-center flex-wrap gap-5">
          <Search />
          <div className="flex justify-start flex-wrap items-center gap-2">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper" key={allCars?.length}> 
              {allCars?.map((car) => (
                <CarCard car={car} key={car.id} />
              ))}
            </div>
          </section>
        ): (
          <div className="home_error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>   
          </div>
        )}
      </div>
   </main>
  );
}
