// pages/Home.jsx
import { useState } from "react";

import CountryCard from "../components/CountryCard";
// function to make a copy of the countries array, then reorder it alphabetically based on the countries common name, without mutating the original data
function Home({ countriesData = [] }) {
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [searchByCountry, setSearchByCountry] = useState("");

  // Pull out regions from the countries data, keep the valid ones
  const countriesRegions = countriesData
                      .map(country => country.region)
                      .filter(region => region);

  // Make a list of unique regions from the full list of region data, add an "All" option as well
  const uniqueRegions = ["All", ...new Set(countriesRegions)];

  // Filter countries by selected region, but don't filter by region if we are considering "All" regions
  // Then filter countries by the specified searchByCountry search term
  const filteredCountries = countriesData
    .filter((country) => 
      selectedRegion === "All" || country.region === selectedRegion
    )
    .filter((country) => 
      country.name.common.toLowerCase().includes(searchByCountry.toLowerCase())
    );

  // sortedCountries is a new variable to hold the sorted version of the country data
  // spread operator takes every element inside the filteredCountries and creates a new arrray in memory, chose to do this instead of .sort() which mutates the original array
  // ((a,b) => is the comparison function, with a and b being the common name of two countries, this function is called many times
  // localeCompare is the actual alphabetical comparison, a string method that compares two strings and also preserves the language rules and accents
  const sortedCountries = [...filteredCountries].sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );

  return (
    <div>
      {/* Search Box */}
      <div className="search-container">
        <label htmlFor="country-search">
          Search Countries:
        </label>
        <input
          type="text"
          id="country-search"
          value={searchByCountry}
          onChange={(e) => setSearchByCountry(e.target.value)}
          placeholder="Type a country name..."
        />
      </div>

      {/* Region Filter */}
      <div className="filter-container">
        <label htmlFor="region-filter">
          Filter by Region:
        </label>
        <select
          id="region-filter"
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
          {uniqueRegions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      {/* Countries Grid */}
      <div className="countries-grid">
        {sortedCountries.map((country) => (
          <CountryCard
            key={country.cca3}
            country={country}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

