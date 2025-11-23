import { betterAuth } from "better-auth";
import { Express } from "express";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import { toNodeHandler } from "better-auth/node";

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
  });

  app.all("/api/auth/*splat", toNodeHandler(auth));

  return auth;
};

export type Auth = ReturnType<typeof configureAuth>;
