require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

//express app
const app = express();

//midlewares
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for request
    app.listen(process.env.PORT, () => {
      console.log(`Connected to db & listening for request on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//routes
app.use("/api/workouts", workoutRoutes);
