import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import SavedCountries from "./pages/SavedCountries";
import dataFromLocalFile from "../localData";
import "./App.css";
import "./SavedCountries.css";


function App() {
  return (
    <>
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
          path="/"
          element={<Home countriesData={dataFromLocalFile} />}
        />
        <Route path="/saved" element={<SavedCountries />} />
        <Route path="/country-details/:countryName" element={<CountryDetails />} />
      </Routes>
    </>
  );
}

export default App;

