import { Router } from "express";

const router = Router();

router.get("/me", (req, res) => {
  res.json("Hi there");
});

export default router;
