import express from "express";

const router = express.Router();

router.get("/users/:userId", (req, res) => {
  res.json(["Hi there", req.params.userId]);
});

export default router;
