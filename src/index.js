//require('dotenv').config({path: './encv'})

import dotenv from "dotenv";

//  keep only ONE import for database
import connectDB from "./db/index.js";


// Import mongoose for MongoDB connection
//import mongoose from "mongoose";
// Import database name constant
//import { DB_NAME } from "./constants.js";


dotenv.config({
    path: './.env'   //  usually .env (not ./env)
});


//  call database connection
connectDB();







/*
// Import express framework
import express from "express";

// (Optional but recommended) load environment variables from .env file
import dotenv from "dotenv";
dotenv.config();

// Create express app
const app = express();


// Create an async self-invoking function
// (so we can use await inside it)
(async () => {

  try {

    // Connect to MongoDB using URL from .env + database name
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

    // Listen for express app errors
    app.on("error", (error) => {
      console.log("ERROR:", error);
      throw error;
    });


    // Start server on PORT from .env
    app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
    })

  } 
  catch (error) {

    // If MongoDB connection fails → print error and stop app
    console.error("ERROR:", error);

    throw error; // stop node process safely
  }

})();
*/