# Countries App

## Description

"Where in the World?" is a web application that lets users explore detailed information about countries worldwide.  Users can select their favorites and store them in their profile. 

## 🚀 Live Site

Here's the link to view the live app: countries-app-megan-2026.netlify.app

## 🖼️ Screenshots

<img width="1117" height="990" alt="home page with gallery of country cards" src="https://github.com/user-attachments/assets/5aa48ba5-c885-4671-bfd4-c1aed5b4ee76" />


<img width="1873" height="673" alt="country card with population, capital, region, view count and option to save country as favorite" src="https://github.com/user-attachments/assets/4b879851-ced7-4b90-90f2-7cb573c61224" />

## ✨ Features

This is what you can do on the app: 
- Users can learn about a country
- Save Favorite Countries
- Responsive UI for a seamless user experience across all devices
- Real Time Data

## 🛠️ Tech Stack

**Frontend**

- **Languages:** Javascript, React with Vite
- **Framework:** Deploy frontend server through Github
- **Deployment:** Netlify

**Server/API**

- **Languages:** Javascript and Node.js
- **Framework:** Deploy backend web server through Github. Can respond to HTTP requests from our deployed frontend.
- **Deployment:** Deploy PostgreSQL database to Neon. Connects to Render web server to respond to SQL queries.

**Database**

- **Languages:** Build a server using Node.js and Express
- **Deployment:** PostgreSQL database using Neon.tech

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

## 💭 Reflections

**What I learned:** ___________

**What I'm proud of:** ___________

**What challenged me:** ___________

**Future ideas for how I'd continue building this project:** 

1. Add User Authentication with secure email/password registration and login using Firebase Authentication


## 🙌 Credits & Shoutouts 

If you used any resources for inspiration, tutorials, or documentation, you can mention them here.
You can also give a shoutout to anyone who helped you along the way.

