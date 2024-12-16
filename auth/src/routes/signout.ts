import express from "express";

const router = express.Router();

router.get("/signout", (req, res) => {
  res.json("Hi signout");
});

export default router;
