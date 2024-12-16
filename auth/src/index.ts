import express from "express";
import routes from "./routes";

const app = express();
const PORT = 8000;

app.use(express.json());

app.use("/api", routes);

app.get("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
