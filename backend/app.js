require("dotenv").config();
const express = require("express");
const app = express();
const todoRoutes = require("./routes/todoRoutes");
const connectToDB = require("./config/db")


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


connectToDB();
app.use("/", todoRoutes);

module.exports = app 