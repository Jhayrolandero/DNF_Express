const express = require("express");
const activitiesRoutes = require("./routes/Activity");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
const PORT = 8080 || process.env.PORT;
const connectDB = require("./config/db");

// Connect DB
connectDB();

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use("/api/v1/activity", activitiesRoutes);

app.listen(PORT, () =>
  console.log(`Running server on http://localhost:${PORT}`)
);
