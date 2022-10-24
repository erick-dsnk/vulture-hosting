import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { config } from "dotenv";
config();

import router from "./routes";

const app = express();

app.use(cors())
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api", router);

try {
  mongoose.connect(
    process.env.MONGO_URI,
    () => {
      console.log("connected to database");
    }
  );
} catch (error) {
  console.log(error.message);
}

process.on("unhandledRejection", (error) => {
  console.log(error);
});

app.listen(parseInt(process.env.PORT, 10) || 3000, "localhost", () => {
  console.log("server listening on port 3000");
});
