const { Router } = require("express");
const router = Router();
const Activity = require("../models/Activity");

const arrOfActivities = [];
router.get("/", async (req, res) => {
  try {
    if (arrOfActivities.length <= 0) {
      const activites = await Activity.find();
      console.log("Getting");
      activites.forEach((activity) => {
        arrOfActivities.push(activity);
      });
    }

    const randInt = Math.floor(Math.random() * arrOfActivities.length);

    res.send(arrOfActivities[randInt].activityTitle);
  } catch (err) {
    res.status(404);
    res.send(err);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
});

module.exports = router;
