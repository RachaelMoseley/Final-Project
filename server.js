// Using express to create server endpoints, and listen for & respond to requests from the fronend
import express from "express";

// Using dotenv so that we can access out environment variables
import "dotenv/config";

// Create an instance of express
const requestHandler = express();

//Storing our port value from the .env file
const port = process.env.PORT;

// The middleware express.json() parses incoming JSON requests and puts the parsed data in req.body
requestHandler.use(express.json());