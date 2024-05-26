# HydrateApp
 
HydrateApp
HydrateApp is a mobile application designed to help users track their daily water intake. The app features a user-friendly interface to log water entries, view progress, set daily intake goals, and review historical data. The backend is built using Node.js and Express, and it uses PostgreSQL (Supabase) for data storage.

Table of Contents
Setup Instructions
Documentation
Explanation
Setup Instructions
Prerequisites
Node.js (v14 or later)
npm (v6 or later)
Expo CLI
PostgreSQL
Supabase Account
Frontend Setup
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/HydrateApp.git
cd HydrateApp/Frontend
Install dependencies:

bash
Copy code
npm install
Set up Expo CLI:
If you don't have Expo CLI installed, install it globally:

bash
Copy code
npm install -g expo-cli
Start the Expo server:

bash
Copy code
expo start
Run the app on your device or emulator:

For Android: Use the Expo Go app from the Play Store.
For iOS: Use the Expo Go app from the App Store.
Backend Setup
Clone the repository (if not already done):

bash
Copy code
git clone https://github.com/yourusername/HydrateApp.git
cd HydrateApp/Backend
Install dependencies:

bash
Copy code
npm install
Set up environment variables:
Create a .env file in the Backend directory and add the following variables:

env
Copy code
PORT=5000
DATABASE_URL=your_supabase_postgresql_url
SUPABASE_KEY=your_supabase_key
Start the server:

bash
Copy code
npm start
Database Setup
Create a new project on Supabase.

Create tables in your Supabase PostgreSQL database using the following schema:

sql
Copy code
CREATE TABLE water_intake (
  id SERIAL PRIMARY KEY,
  amount INTEGER NOT NULL,
  date TIMESTAMP NOT NULL
);

CREATE TABLE daily_goal (
  id SERIAL PRIMARY KEY,
  goal INTEGER NOT NULL
);