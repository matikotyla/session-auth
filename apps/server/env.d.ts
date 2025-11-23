// env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    BETTER_AUTH_SECRET?: string;
    BETTER_AUTH_URL?: string;
    MONGO_URL?: string;
    NODE_ENV: "dev" | "prod" | "stage" | "test";
  }
}
