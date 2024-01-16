const express = require("express");
const champsRoutes = require("./routes/champs");
const itemsRoutes = require("./routes/items");

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use("/api/v1/champs", champsRoutes);
app.use("/api/v1/items", itemsRoutes);

app.listen(8080, () => console.log("Running server on http://localhost:8080"));
