import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { toNodeHandler } from "better-auth/node";
import { Express } from "express";
import { MongoClient } from "mongodb";

export const configureAuth = (app: Express) => {
  if (!process.env.MONGO_URL) {
    throw new Error("Mongo url is required to create a client.");
  }

  const client = new MongoClient(process.env.MONGO_URL);
  const db = client.db();

  const auth = betterAuth({
    advanced: {
      cookies: {
        session_token: {
          name: "session_token",
        },
      },
    },
    database: mongodbAdapter(db, {
      client,
    }),
    emailAndPassword: {
      autoSignIn: false,
      enabled: true,
    },
    trustedOrigins: ["http://localhost:3000"],
  });

  app.all("/api/auth/*splat", toNodeHandler(auth));

  return auth;
};

export type Auth = ReturnType<typeof configureAuth>;
