var express = require("express");
const cors = require("cors");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var Router = require("./routes/routes");

var app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1", Router);

module.exports = app;
