// pages/SavedCountries.jsx
import { useState } from "react";
import "./SavedCountries.css";

function SavedCountries() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    country: "",
    bio: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // For now: confirm your handler works
    console.log("Submitted profile:", form);

    // resets form after submit
    setForm({ fullName: "", email: "", country: "", bio: "" });
  }

  return (
    <main className="saved-page">
      <div className="saved-left">
        <h2 className="saved-title">My Saved Countries</h2>

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
