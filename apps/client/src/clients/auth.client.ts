import { createAuthClient } from "better-auth/react";

export const AuthClient = createAuthClient({
  baseURL: "http://localhost:4000",
});
