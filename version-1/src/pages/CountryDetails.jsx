// pages/CountryDetails.jsx
import { useParams } from "react-router";

function CountryDetails({ countriesData }) {
  // get this country's name from the URL parameter
  const countryName = useParams().countryName;
  return <h1>CountryDetail Page</h1>;
}

export default CountryDetails;
