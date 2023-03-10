const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.listen(3010, () => console.log("Server running on port 3010"));

module.exports = app;