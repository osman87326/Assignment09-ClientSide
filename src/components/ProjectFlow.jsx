import { IoSearchOutline, IoCalendarOutline, IoRibbonOutline } from "react-icons/io5";

const ProjectFlow = () => {
  const steps = [
    {
      icon: <IoSearchOutline className="text-3xl text-arenaOrange" />,
      title: "1. Find Facility",
      desc: "Search by turf or court name and filter by your favorite sports types instantly."
    },
    {
      icon: <IoCalendarOutline className="text-3xl text-emerald-400" />,
      title: "2. Choose Slot",
      desc: "Select your preferred date and convenient hourly time-slots that fit your schedule."
    },
    {
      icon: <IoRibbonOutline className="text-3xl text-blue-400" />,
      title: "3. Confirm & Play",
      desc: "Secure your booking with Better-Auth verification and get ready to hit the arena."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-zinc-900 border-t border-zinc-800 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-4 mb-12">
        <h2 className="text-3xl font-sports font-bold uppercase text-white tracking-wide">
          How It <span className="text-arenaOrange">Works</span>
        </h2>
        <p className="text-zinc-400 max-w-md mx-auto text-sm">
          Book your desired playground in just three simple and secure steps.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="bg-arenaCard border border-zinc-800/60 p-8 rounded-xl hover:border-zinc-700 transition-all group hover:-translate-y-1 duration-300"
          >
            <div className="w-14 h-14 rounded-lg bg-zinc-950 flex items-center justify-center border border-zinc-800 group-hover:border-arenaOrange/30 transition-colors mb-6">
              {step.icon}
            </div>
            <h3 className="text-xl font-sports font-bold text-white uppercase mb-3 tracking-wide">
              {step.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed font-body">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectFlow;