import { type Auth } from "@/auth";
import { GlobalKey } from "@/keys";
import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { fromNodeHeaders } from "better-auth/node";
import { APIError } from "better-auth";

@injectable()
export class AuthController {
  constructor(@inject(GlobalKey.Auth) private readonly auth: Auth) {}

  public async login(request: Request, response: Response) {
    const { email, password } = request.body;

    try {
      const { headers } = await this.auth.api.signInEmail({
        body: { email, password },
        headers: fromNodeHeaders(request.headers),
        returnHeaders: true,
      });

      return response.setHeaders(headers).status(204).send();
    } catch (error) {
      if (error instanceof APIError) {
        return response.status(400).json({
          message: error.body?.message,
        });
      } else {
        return response.status(500).json({
          message: "Can't login a user.",
        });
      }
    }
  }

  public async logout(request: Request, response: Response) {
    try {
      const { success } = await this.auth.api.signOut({
        headers: fromNodeHeaders(request.headers),
      });

      if (success) {
        return response
          .clearCookie("session_token", {
            httpOnly: true,
            sameSite: "strict",
            secure: true,
          })
          .status(204)
          .send();
      } else {
        return response.status(400).json({
          message: "User could not be logged out.",
        });
      }
    } catch (error) {
      if (error instanceof APIError) {
        return response.status(400).json({
          message: error.body?.message,
        });
      } else {
        return response.status(500).json({
          message: "Can't logout a user.",
        });
      }
    }
  }

  public async register(request: Request, response: Response) {
    const { email, name, password } = request.body;

    // validate data

    try {
      const { user } = await this.auth.api.signUpEmail({
        body: {
          email,
          name,
          password,
        },
        headers: fromNodeHeaders(request.headers),
      });

      return response.status(201).json({
        id: user.id,
      });
    } catch (error) {
      if (error instanceof APIError) {
        return response.status(400).json({
          message: error.body?.message,
        });
      } else {
        return response.status(500).json({
          message: "Can't register a user.",
        });
      }
    }
  }
}
