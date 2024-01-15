const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.listen(8080, () => console.log("Running server on http://localhost:8080"));

const champs = ["Yasuo", "Garen", "Aatrox", "Zed"];
app.get("/", (req, res) => res.send(champs));

app.post("/", (req, res) => {
  champs.push(req.body);
  res.sendStatus(201);
});
