"use client";
import { fetchFilteredFacilities } from "@/lib/action";
import { Button, Dropdown, Header, Label } from "@heroui/react";
import { useState } from "react";

const SPORTS_DATA = [
  { id: "Futsal", label: "Futsal" },
  { id: "Football", label: "Football" },
  { id: "Cricket", label: "Cricket" },
  { id: "Badminton", label: "Badminton" },
  { id: "Table Tennis", label: "Table Tennis (Ping Pong)" },
  { id: "Basketball", label: "Basketball (3x3 Half Court)" },
  { id: "Volleyball", label: "Volleyball" },
  { id: "Handball", label: "Handball" },
  { id: "Dodgeball", label: "Dodgeball" },
  { id: "Carrom", label: "Carrom" },
  { id: "Ludo", label: "Ludo" },
  { id: "Chess", label: "Chess" },
  { id: "Billiards", label: "Billiards / Pool" },
  { id: "Foosball", label: "Foosball (Table Football)" },
  { id: "Darts", label: "Darts" },
  { id: "Kabaddi", label: "Kabaddi (Ha-Du-Du)" },
  { id: "Karate", label: "Karate / Martial Arts" },
  { id: "Yoga", label: "Yoga / Freehand Exercise" },
  { id: "Gymnastics", label: "Gymnastics" },
  { id: "Archery", label: "Indoor Archery" },
];

function Filter ({setFilteredFacilities}) {
  const [selected, setSelected] = useState(new Set([]));
  const handleFilterChange = async (keys) => {
    setSelected(keys);
    const sportsArray = Array.from(keys);
    const data = await fetchFilteredFacilities(sportsArray);
    setFilteredFacilities(data);
  };

  const getButtonText = () => {
    const currentSelection = Array.from(selected)[0];
    return currentSelection ? String(currentSelection) : "Filter by Sports Type";
  };

  return (
    <Dropdown placement="bottom-start" offset={0}>
      <Button 
        aria-label="Menu" 
        variant="bordered"
        className="border-zinc-800 bg-zinc-950 text-white font-body font-medium hover:border-arenaOrange hover:text-arenaOrange transition-colors px-5 py-2.5 rounded-md text-sm"
      >
        {getButtonText()}
      </Button>
      <Dropdown.Popover className="min-w-[280px] bg-arenaCard border border-zinc-900 rounded-xl shadow-xl">
        <Dropdown.Menu
          selectedKeys={selected}
          selectionMode="single"
          onSelectionChange={handleFilterChange}
          className="p-2"
        >
          <Dropdown.Section>
            <Header className="px-3 py-2 text-xs font-sports font-black uppercase tracking-wider text-zinc-500">
              Select Sports
            </Header>
          
            {SPORTS_DATA.map((sport) => (
              <Dropdown.Item 
                key={sport.id} 
                id={sport.id} 
                textValue={sport.id}
                
                className="group rounded-md cursor-pointer transition-colors py-2 px-3 data-[hover=true]:bg-zinc-800/60 text-black data-[selected=true]:bg-zinc-900/80"
              >
               
                <div className="flex items-center justify-between w-full gap-4">
                  <Label className="font-body text-sm text-zinc-300 group-data-[selected=true]:text-arenaOrange pointer-events-none">
                    {sport.label}
                  </Label>
                  
                </div>
              </Dropdown.Item>
            ))}

          </Dropdown.Section>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}

export default Filter;