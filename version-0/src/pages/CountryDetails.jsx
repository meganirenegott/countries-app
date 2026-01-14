// pages/CountryDetails.jsx
import { useParams } from "react-router-dom";

export default function CountryDetails({country}) {

  const countryName = useParams();
  console.log(countryName);

  // use params
  return (
    // make a dive or something wiht two columns
    <>
      <h1>CountryDetails Page</h1>;
    </>
);
}
