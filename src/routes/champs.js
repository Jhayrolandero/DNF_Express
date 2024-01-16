const { Router } = require("express");

const router = Router();

const champs = [
  {
    name: "Garen",
    mastery: 6,
  },
  {
    name: "Yasuo",
    mastery: 6,
  },
  {
    name: "Zed",
    mastery: 6,
  },
  {
    name: "Aatrox",
    mastery: 6,
  },
];

router.get("/", (req, res) => res.send(champs));

router.get("/:name", (req, res) => {
  const name = req.params.name;
  const champName = champs.find(
    (c) => c.name.toLowerCase() === name.toLowerCase()
  );
  if (champName) {
    console.log(champName);
    res.status(200);
    res.send("Found");
  } else {
    console.log("Not Found");
    res.status(404);
    res.send("Not Found");
  }
});

router.post("/", (req, res) => {
  champs.push(req.body);
  res.sendStatus(201);
});

module.exports = router;
