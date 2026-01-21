// pages/CountryDetails.jsx
import { useParams } from "react-router";
import "../App.css";


function CountryDetails({ countriesData }) {
  // get this country's name from the URL parameter
  const countryName = useParams().countryName;
  // search for a matching country in countriesData that has the same name as the param being passed in
  const userSelectedCountry = countriesData.find((countryInfo) => (countryInfo.name.common === countryName))
  // const borderCountryCodes = userSelectedCountry.borders;
  // const borderCountryNames = borderCountryCodes.map((countryCode) => countriesData.find(countryInfo))






  // we assume a match will always be found (no try catch)
  /* place our countryCard componenet passing in the user selected countries information,
       parameters key is userSelectedCountry.cca3 because this is unique to each country, country is userSelectedCountry   */
  return (
    <>
      <div>
        <img src={userSelectedCountry.flags.svg}></img>
        <h2>{userSelectedCountry.name.common}</h2>
        <button className="saveCountry">Save</button>
        <h3>Population: {userSelectedCountry.population.toLocaleString("en-US")}</h3>
        <h3>Capital: {userSelectedCountry.capital[0]}</h3>
        <h3>Region: {userSelectedCountry.region}</h3>
        {/* <h3>Border Countries: { userSelectedCountry.borders[]}</h3> */}
     </div> 
    </>
  );
}

export default CountryDetails;
