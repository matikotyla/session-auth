import "reflect-metadata";

import dotenvx from "@dotenvx/dotenvx";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";

import { registerDependencies, registerRoutes, connectDatabase } from "@/utils";
import { configureAuth } from "@/auth";

const env = process.env.NODE_ENV || "dev";

dotenvx.config({
  path: path.resolve(__dirname, "..", `.env.${env}`),
});

const app = express();
const port = process.env.PORT ?? "4000";

app.use(express.json());
app.use(cookieParser());

connectDatabase();
const auth = configureAuth(app);
registerDependencies(auth);
registerRoutes(app);

app.listen(port, () => {
  console.log(`🚀 Example app listening on port ${port}`);
});
