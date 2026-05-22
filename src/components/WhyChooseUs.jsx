import { IoShieldCheckmarkOutline, IoFlashOutline, IoTimeOutline } from "react-icons/io5";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-zinc-950 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-sports font-black uppercase text-white leading-tight">
            We Provide The Best <br />
            <span className="text-arenaOrange">Sports Experience</span>
          </h2>
          <p className="text-zinc-400 font-body text-sm sm:text-base leading-relaxed">
            Our platform connects passion with premium arenas. Whether you are arranging a weekend match with friends or practicing professionally, we ensure flawless booking management.
          </p>
          <div className="w-20 h-1 bg-arenaOrange rounded" />
        </div>

        <div className="space-y-6">

          <div className="flex gap-4 p-5 bg-arenaCard rounded-xl border border-zinc-900">
            <IoShieldCheckmarkOutline className="text-4xl text-arenaOrange shrink-0" />
            <div>
              <h4 className="text-lg font-sports font-bold text-white uppercase tracking-wide">Verified Venues Only</h4>
              <p className="text-zinc-400 text-sm mt-1">Every single court and football turf listed here undergoes strict quality check for turf safety and lightning standards.</p>
            </div>
          </div>

          <div className="flex gap-4 p-5 bg-arenaCard rounded-xl border border-zinc-900">
            <IoFlashOutline className="text-4xl text-emerald-400 shrink-0" />
            <div>
              <h4 className="text-lg font-sports font-bold text-white uppercase tracking-wide">Real-time Slot Status</h4>
              <p className="text-zinc-400 text-sm mt-1">No overlapping, no double bookings. Our advanced system locks slots dynamically during user selection.</p>
            </div>
          </div>

          <div className="flex gap-4 p-5 bg-arenaCard rounded-xl border border-zinc-900">
            <IoTimeOutline className="text-4xl text-blue-400 shrink-0" />
            <div>
              <h4 className="text-lg font-sports font-bold text-white uppercase tracking-wide">Easy Management</h4>
              <p className="text-zinc-400 text-sm mt-1">Facility owners can monitor bookings, edit hours, and handle requests from an integrated personalized portal.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;