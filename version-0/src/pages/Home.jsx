// pages/Home.jsx


import CountryCard from "../components/CountryCard";
// function to make a copy of the countries array, then reorder it alphabetically based on the countries common name, without mutating the original data
function Home({ countriesData = [] }) {
  // sortedCountries is a new variable to hold the sorted version of the country data
  // spread operator takes every element inside the countriesData and creates a new arrray in memory, chose to do this instead of .sort() which mutates the original array
  // ((a,b) => is the comparison function, with a and b being the common name of two contries, this function is called many times
  // localeCompare is the actual alphabetical comparison, a string method that compares two strings and also preserves the language rules and accents
  const sortedCountries = [...countriesData].sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );

  return (
    <div className="countries-grid">
      {sortedCountries.map((country) => (
        <CountryCard
          key={country.cca3}
          country={country}
        />
      ))}
    </div>
  );
}

export default Home;

