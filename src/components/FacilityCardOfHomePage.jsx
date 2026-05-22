import { getAllFacilities } from "@/lib/data";
import FacilityCard from "@/components/FacilityCard";
import Link from "next/link";
import { Button } from "@heroui/react";

const FacilityCardOfHomePage = async () => {
  const facilities = await getAllFacilities();

  if (!facilities || facilities.length === 0) {
    return <p className="text-zinc-500 text-center font-body my-10">No facilities found.</p>;
  }

  return (
    <div className="w-full flex flex-col items-center px-6 py-15 bg-black">

      <div className="w-full max-w-7xl mb-10 text-left">
        <h2 className="text-3xl font-sports font-black text-white uppercase tracking-wide">
          Explore Our <span className="text-arenaOrange">Top Arenas</span>
        </h2>
        <p className="text-zinc-500 font-body text-sm mt-1">
          Handpicked premium sports zones and turfs available for booking.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {facilities.slice(0, 6).map((facility) => (
          <FacilityCard key={facility._id} facility={facility} />
        ))}
      </div>

      <div className="mt-14 flex justify-center w-full">
        <Link href="/facilities">
          <Button
            variant="solid"
            className="bg-arenaOrange hover:bg-orange-600 text-white font-sports font-black uppercase tracking-wider px-8 py-3.5 rounded-md transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-orange-600/10 cursor-pointer text-sm"
          >
            View All 
          </Button>
        </Link>
      </div>

    </div>
  );
};

export default FacilityCardOfHomePage;