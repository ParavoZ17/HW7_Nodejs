import express from "express";
import cors from "cors";
import notFoundHandler from "./middlewares/notFoundHandler.js";
import errorHandler from "./middlewares/errorHandler.js";
import productsRouter from "./routers/products.router.js";

const startServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("<h1>Hello, World!</h1>");
  });

  app.use("/api/products", productsRouter);

 app.post("/", (req, res) => {
  res.set("Content-Type", "application/json");

  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: "Request body is empty" });
  }

  res.json({ message: "Data received", data: req.body });
});

  app.use(notFoundHandler);
  app.use(errorHandler);

  const port = Number(process.env.PORT) || 4000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

export default startServer;
