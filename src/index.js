import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";

dotenv.config({
  path: process.env.NODE_ENV ? ".env" : ".env.development",
});

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);

app.listen(PORT ?? 5001, () => {
  console.log("Server is running on PORT: " + PORT);
  connectDB();
});
