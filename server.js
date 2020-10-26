const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// parse HTTP requests with content-type = application/jason
app.use(bodyParser.json());

// parse HTTP requests with content-type = application/x-www-form-urnencoded
app.use(bodyParser.urlencoded({ extended: true }));

// top-level route
app.get("/", (req, res) => {
  res.json({ message: "Policy Management API"});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});