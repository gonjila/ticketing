import { NextFunction, Request, Response } from "express";
const { validationResult } = require("express-validator");

function validateRequestSchama(req: Request, res: Response, next: NextFunction): void {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  next();
}

export default validateRequestSchama;
