import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js"

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json())

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, console.log(`server is running on ${port}`));

app.use('/backend/user', userRoute)
app.use('/backend/auth', authRoute)