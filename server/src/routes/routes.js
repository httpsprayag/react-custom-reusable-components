const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

const userRoute = require("../routes/v1/userRoute");
// routes

// app.use(bodyParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/user", userRoute);

module.exports = app;
