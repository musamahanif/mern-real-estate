import express from "express";
import mongoose from "mongoose";
import Dotenv from "dotenv";
Dotenv.config();

mongoose
  .connect(process.env.mongo)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("server is running on port 300!");
});
