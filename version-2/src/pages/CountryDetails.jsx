// pages/CountryDetails.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import "../App.css";


function CountryDetails({ countriesData }) {
  const [viewCount, setViewCount] = useState(null);
  const navigate = useNavigate();
  // get this country's name from the URL parameter
  const countryName = useParams().countryName;

  // search for a matching country in countriesData that has the same name as the param being passed in
  const userSelectedCountry = countriesData.find((countryInfo) => (countryInfo.name.common === countryName))

  // set up the call to the update-one-country-count API to count this visit against the correct country
  const countCountryVisit = async () => {
    const response = await fetch(
      '/api/update-one-country-count',
      {
        // type of HTTP request
        method: 'POST',
        // Specify the type of data being sent
        headers: {
          'Content-Type': 'application/json',
        },
        // Use stringify method to format data to be sent to backend
        // use dot notation to get the correct data
        body: JSON.stringify({
          "country_name": userSelectedCountry.name.common,
        }),
      }
    );

    // Pull out the country view count from the json that comes back, and send it to setViewCount()
    const json = await response.json();
    const countryViewCount = json.count;
    console.log('countryViewCount', countryViewCount);
    setViewCount(countryViewCount);
  };

  // Establish a useEffect trigger to call countCountryVisit() when the page loads, and also whenever userSelectedCountry.name.common changes
  // Add a check to see if userSelectedCountry even exists and return out if that is the case
  useEffect(() => {
    if (!userSelectedCountry) return;
    countCountryVisit();
  }, [userSelectedCountry?.name?.common]);

  // Handle case where country data hasn't loaded yet
  if (!userSelectedCountry) {
    return <div className="country-details-loading">Loading...</div>;
  }

  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  // user Saved Countries POST api request
  // write a function for storing Form dataz
  const saveOneCountry = async (data) => {
    const response = await fetch(
      '/api/save-one-country',
      {
        // type of HTTP request
        method: 'POST',
        // Specify the type of data being sent
        headers: {
          'Content-Type': 'application/json',
        },
        // Use stringify method to format data to be sent to backend
        // use dot notation to get the correct data
        body: JSON.stringify({
          country_name: data.name.common,
        }),
      }
    );
    // If the response is text type, then use response.text()
    // If the response is json data, use response.json()
    const result = await response.text();
    console.log('save one country result', result);
  };
  
  // Unsave one country post request
  const unsaveOneCountry = async (data) => {
    const response = await fetch("/api/unsave-one-country", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country_name: data.name.common,
      }),
    });

    const result = await response.text();
    console.log("unsave one country result", result);
  };



  return (
    <div className="country-details-page">
      {/* Back button */}
      <button className="back-button" onClick={handleBack}>
        ← Back
      </button>

      {/* Main content container */}
      <div className="country-details-container">
        {/* Flag image */}
        <div className="country-details-flag-wrapper">
          <img 
            className="country-details-flag"
            src={userSelectedCountry.flags.svg}
            alt={`Flag of ${userSelectedCountry.name.common}`}
          />
        </div>

        {/* Country information */}
        <div className="country-details-info">
          <h1 className="country-details-title">{userSelectedCountry.name.common}</h1>
          
          {/* save button on country details */}
          <button className="save-button" onClick={() => saveOneCountry(userSelectedCountry)}>
            Save
          </button>

          {/* unsave button on country details */}
          <button className="save-button" onClick={() => unsaveOneCountry(userSelectedCountry)}>
            Unsave
          </button>

          {/* details of country */}
          <div className="country-details-stats">
            <p>
              <strong>Population:</strong> {userSelectedCountry.population.toLocaleString("en-US")}
            </p>
            <p>
              <strong>Region:</strong> {userSelectedCountry.region}
            </p>
            <p>
              <strong>Capital:</strong> {userSelectedCountry.capital?.[0] ?? "N/A"}
            </p>
            <p>
              {/* if viewCount is null because we're still loading the count from the API, show three dots */}
              <strong>Viewed:</strong> {viewCount ?? "…"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;