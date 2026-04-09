// ---------------------------------
// Boilerplate Code to Set Up Server
// ---------------------------------

import express from "express";
import pg from "pg";
import config from "./config.js";

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

const app = express();
app.use(express.json());

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// ---------------------------------
// Helper Functions
// ---------------------------------

// users
// 1.🔹 GET /get-newest-user 

async function getNewestUser() {
    const result = await db.query(
    "SELECT name FROM users ORDER BY user_id DESC LIMIT 1");
    return result.rows;
}
// 2.🔹 GET /get-all-users

async function getAllUsers() {
  const result = await db.query("SELECT * FROM users;");
  return result.rows;
}

// 3.🔹 POST /add-one-user  

async function addOneUser(
    name,
    country_name,
    email,
    bio,
) {
    const result = await db.query(
     `INSERT INTO users (name, country_name, email, bio)
    VALUES ($1, $2, $3, $4)
    RETURNING *`,
        [
            name,
            country_name,
            email,
            bio,
        ],
    );

    return result.rows[0];
}

//  SAVED COUNTRIES
// 4.🔹 GET /get-all-saved-countries  

async function getAllSavedCountries() {
    const result = await db.query("SELECT country_name FROM saved_countries;"
);
  return result.rows;
}

// 5.🔹 POST /save-one-country  

async function saveOneCountry(
    country_name) {
    const result = await db.query(`INSERT INTO saved_countries (country_name) VALUES ($1) ON CONFLICT (country_name) DO NOTHING;`, [country_name]);
    return result.rows;
   
};


// 6.🔹 POST /unsave-one-country  

async function unsaveOneCountry(country_name) {
    const result = await db.query(`DELETE FROM saved_countries
WHERE country_name = $1`, [country_name]);
    return result.rows;
   
};

//  COUNTRY COUNTS
// 7.🔹 POST /update-one-country-count 
async function updateOneCountryCount(country_name) {
    const result = await db.query(
`INSERT INTO country_counts (country_name, count) VALUES ($1, 1) ON CONFLICT (country_name)
DO UPDATE SET count = country_counts.count + 1
RETURNING count`, [country_name]);
    console.log("country count debuggin", result.rows[0]);
return result.rows[0];
};


// ---------------------------------
// API Endpoints
// ---------------------------------

// users
// 1.🔹 GET /get-newest-user 

app.get("/get-newest-user", async (req, res) => {
  // calls the helper function
  const user = await getNewestUser();
  res.json(user);
});


// 2.🔹 GET /get-all-users  

app.get("/get-all-users", async (req, res) => {
  const allUsers = await getAllUsers();
  res.json(allUsers);
});

// 3.🔹 POST /add-one-user  


app.post("/add-one-user", async (req, res) => {
  const {
    name,
    country_name,
    email,
    bio,
  } = req.body;

  const user = await addOneUser(
    name,
    country_name,
    email,
    bio,
  );

  res.send(`Success! ${user.name} was added!`);
});


// SAVED COUNTRIES
// 4.🔹 GET /get-all-saved-countries  

app.get("/get-all-saved-countries", async (req, res) => {
  const allCountries = await getAllSavedCountries();
  res.json(allCountries);
});


// 5.🔹 POST /save-one-country  

app.post("/save-one-country", async (req, res) => {
    const {
        country_name,
    } = req.body;
    const savedCountry = await saveOneCountry(country_name);

  res.send(`Success! ${country_name} was saved!`);
});

// 6.🔹 POST /unsave-one-country  

app.post("/unsave-one-country", async (req, res) => {
    const {
    country_name,
    } = req.body;

    const unsaveCountry = await unsaveOneCountry(country_name);

  res.send(`Success! ${country_name} was unsaved!`);
});

// COUNTRY COUNTS
// 7.🔹 POST /update-one-country-count 
app.post("/update-one-country-count", async (req, res) => {
    const {
    country_name,
    } = req.body;

    const newCount = await updateOneCountryCount(country_name);
    
    res.json(newCount)
});

