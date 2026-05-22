import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getFacilityByEmail } from "@/lib/data";
import Link from "next/link";
import { Button } from "@heroui/react";
import DeleteFacility from "@/components/DeleteFacility";
import EditFacility from "@/components/EditFacility";
import Image from "next/image";

const ManageFacilities = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  // console.log(session)
  const facilities = await getFacilityByEmail(session?.user.email, token);
  console.log(facilities);

  return (
    <div className="min-h-screen bg-black p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-sports font-bold text-white uppercase mb-8">
          Manage My <span className="text-arenaOrange">Facilities</span>
        </h1>

        {facilities.length === 0 ? (
          <div className="text-center text-white/60 p-10 bg-arenaCard rounded-xl border border-white/5">
            <p className="mb-4 font-body">
              You have not added any facilities yet.
            </p>
            <Link
              href="/addFacility"
              className="bg-arenaOrange text-white px-4 py-2 rounded font-sports uppercase"
            >
              Add Facility
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {facilities.map((item) => (
              <div
                key={item._id}
                className="p-5 bg-arenaCard border border-white/5 rounded-xl shadow-xl flex flex-col md:flex-row gap-6 items-center justify-between"
              >
                <div className="w-full md:w-48 h-32 relative flex-shrink-0">
                  <Image
                    src={item.image}
                    alt="facility image"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                <div className="flex-1 w-full space-y-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-xl font-sports text-white font-black uppercase tracking-wide truncate">
                      {item.name}
                    </h3>
                    <span className="bg-arenaOrange/10 border border-arenaOrange/30 text-arenaOrange text-[11px] font-sports font-bold uppercase px-2.5 py-0.5 rounded">
                      {item.facility_type || "Sports"}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1 text-sm font-body">
                    <div>
                      <p className="text-zinc-500 text-xs uppercase tracking-wider font-sports font-bold">
                        Location
                      </p>
                      <p className="text-zinc-300 truncate">
                        {item.location || "Main Arena"}
                      </p>
                    </div>
                    <div>
                      <p className="text-zinc-500 text-xs uppercase tracking-wider font-sports font-bold">
                        Price Rate
                      </p>
                      <p className="text-arenaOrange font-black font-sports">
                        ${item.price_per_hour}/hr
                      </p>
                    </div>
                    <div>
                      <p className="text-zinc-500 text-xs uppercase tracking-wider font-sports font-bold">
                        Available Slots
                      </p>
                      <p className="text-zinc-300 truncate">
                        {item.available_slots?.length || 0} Slots
                      </p>
                    </div>
                    <div>
                      <p className="text-zinc-500 text-xs uppercase tracking-wider font-sports font-bold">
                        Status
                      </p>
                      <p className="text-emerald-500 font-medium">Active</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row md:flex-col gap-3 w-full md:w-auto justify-end flex-shrink-0">
                  <EditFacility facility={item} />
                  <DeleteFacility id={item._id} name={item.name} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageFacilities;