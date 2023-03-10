const express = require("express");

const router = express.Router();

// get all workouts
router.get("/", (req, res) => {
  res.json({ msg: "GET request to the workout page" });
});

// get a specific workout
router.get("/:id", (req, res) => {
  res.json({ msg: "GET a single workout" });
});

// post a new workout

router.post("/", (req, res) => {
  res.json({ msg: "POST a new workout" });
});

// delete a new workout

router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a new workout" });
});
// update a workout

router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a workout" });
});

module.exports = router;
