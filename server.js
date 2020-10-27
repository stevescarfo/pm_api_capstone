const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const policyRouter = require('./routes/policyRouter');
const mongoose = require("mongoose");

const app = express();

// parse HTTP requests with content-type = application/jason
app.use(bodyParser.json());

// parse HTTP requests with content-type = application/x-www-form-urnencoded
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/policymgrdb', {
  useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', function() {
  console.log("MongoDB database connection established successfully");
});

// top-level route
app.get("/", (req, res) => {
  res.json({ message: "Policy Management API"});
});

app.use('/api/policies', policyRouter);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});