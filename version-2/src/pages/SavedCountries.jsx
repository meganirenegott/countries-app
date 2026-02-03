// pages/SavedCountries.jsx
import { useState, useEffect } from "react";
import "../SavedCountries.css";
import CountryCard from "../components/CountryCard";

function SavedCountries({ countriesData }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    country: "",
    bio: "",
  });
  const [newestUserData, setNewestUserData] = useState(null);
  const [savedCountries, setSavedCountries] = useState([]);
  // update the state when input values change
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  // write a function for storing Form data
   const storeUserData = async (data) => {
    const response = await fetch(
      'api/add-one-user',
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
          name: data.fullName,
          country_name: data.country,
          email: data.email,
          bio: data.bio,
        }),
      }
    );
    // If the response is text type, then use response.text()
    // If the response is json data, use response.json()
    const result = await response.text();
    console.log('result', result);
  };

  // Handle form submission
 // call the form data storing function in here
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    storeUserData(form);

    // For now: confirm your handler works
    console.log("Submitted profile:", form);

    // resets form after submit
    setForm({ fullName: "", email: "", country: "", bio: "" });
  }

  // code block (API CALL to useEffect getNewUserData() ) from stackblitz lecture for calling API, fetch url is getting base API from vite.config.js file for API privacy
  // get newest user form data
  const getNewestUserData = async () => {
    try {
        const response = await fetch("/api/get-newest-user", {
          method: "GET",
        })
        const data = await response.json();
        const userData = data[0];
        console.log('data', data[0]);
        setNewestUserData({
          fullName: userData.name,
          email: userData.email,
          country: userData.country_name,
          bio: userData.bio,
        });
    }
  catch (error) {
    console.log(error)
  }
};

useEffect(() => {
  getNewestUserData();
}, []);

  


//   // get savedCountries get request
  const getSavedCountries = async () => {
    try {
      const response = await fetch(
        '/api/get-all-saved-countries',
        {
          method: 'GET',
        }
      );
      const data = await response.json();
      setSavedCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSavedCountries();
  }, []);

  
  const matchedSavedCountries = savedCountries.map((item) => {
    return countriesData.find(
      (country) => country.name?.common === item.country_name
    );
  })
  console.log(matchedSavedCountries);
  
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
          country_name: data.country,
        }),
      }
    );
    // If the response is text type, then use response.text()
    // If the response is json data, use response.json()
    const result = await response.text();
    console.log('result', result);
  };
  

  return (
// render saved countries
<>

{/* User's All Saved Countries */}
      <div className="countries-grid">
        {matchedSavedCountries.map((country) => (
          <CountryCard
            key={country.cca3}
            country={country}
          />
        ))}
      </div>



{/* render the form */}
    <main className="saved-page">
      <div className="saved-left">
        <h2 className="saved-title">My Saved Countries</h2>
        {newestUserData && <h2>Welcome {newestUserData.fullName}</h2>}
        <section className="profile-section">
          <h3 className="profile-title">My Profile</h3>

          <form className="profile-form" onSubmit={handleSubmit}>
            {/* Full Name */}
            <label className="sr-only" htmlFor="fullName">
              Full Name
            </label>
            <input
              id="fullName"
              className="profile-input"
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              autoComplete="name"
            />

            {/* Email */}
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className="profile-input"
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />

            {/* Country */}
            <label className="sr-only" htmlFor="country">
              Country
            </label>
            <input
              id="country"
              className="profile-input"
              type="text"
              name="country"
              placeholder="Country"
              value={form.country}
              onChange={handleChange}
            />

            {/* Bio */}
            <label className="sr-only" htmlFor="bio">
              Bio
            </label>
            <textarea
              id="bio"
              className="profile-textarea"
              name="bio"
              placeholder="Bio"
              value={form.bio}
              onChange={handleChange}
              rows={6}
            />

            <button className="profile-submit" type="submit">
              Submit
            </button>
          </form>
        </section>
      </div>

      {/* Right side intentionally blank to match the screenshot spacing */}
      <div className="saved-right" />
      </main>
      </>
      );
}

export default SavedCountries;
