// pages/CountryDetails.jsx
import { useParams } from "react-router";

function CountryDetails({ countries }) {
  // get this country's name from the URL parameter
  const countryName = useParams().countryName;
}

export default function CountryDetail() {
  return <h1>CountryDetail Page</h1>;
}
