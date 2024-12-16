import { Router, Request, Response } from "express";
import { signinValidation } from "../validations";
import { validationErrorHandling } from "../middleware";

const router = Router();

router.post("/signup", signinValidation, validationErrorHandling, (req: Request, res: Response) => {
  res.json("Hi signup");
});

export default router;
