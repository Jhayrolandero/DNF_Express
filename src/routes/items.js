const { Router } = require("express");

const router = Router();

const items = [
  {
    name: "Stride Breaker",
    category: "Mythic",
    gold: 3200,
  },
  {
    name: "Infinity Edge",
    category: "Mythic",
    gold: 3200,
  },
  {
    name: "Sterak's Gage",
    category: "Legendary",
    gold: 2800,
  },
  {
    name: "Spear of Shojin",
    category: "Legendary",
    gold: 3100,
  },
  {
    name: "Stopwatch",
    category: "Epic",
    gold: 900,
  },
];

// router.get("/", (req, res) => {
//   res.send(items);
// });

router.get("/", (req, res) => {
  const query = req.query.gold;
  const queryInt = parseInt(query);
  if (!isNaN(queryInt)) {
    const filteredItems = items.filter((item) => item.gold >= queryInt);
    res.send(filteredItems);
  } else {
    res.send("Invalid Query");
  }
});

router.post("/", (req, res) => {
  items.push(req.body);
  res.send(`New items list: ${JSON.stringify(items)}`);
});

module.exports = router;
