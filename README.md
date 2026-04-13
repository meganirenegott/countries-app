# Countries App

## Description

"Where in the World?" is a web application that lets users explore detailed information about countries worldwide.  Users can select their favorites and store them in their profile. 

## 🚀 Live Site

Here's the link to view the live app: countries-app-megan-2026.netlify.app

## 🖼️ Screenshots

<img width="1117" height="990" alt="home page with gallery of country cards" src="https://github.com/user-attachments/assets/5aa48ba5-c885-4671-bfd4-c1aed5b4ee76" />


## ✨ Features

This is what you can do on the app: 
- Users can learn about a country
- Save Favorite Countries
- Responsive UI for a seamless user experience across all devices
- Real Time Data

## 🛠️ Tech Stack

**Frontend**

- **Languages:** React
- **Framework:** Deploy frontend server through Github. 
- **Deployment:** Netlify

**Server/API**

- **Languages:** Javascript and Node.js
- **Framework:** Express
- **Deployment:** Render

**Database**

- **Languages:** PostgreSQL
- **Deployment:** Neon.tech

## 🔹 API Documentation

These are the API endpoints I built: 

<img width="1247" height="753" alt="table with API endpoints and their description" src="https://github.com/user-attachments/assets/212525ae-e998-46c3-ae7c-d32a2cfef0fa" />


1. /get-all-users
2. /get-newest-user
3. /add-one-user
4. /update-one-country-count
5. /get-all-saved-countries
6. /save-one-country
7. /unsave-one-country

Here's the link to the full API documentation: https://github.com/ac-backend/countries-app-instructions/blob/main/version-3/api-documentation.md

## 🗄️ Database Schema

Here’s the SQL I used to create my tables:  

```sql
CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
name VARCHAR NOT NULL,
country_name VARCHAR NOT NULL,
email VARCHAR NOT NULL UNIQUE,
bio VARCHAR NOT NULL
);

CREATE TABLE saved_countries (
saved_country_id SERIAL PRIMARY KEY,
country_name VARCHAR NOT NULL UNIQUE
);

CREATE TABLE country_counts (
country_count_id SERIAL PRIMARY KEY,
country_name VARCHAR NOT NULL UNIQUE,
count INTEGER NOT NULL
);
```

**Future ideas for how I'd continue building this project:** 

1. Add User Authentication with secure email/password registration and login using Firebase Authentication


## License

This project is liscened under the MIT license

