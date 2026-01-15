// pages/CountryDetails.jsx
import { useParams } from "react-router";
import CountryCard from "../components/CountryCard";
import "../App.css";
import "../SavedCountries.css";

function CountryDetails({ countriesData }) {
  // get this country's name from the URL parameter
  const countryName = useParams().countryName;
  // search for a matching country in countriesData that has the same name as the param being passed in
  const userSelectedCountry = countriesData.find((countryInfo) => (countryInfo.name.common === countryName))
  // we assume a match will always be found (no try catch)
  /* place our countryCard componenet passing in the user selected countries information,
       parameters key is userSelectedCountry.cca3 because this is unique to each country, country is userSelectedCountry   */
  return (
    <>
      <h1>Country Details Page</h1>;
      <CountryCard
        key={userSelectedCountry.cca3}
        country={userSelectedCountry}
      />
    </>
  );
}

export default CountryDetails;
