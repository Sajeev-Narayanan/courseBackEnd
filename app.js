require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
app.use(cors());
app.use(express.json());
dotenv.config();
const connectDb = require("./config/dbConfig");
const courseRouter = require("./router/courseRouter");
app.use("/", courseRouter);
connectDb();
app.listen(3000, console.log("listening"));
