import { Router, Request, Response } from "express";
import { validationErrorHandling } from "../middleware";
import { signinValidation } from "../validations";

const router = Router();

router.post("/signin", signinValidation, validationErrorHandling, (req: Request, res: Response) => {
  res.json({ data: req.body });
});

export default router;
