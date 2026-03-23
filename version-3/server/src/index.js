// ---------------------------------
// Boilerplate Code to Set Up Server
// ---------------------------------

import express from "express";
import pg from "pg";
import config from "./config.js";

const db = new pg.Pool({
  connectionString: config.databaseUrl + "&uselibpqcompat=true",
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
// 2.🔹 GET /get-all-users  


// 3.🔹 POST /add-one-user  

//  SAVED COUNTRIES
// 4.🔹 GET /get-all-saved-countries  
// 5.🔹 POST /save-one-country  
// 6.🔹 POST /unsave-one-country  

//  COUNTRY COUNTS
// 7.🔹 POST /update-one-country-count 

// ---------------------------------
// API Endpoints
// ---------------------------------

// users
// 1.🔹 GET /get-newest-user 
// 2.🔹 GET /get-all-users  
// 3.🔹 POST /add-one-user  

// SAVED COUNTRIES
// 4.🔹 GET /get-all-saved-countries  
// 5.🔹 POST /save-one-country  
// 6.🔹 POST /unsave-one-country  

// COUNTRY COUNTS
// 7.🔹 POST /update-one-country-count 






   

// -------------------------------------
// 📊 USERS
// -------------------------------------

// 🔹 GET /get-newest-user  
// Description: Retrieves the most recently added user. 
// Your SQL command: 

// -- Insert one user
// SELECT name FROM users
// ORDER BY user_id DESC
// LIMIT 1;

// ____________________________


// 🔹 GET /get-all-users  
// Description: Retrieves all users from the database.  
// Your SQL command:

// -- Select all columns from the users table
// SELECT * FROM users;
// ____________________________


// 🔹 POST /add-one-user  
// Description: Adds a new user to the database.  
// Your SQL command:

// -- Insert one user

// INSERT INTO users (name, country_name, email, bio)
// VALUES ('$1', '$2', '$3', '$4');
    
// ____________________________


// -------------------------------------
// 📊 SAVED COUNTRIES
// -------------------------------------

// 🔹 GET /get-all-saved-countries  
// Description: Retrieves a list of all saved countries.  
// Your SQL command:

// -- Select the country_name column from the saved_countries table
// SELECT country_name FROM saved_countries;
// ____________________________



// 🔹 POST /save-one-country  
// Description: Saves a country if it hasn’t already been saved.  
// Your SQL command:

// -- Select one saved country where the country_name is Mexico 

// SELECT saved_country_id FROM saved_countries
// WHERE country_name = '$1';
// ____________________________



// 🔹 POST /unsave-one-country  
// Description: Unsaves a country if it has been saved.  
// Your SQL command:

// DELETE FROM saved_countries
// WHERE country_name = '$1';
// ____________________________



// -------------------------------------
// 📊 COUNTRY COUNTS
// -------------------------------------

// 🔹 POST /update-one-country-count  
// Description: Updates (or initializes) the view count for a country.  
// Your SQL command:

// -- Insert a country count for Ethiopia with an initial count of 1
// -- On conflict, increase its count by 1 and return the updated count
// -- Look at the query result and verify that Ethiopia's count has increased to 2

// INSERT INTO country_counts (country_name, count)
// VALUES 
// ('$1', 1)
// ON CONFLICT (country_name)
// DO UPDATE SET count = country_counts.count + 1
// RETURNING count;
// ____________________________