import "reflect-metadata";

import dotenvx from "@dotenvx/dotenvx";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import path from "path";

import { configureAuth } from "@/auth";
import { connectDatabase, registerDependencies, registerRoutes } from "@/utils";

const env = process.env.NODE_ENV || "dev";

dotenvx.config({
  path: path.resolve(__dirname, "..", `.env.${env}`),
});

const app = express();
const port = process.env.PORT ?? "4000";

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

connectDatabase();
const auth = configureAuth(app);
registerDependencies(auth);
registerRoutes(app);

app.listen(port, () => {
  console.log(`🚀 Example app listening on port ${port}`);
});
