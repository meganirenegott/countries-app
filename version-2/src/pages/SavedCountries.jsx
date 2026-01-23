// pages/SavedCountries.jsx
import { useState, useEffect } from "react";
import "../SavedCountries.css";

function SavedCountries({countriesData}) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    country: "",
    bio: "",
  });

  const [newestUserData, setNewestUserData] = useState(null);

// update the state when input values change
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();

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
        console.log(newestUserData.fullName);
    }
  catch (error) {
    console.log(error)
  }
};

useEffect(() => {
  getNewestUserData();
}, []);

  return (
    
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
  );
}

export default SavedCountries;
