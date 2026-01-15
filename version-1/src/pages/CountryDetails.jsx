// pages/CountryDetails.jsx
import { useParams } from "react-router";
import CountryCard from "../components/CountryCard";

function CountryDetails({ countriesData }) {
  // get this country's name from the URL parameter
  const countryName = useParams().countryName;
  console.log(countryName);
  const userSelectedCountry = countriesData.find((countryInfo) => (countryInfo.name.common === countryName))
  console.log(userSelectedCountry.name.common);
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
