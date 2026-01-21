import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import SavedCountries from "./pages/SavedCountries";
import dataFromLocalFile from "../localData";
import "./App.css";
import "./SavedCountries.css";
import { useEffect, useState } from 'react';


// Api Call, mostly boilerplate from lecture
// establishes async arrow  notation function called getCountriesData() that uses a promise (the fetch part) to call the restCountriesAPI with error handling (the try catch part)
const getCountriesData = async () => {
  // try catch sandwich with API call inside
  try {
    // fetch excecutes the async api call at the url, what comes out of the api call is stored as apiResponse, begining of the api async relay race
    const apiResponse = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,cca3,borders"
    );
    // pulls out json object from apiResonse, that apiResponse data is a representation of what was asked for in the fetch request
    const apiData = await apiResponse.json();
    // json object is returned when getCountriesData() function is called
    return apiData;
  } catch (error) {
    // if anything goes wrong during apiCall, we arrive here, the first thing we do is console.log the error
    console.error(error);
    // and then we fall back on pulling data from the local file
    return dataFromLocalFile; 
  }
};


function App() {
  // define countriesData as a state variable that can be modified with useEffect
  const [countriesData, setCountriesData] = useState([]);
  // useEffect guarentees that the following opperation will be run once after the first render
  useEffect(() => {
    // the following operation calls getCountriesData() and assigns what is returned to the countriesData state variable
      // since getCountriesData() is async, useEffect will trigger a rerender once the data arrives (MDN)
      getCountriesData()
        .then((data) => setCountriesData(data))
    }, []);

  return (
    <>
      {/* conditional rendering the welcome message */}
      {userInfo && <h2>Welcome {userInfo.fullName}</h2>}
      {/* header contains NavBar */}
      <header className="header">
        <Link to="/" className="header-title">
         <h2> Where in the world?</h2>
        </Link>

        <Link to="/saved" className="header-link">
          Saved Countries
        </Link>
      </header>

      {/* router paths */}
      <Routes>
        <Route
          path="/" element={<Home countriesData={countriesData} />}
        />
        <Route path="/saved" element={<SavedCountries countriesData={countriesData} />} />
        <Route path="/country-details/:countryName" element={<CountryDetails countriesData={countriesData} />} />
      </Routes>
    </>
  );
}

export default App;

