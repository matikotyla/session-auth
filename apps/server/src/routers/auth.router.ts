import { AuthController } from "@/controllers";
import { AuthKey } from "@/keys";
import { NextFunction, Request, Response, Router } from "express";
import { inject, injectable } from "tsyringe";

@injectable()
export class AuthRouter {
  private readonly router: Router = Router();

  constructor(
    @inject(AuthKey.Controller) private readonly authController: AuthController,
  ) {
    this.register();
  }

  public register(): void {
    this.router.post("/login", (req: Request, res: Response) =>
      this.authController.login(req, res),
    );
    this.router.post("/register", (req: Request, res: Response) =>
      this.authController.register(req, res),
    );
    this.router.post("/logout", (req: Request, res: Response) =>
      this.authController.logout(req, res),
    );
  }

  public routes(): Router {
    return this.router;
  }
}
