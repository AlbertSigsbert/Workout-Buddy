const express = require("express");

const router = express.Router();

//GET all workouts
router.get("/", (req, res) => {
  res.json({ msg: "GET all workouts" });
});


//GET single workout
router.get("/:id", (req, res) => {
  res.json({ msg: "GET single workout" });
});


//POST a new workout
router.post("/", (req, res) => {
  res.json({ msg: "POST a new workout" });
});

//DELETE a single workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a workout" });
});

//UPDATE a single workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a workout" });
});



module.exports = router