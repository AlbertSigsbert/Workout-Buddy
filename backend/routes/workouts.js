const express = require("express");
const router = express.Router();
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout
} = require("../controllers/workoutController");

const requireAuth = require('../middleware/requireAuth');

//Require Authentication for all workout routes
router.use(requireAuth);

//GET all workouts
router.get("/", getWorkouts);

//GET single workout
router.get("/:id", getWorkout);

//POST a new workout
router.post("/", createWorkout);

//DELETE a single workout
router.delete("/:id", deleteWorkout);

//UPDATE a single workout
router.patch("/:id", updateWorkout);

module.exports = router;
