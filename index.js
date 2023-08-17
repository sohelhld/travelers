const express = require("express");
const { connection } = require("./db");
var cookieParser = require("cookie-parser");
var cors = require("cors");
const { travelerRouter } = require("./routes/user.routers");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/travelers", travelerRouter);


app.listen(8000, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }

  console.log(`server is runing at 8000`);
});