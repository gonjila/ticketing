import express from "express";

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json("aaaaa23");
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
