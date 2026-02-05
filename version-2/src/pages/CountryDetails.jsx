// pages/CountryDetails.jsx
import { useParams, useNavigate } from "react-router-dom";
import "../App.css";


function CountryDetails({ countriesData }) {
  const navigate = useNavigate();
  // get this country's name from the URL parameter
  const countryName = useParams().countryName;
  // search for a matching country in countriesData that has the same name as the param being passed in
  const userSelectedCountry = countriesData.find((countryInfo) => (countryInfo.name.common === countryName))
  
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
    console.log('result', result);
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
              <strong>Viewed:</strong> 20 times
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;