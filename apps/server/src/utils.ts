import { type Auth } from "@/auth";
import { AuthController } from "@/controllers";
import { AuthKey, GlobalKey } from "@/keys";
import { Express } from "express";
import { container } from "tsyringe";
import { AuthRouter } from "@/routers";
import { toNodeHandler } from "better-auth/node";
import { connect } from "mongoose";

export const registerDependencies = (auth: Auth): void => {
  // global
  container.register<Auth>(GlobalKey.Auth, {
    useValue: auth,
  });

  // controllers
  container.register<AuthController>(AuthKey.Controller, {
    useClass: AuthController,
  });

  // routers
  container.register<AuthRouter>(AuthKey.Router, {
    useClass: AuthRouter,
  });
};

export const registerRoutes = (app: Express): void => {
  app.use("/auth", container.resolve(AuthRouter).routes());
};

export const connectDatabase = async () => {
  if (process.env.MONGO_URL) {
    connect(process.env.MONGO_URL)
      .then(() => console.log("📀 Database connection established!"))
      .catch((err) => console.error("Could not connect to Mongo", err));
  } else {
    throw new Error("Missing Mongo url connection string.");
  }
};
