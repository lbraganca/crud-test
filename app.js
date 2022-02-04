"use strict";
const express = require("express");
const path = require("path");
const request = require("./middleware/request");
const response = require("./middleware/response");
const authentication = require("./middleware/authentication");
require("./model");

const authRouter = require("./routes/auth");
const apiRouter = require("./routes/api");

const app = express();

app.use(express.json());
app.use(request);
app.use(response);
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/auth", authRouter);
app.use(authentication);
app.use("/api", apiRouter);

module.exports = app;
