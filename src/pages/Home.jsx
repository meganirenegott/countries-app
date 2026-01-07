// pages/Home.jsx


import CountryCard from "../components/CountryCard";

function Home({ countriesData }) {
  return (
    <div className="countries-grid">
      {countriesData.map((country) => (
        <CountryCard
          key={country.cca3}
          name={country.name.common}
          country={country}
        />
      ))}
    </div>
  );
}

export default Home;


