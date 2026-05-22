"use client";
import { searchFacilities } from "@/lib/action";
import { Button, Description, Label, SearchField } from "@heroui/react";
import { useState } from "react";

function Search({ setSearchFacilities }) {
  const handleSearch = async (text) => {
    console.log(text)
    const data = await searchFacilities(text);
    setSearchFacilities(data);
  };

  return (
    <div className="flex gap-4 items-center">
      <SearchField
        name="search"
        onChange={handleSearch}
        className="w-full sm:max-w-md"
      >
        <SearchField.Group className="bg-zinc-950 border border-zinc-800 rounded-md flex items-center px-3 focus-within:border-arenaOrange transition-colors">
          <SearchField.SearchIcon className="text-zinc-500 mr-2" />
          <SearchField.Input
            className="w-[280px] bg-transparent outline-none py-2.5 text-sm text-white placeholder-zinc-600 font-body"
            placeholder="Search by facility name..."
          />
          <SearchField.ClearButton className="text-zinc-500 hover:text-white" />
        </SearchField.Group>

        {/* <Button
          variant="solid"
          type="submit"
          className="inline-block bg-arenaOrange hover:bg-orange-600 text-white font-body font-medium px-4 py-2 rounded-md text-sm transition-colors"
        >
          Search
        </Button> */}
      </SearchField>
    </div>
  );
}

export default Search;